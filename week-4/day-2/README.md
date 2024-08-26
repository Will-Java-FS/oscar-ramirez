Event
- An event is a change in state, or an update, like an item being placed in a shopping cart on an e-commerce website

Event Manager or Broker
- Middleware

Observer Pattern
Subject -> Fire Event -> Observer -> Subscribe -> Subject

Public-Subscribe Pattern
Publisher -> public topic (event) -> Topic/Event 
    Subscriber -> subscribe -> topic/event
    Subscriber -> Fire Event -> topic/event

Kafka
- Apache kafka is an open-source dist. event streaming platform used by thousands of companies



Agility
- Everything happens as soon as possibe and nothing is waiting on anything else
Scalability
- You don't have to consider what's happening downstream, so you can add service instances to scale
Loosely-Coupled
- To add another service, you can just have it subscribe to an event and have it generate new events of its own - there's no impact on existing services

Drawbacks of Event Driven Architecture
Increased complexity
