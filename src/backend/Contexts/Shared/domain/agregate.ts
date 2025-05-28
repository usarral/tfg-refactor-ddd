export abstract class AggregateRoot {
    private domainEvents: Array<DomainEvent>
    
    constructor() {
        this.domainEvents = [];
    }
    public pullDomainEvents(): Array<DomainEvent> {
        const events = this.domainEvents;
        this.domainEvents = [];
        return events;
    }
    record(event: DomainEvent): void {
        this.domainEvents.push(event);
    }
    abstract toPrimitives(): any;
}