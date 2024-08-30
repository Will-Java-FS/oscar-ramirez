# Docker QC REVIEW
### What is a container? How is it different from a VM?
A container is a software unit that contains code and its dependencies as a package. A container is different from a virtual machine in that it will share the underlying OS kernel, and is run by an engine running on the host. Whereas a virtual machine is more of an instance of a computer with its own hardware separation.

### What is the Docker Daemon?
The Docker Dawmon is the long running rpocess on the docker host that does all of the heavy lifting. It manages docker objects, containers, images, and the core of the running dockerized applications.

### What is a Docker image?
Docker images are a blue print for a container.

### How is a Docker image different from a Docker container?
A docker image is different from a docker container in the same way that a class is different from an object. Once is a definition/configuration, and the other is an instance.

### List the steps to start Docker, create a Docker image, and spin up a container
- docker start [container]
- docker build [pathToDockerFile]
- docker run [image-name]


### What is the relevance of the Dockerfile to this process? List some keywords in the Dockerfile.
The Dockerfile defines everything needed for an image. It outlines the starting point, dependencies, and commands that make up all the processes for an image and in turn a container.
- Step by step instructions on how to create an image.

### What are some other Docker commands?
- `docker --version` installed version of docker
- `docker images` list all locally stored docker images
- `docker ps` list of running containers
- `docker stop <container-id>`
- `docker rm` / `docker rmi`

### What is a container registry? How would you retrieve and upload images to DockerHub?

- Holds images, either public or private
- Use docker pull and docker push to upload/download images

### If you want to store state for a container, how does Docker recommend doing that?

Use a volume or connect to external state management service
Volumes are file systems mounted to a container and exist on the host independent of the container