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

## Security Groups

## AMI

## EBS

## Intro To AWS S3

## AWS S3 Bucket Configuration

## Hosting Static Sits On S3
