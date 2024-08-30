# AWS QC REVIEW
<!-- =================================================================================================== -->
## Cloud / AWS Overview
### How would you describe AWS? What is "the cloud" or "cloud computing" and why is it so popular now?
Amazon Web Service is a comprehensive and widely popular computing platform. It provides a variety of cloud-based serviecs and solutions that businesses and individuals use for pomputing power, storage, databases, machine learning, analytics, etc. It has become so popular because it allows users to run applications, and manage infrastructure, platforms, and software in the cloud without having to invest in and maintain physical hardware.
### Define Infrastructure, Platform, and Software as a Service
- **Infrastructure as a service (IaaS)**
  - provides virtualized computing resources over the internet. This is the most fundamental of the three primary models, offering the basic intfrastructure elements required to run application and manage data.
  - Storage, Networking, Management, VMs 
  - Examples: EC2, MS Azure VMs

- **Platform as a service (PaaS)**
  - provides a platform for developers to vuild, deploy, and manage applicaitons without worrying about the underlying infrastructure. It abstracts the infrastucture layer and provides tools and services for application development and deployment
  - Dev tools, Middleware, Application Hosting, Management
- **Software as a service (SaaS)**
  - provides software applications over the internet on a subscription basis. Users access these applications through a web browser, the cloud provider manages all aspects of the software, including infrastructure, platforms, and application maintenance
  - Access, subscription based, automatic updates, multi-tenancy

### What's the difference between a Region and an Availability Zone (AZ)?
- A region is a highly available data center, that provides amazon cloud computing resources
- Each region has several distinct Availability zones, which are isolated from failures in other AZs

### How are you charged for using AWS services? Does it vary by service?
AWS charges you only for what you use. It's a low variable expense as opposed to a large fixed one. It varies by service as well as usage, and there are several different options for each service as well. For example if you were to choose a scheduled standard reservation of an EC2 you may be charged more than if you had chosen a spot or bid reservation. 

### Different ways to interact with AWS services?
One of the common and easier ways to interact with AWS is through the console, but you can also interact with AWS through the command line interface. 

<!-- =================================================================================================== -->
## EC2 
### What are the configuration options for EC2?
Some configurations include instance name, type, AMI, instance size, storage options, networking, key pairs

### What are the different EC2 instance sizes/types?
On demand, spot and reserved. On demand is zero commitment fixed rate by the hour. Spot instances can potentially have better savings as you bid for a specific price, especially if  application start/end times are flexible. Reserved instances (standard, convertible, scheduled), very useful for steady state applications.

### Once you create an EC2, how to connect to it?
- SSH through the CLI, using the EC2 IP addr, and the key pair(.pem) assigned to the instance by AWS.
- Host client via session manager

### What are Security Groups? When defining a rule for a security group, what 3 things do you need to specify?
Security groups control the inbound/outbound traffic of an EC2.
- The three things you need to specify for a security group are traffic type, protocol, port range, source/destination

### What's the difference between scalability, elasticity, and resiliency?

- **Scalability** is a characteristic of cloud computing through which increasing workload can be handled by increasing in proportion the amount of resource capacity. It allows the architecture to provide on demand resources if the requirement is being raised by the traffic.
- **Elasticity** is the concept of commissioning and decommissioning of large amount of resource capacity dynamically. It is measured by the speed by which the resources are coming on demand and the usage of the resources.
- **Resiliency** refers to the ability to recover from a disaster or outage

### What is autoscaling?
:)

### Ways of paying for EC2?
Based on types of instance.
<!-- =================================================================================================== -->
## RDS
### What's an RDS?
An Amazon RDS, or Amazon Relational Database Service, is a web service that makes it easier to set up, operate and scale a relational database in the AWS Cloud
- RDS automates expensive and time consuming tasks
- Can control access using AWS Identity and Access Management (IAM)
- Free to try, pay as you go (depending on monthly usage)
### Which vendors are supported?
RDS Provides six familar database engines to choose from, including MySQL, Amazon Aurora, PostgreSQL, MariaDM, SQL Server, and Oracle Database

<!-- =================================================================================================== -->
## S3
### What kind of data would you store on S3 vs a database?
- Just about any kind of data can be stored in an S3. Durability is very high, so perhaps any kind of data that you want to make sure you don't lose, or have access to no matter where you go with internet access. Some more specific examples include hosting applications, static websites, and back up storage.
- Databases however tend to be for a more specific purpose tied to projects, applications, services, and typically carry relational data.

### Are there any limits on S3?
There is no limit for objects per bucket, there is however, a soft cap of 100 buckets per account. There are ways of increasing this however, and an object can range from 0 to 5TB. But you can only PUT up to 5GB per upload.

### What are the rules for bucket naming?
Bucket names must be globally unique.

### What are the different storage tiers?
A common tier is standard tier, but the tiers ultimately depend on object size and frequency of retrieval.

### Can you use S3 to host a front-end or back-end of an application?
Absolutely.