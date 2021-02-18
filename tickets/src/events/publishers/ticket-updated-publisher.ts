import { Publisher, Subjects, TicketUpdatedEvent } from '@dastickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}