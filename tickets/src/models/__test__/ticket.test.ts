import { Ticket } from '../ticket'

it('implements optmistic concurrency control', async (done) => {
  const ticket = Ticket.build({
    title: 'Test',
    price: 10,
    userId: '123'
  })
  await ticket.save()

  const firstInstance = await Ticket.findById(ticket.id)
  const secondInstance = await Ticket.findById(ticket.id)

  firstInstance!.set({ price: 20})
  secondInstance!.set({ price: 30})

  await firstInstance!.save()
  try {
    await secondInstance!.save()
  } catch (err) {
    return done()
  }
}) 

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'Test',
    price: 10,
    userId:'123'
  })

  await ticket.save()
  expect(ticket.version).toEqual(0)
  await ticket.save()
  expect(ticket.version).toEqual(1)
  await ticket.save()
  expect(ticket.version).toEqual(2)
})
