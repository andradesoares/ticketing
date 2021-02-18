import { Publisher, OrderCreatedEvent, Subjects } from '@dastickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}