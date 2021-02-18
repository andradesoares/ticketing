import { Message } from 'node-nats-streaming'
import { Subjects, Listener, PaymentCreatedEvent, OrderStatus } from '@dastickets/common'
import { Order } from '../../models/order'
import { queueGroupName } from './queue-group-name'

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated

  queueGroupName = queueGroupName

  async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
    
    const order =  Order.findById(data.orderId)
    
    if (!order) {
      throw new Error('Order not found')
    }

    order.set({
      status: OrderStatus.Complete
    })

    await order.save()

    msg.ack()
  }
}