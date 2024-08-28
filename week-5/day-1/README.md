# Amazon EC2 - Elastic Cloud Compute
A part of Amazon's cloud-computing platform, Amazon Web Services (AWS), that allows users to rent virtual computers on which to run their own computer applications

## EC2 Autoscaling
- Amazon EC2 Auto Scaling ensures the correct number instances are available to handle the load for your application

**Auto scaling groups** - collections of EC2 instances (Auto Scaling groups)
    
- You can specify the a min/max #, which auto scaling will ensure/enforce

**Two types of scaling**:
  - Vertical Scaling (scale the instance)
  - Horizontal Scaling (scale the number of instances)
  - horizontal is preferable with a large scale application (speed, elasticity, performance)

## SSH Into EC2 Instance
SSH (Secure Shell AKA Secure Socket Shell) - a network protocol that gives users, particularly system admins, a secure way to access a computer over an unsecured network
- Your EC2 instance will be running in a public subnet
  - The EC2 instance has a public address on the internet which you can access anywhere with internet access
The relevant protocol by which we can access the instance is by using Secure Schell (SSH) which is the TCP protocol port 22

Implementation:
  - AWS Console -> EC2 -> Instances -> Instance -> Connect -> SSH Client
  - Open cmd/terminal -> run command -> confirm authenticity of host

## AWS EC2
Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the AWS Cloud
- Eliminates need to invest in hardware upfront
- Launch as many or as few virtual servers as you like
  - configure security, networking, and manage storage
- scale up/down to handle changes in requriements or spikes in popularity

### Types of EC2:
- **On-demand** instances
    - pay fixed rate by the hour/second, 0 commitment
- **Spot** instances
    - bid for a price for instance capacity, better savings if applications have flexible start/end times
- **Reserved** instances
  - *Standard Reserved Instances* discounted up to 75%, useful for steady state applications
  - *Convertible Reserved Instances* discounted up to 54%, can scale up, also useful for steady state applications
  - *Scheduled Reserved Instances* available at launch within specified time window
    - useful for recurring scheduled capacities that only require fractions of a day/week/month\

### Setup:
1. Choose an Amazon Machine Image (AMI)
2. Choose an Instance Type
3. Configure Instance Details
4. Add Storage
5. Add tags
6. Configure Security Group
7. Review Instance Launch and Select Key Pair
    
## Security Groups
A security group controls the traffic that is allowed to reach and leave the resources that it is associated with
- Can create additional groups for each VPC (virtual private cloud)
  - can add rules that control the inbound/outbound traffic based on protocols and port numbers
- Can only associate a security group with resources in the VPC for which it is created

## AMI
An Amazon Machine Image (AMI) is a supported and maintained image provided by AWS that provides the information required to launch an instance
  - Can launch multiple instances from a single AMI when you require multiple instances with the same config
  - Amazon Linux 2 and the Amazon Linux AMI are example supported and maintined images
#### An AMI includes the following:
- One or more EBS snapshots
- Launch permissions that control which AWS accounts can use the AMI to launch instances
- A block device mapping specifies the volumes to attach to the intance when it's launched

We can luanch an instance, customize it, and then save the configuration as a custom AMI
  - instances launched from that custom AMI will contain all of the new customized configs
The root storage device of the instance determines the process to create an AMI. The root volume of an instance is either an **Amazon Elastic Block Store (Amazon EBS) volume**, or an **instance store volume**

### Create an Amazon EBS-backed AMI:
1. Start with an existing AMI
  - find one similar to what you'd like to create
2. Launch instance from AMI
3. Custmize the instance
  - connect to the instance and customize it
    - Install software and applications
    - Copy data
    - Reduce start time by deleting temporary files, defragmenting your hard drive, andd zeroing out free space
    - Attach additional EBS volumes
4. Create an image
  - Amazon EC2 powers down the instance before creating the AMI
  - If you're sure the instance is in a consistent state, you can choose to not power down/reboot the instance
  - Some files systems, such as XFS, can freeze/unfreeze activity to make it safe to create the image without rebooting
  - Amazon EC2 creates snapshots of your root volume and any other EBS volumes attached
  - You're charged for the snapshots until you deregister the AMI and delete the snapshots
  - If volumes are encrypted, the AMI only launches with instances that support encryption
  - Volume size can effect the process time
    - May be more efficient to create snapshots of volumes before creating AMI
5. Launch an instance with the new AMI

## EBS
Amazon Elastic Block Store (Amazon EBS) provides block-level storage volumes for use with EC2 instances
- EBS Volumes behave like raw, unformatted block devices
  - you  can mount these volumes as devices on your instances
- EBS volumes that are attached to an instance are exposed as storage volumes that persist independently from the life of the instance
  - you can create a file system on top fo these volumes, or use them in anyway you would use a block device (e.g., hard drive)
- Can dynamically change the configuration of a volume attached to an instance
- You pay only for what you use 
- Amazon EBS is a durable, block-level storage device 
  - ycan use it as you would use a physical hard drive
  - e.g., primary storage for data that requries frequent updates
    - database application, system drive for an instance
- EBS volumes are create in a specific Availability zone, and can then be attached to any instances in that zone

#### EBS Snapshots
You can back up the data on your Amazon EBS volumes to Amazon S3 by taking point-in-time snapshots
- Snapshots are incremental backups
  - only the blocks on the device that have changed after your most recent snap are saved

#### Create an EBS Volume for AWS EC2
1. Sign into AWS using admin account
2. Navigate to the EC2 Console
3. CHoose an EC2 setup region from the region drop-down list at the top of the page
4. Select Volumes in the Navigation pane
5. Click Create Volume
6. Click Create
7. Choose Actions -> Create Snapshot
8. Type EBS.Backup in the Name field, type Test Backup in the Description field, and then click Create
9. Click Close. The volume is ready to use.

## Intro To AWS S3
Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.
- Store and retrieve any amount of data at any time, from anywhere

#### S3 as an Object Storage System
- Amazon S3 is an object storage system which means the data is stored as individual objects rather than in some kind of hierarchy like you would see in a file system or directory structure
- Each objec tis put into a bucket and you can connect to Amazon S3 using a URL
  - the URL will have the name of your obj and the name of your bucket
- Connect to S3 via REST API using a URL
- Browser does an HTTP PUT request and puts the objects in the bucket

#### Use Cases for S3
- Store any type of file
- Backup and storage
- Application Hosting
- Media Hosting
- Software Delivery - host software apps taht yourcustomers can download
- Static Website Hosting - you can configure a static website to run from an S3 bucket

#### Launching an S3 Bucket
1. Under Storage and Content Delivery, choose S3 to open the Amazon S3 console
2. From the Amazon S3 console dashboard, choose Create Bucket
3. In Create a Bucket, type a bucket name in Bucket Name. The bucket name you choose must be globally unique across all existing bucke names in Amazon S3 (i.e., across all AWS customers)
4. Choose to Create. When Amazon S3 successfuly creates your bucket, the console displays your empty bucket in the Buckets pane

## AWS S3 Bucket Configuration
To upload data (photos, videos, documents, etc) to Amazon S3, you must first create an S3 bucket
- Every obj you store resides in a bucket
  - Use buckets to group related objects in the same way that you use a directory to group files in a file system
- S3 creates buckets in the AWS Region that you specify
  - Choose any AWS Region that is geographically close to you to opimize latency, minimize costs, or address regulatory requirements