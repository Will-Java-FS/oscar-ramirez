## Event Driven Architecture QC REVIEW
### What is Event Driven Architecture? What are Events?
- EDA is a design pattern where the flow of data and the communication between different parts of a system is driven by event.
- An event is a change in state or an occurence that can trigger a reaction.

### What are some use cases for using Event Driven Architecture?
- Real time data processing (stock price changes)
- User Activity Tracking and Analytics (tracking user clicks and advertisement interaction)
- Microservice communication (allows microservices to communicate via pub sub design pattern rather than making direct API calls)

### What is an Event Stream in Kafka?
An event stream is a continuous flow of events or records that are published to a Kafka topic.
These even streams are scalable, fault-tolerant and durable. Great for real-time data processing and analytics use cases.

### What is the use of Kafka?
Kafka is a powerful distributed event streaming platform used for building real-time data pipelines and streaming applications. It is widely adopted for its abiliyt to handle high-throughput, fault-tolertant, and scalable data streams.
- Messaging and communication
- Activity tracking
- De-coupling of system dependencies
- Event sourcing
  - Capturing state changes as a sequence of immutable events

### What is the role of a Kafka Broker?
Kafka event brokers mnediate the communication of event messages between producers and consumers using the various message exchange patterns.

### What is a topic in kafka?
In Kafka, a topic is a fundamental concept that represents a logical channel to which events are published and from which records are consumed.

### What is a Kafka Producer? Consumer?
A Kafka producer is responsible for sending records to Kafka topics. A Kafka consumer is repsonsible for reading and processing records from Kafka topics.
