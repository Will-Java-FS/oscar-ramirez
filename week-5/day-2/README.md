# Containers

## Containers Vs Vms

**Container:** A container is a software unit that contains the code and its dependencies as a package. The app can run quickly from one computer env to another by using a container

**Virtual Machine:** A Virtual machine is avirtual env that has its hardware isolation. A computer can contain two or more virtual machines. Each virtual machine has its hardware separation.

By sharing containers with the cloud, and providing it with all the code, dependencies, configurations, networks and libraries, we cna ensure that the projects will work fine everywhere.

Container Engine:

- Container Engine is software used to create and manage containers
- It separates the OS and makes isolation to run containers

Container:

- A **lightweight** software package that contains all the dependencies/libraries required to run the software application
- Containers are isolated processes
- It doesn't require hardware like a hypervisor
- It is **very fast compared to a Virtual Machine**

Hypervisor:

- Hypervisor is software used to create and manage vms
- It separates the hardware that a vm can run its os

Virtual Machine:

- a virtual environment in a computer that has its own hardware separation
- Like a physical computer in virtual form
- Can be created from a computer with its own hardware isolation

## Containerization

An approach of encapsulating/packing code and all its dependencies. It can run on any infrastructure using the resources of the OS.

**Containerization** - running an application in an isolated environment that uses a shared OS

- Like a lightweight vm
- Has everything an app needs to run

<table>
  <thead>
    <th>Advantages</th>
    <th>Disadvantages</th>
  </thead>
  <tr>
    <td>Better efficiency when compared to vms</td>
    <td><b>Security:</b> Compared to vms, the security in containers is less. So the containers need to be secured by multiple layers.</td>
  </tr>
  <tr>
    <td><b>Portability:</b> WHen the containers are created from an OS, they will not be dependent on the host OS.</td>
    <td><b>Data Storage:</b> The VM has hardware storage separation. But the containers share the OS resources. WHen more containers run in VM, the complexity of storage is high.</td>
  </tr>
  <tr>
    <td><b>Security:</b> The containerization provides an isolated application that prevents it from affecting another container</td>
    <td><b>Monitoring:</b> Monitoring the containers becomes more difficult as the number of containers grow</td>
  </tr>
  <tr><td>Continuity: If any failure occurs in one env, it will not affect the other</td></tr>
  <tr><td>Speed: Highly flexible and lightweight</td></tr>
  <tr><td>Scalability:</td></tr>
  <tr><td>Efficiency:</td></tr>
</table>

## Docker Definition

## Installing Docker

## Docker Architecture

## Docker Images

## Docker Containers

## Dockerfile

## Docker Volumes

## Docker Best Practices

## Docker Daemon

## Dockerfile Keywords

## Building An Image

## Creating A Container

## Managing Containers

## Docker Command Cheatsheet

## Docker Image Configuration
