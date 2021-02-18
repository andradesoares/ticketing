import { Publisher, Subjects, TicketCreatedEvent } from '@dastickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}