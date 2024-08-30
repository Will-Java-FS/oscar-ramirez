## DevOps QC REVIEW
### What is DevOps? What is the goal of various DevOps processes?
DevOps is the combination of philosophies, practices and tools that increase an organization's ability to deliver applications and services at high velocity.

### Explain CI/CD. What is the difference between Continuous Deployment and Continuous Delivery?
- Continuous Integration is a software development process utilizaing version control software, where code is continuously tested after a commit to ensure there are no bugs. Typically involves running test suites on code after new commits.
- Continuous Delivery is the process of automating all steps of a development pipeline except for the final deployment step. Its a paradigm in which the building, management, and testing of produced software is automated such that deployments can be performed at the push of a button.
- Continuous Deployment is different in that it does not need a manual approval process. It is fully automated and does not give an opportunity for developers to manually test changes before deployment.

### What tools have you used to achieve CI/CD? Explain how you’ve setup and used them
Jenkins.


### What is a DevOps pipeline? Explain the steps to setting one up
A DevOps Pipeline is a set of automated processes and tools designed to facilitate CI/CD. The goal is to automate the steps involved in building, testing and deploying software to increase efficiency, reduce errors, and accelerate the release cycle.
1. Define pipeline requirements, tests
2. Set up Version Control/branching strategy
3. Use a tool to set up CI, testing, analysis
4. Ensure good code coverage
5. Stage for deployment, get approval
6. Deploy to production
7. Monitor/feedback
8. Repeat

### What is a Jenkinsfile?
A jenkinsfiler consists of agents, stages, and steps.
An agent informs Jenkins where and how to execute the pipeline.
Stages are a sequence of one or more individual custom stage directives.
Steps are the specific actions taken by a Jenkins Pipeline

### What is a Jenkins Job? How is it different that a Jenkins Pipeline?
A Jenkins Job is a basic unit of work in Jenkins. It can be a specific task or set of tasks to be executed. While a jenkins pipeline is an approach to defining and automating complex workflows.

### How to set up a Jenkins CI/CD Pipeline?
Install and Setup Jenkins. Unlock/login Jenkins. Create a new Jenkins Pipeline. Define the jenkinsfile, and configure the script. Integrate with VCS via webhook.

### What is a “build”? What is the end result of a build? What is the build tool you’ve used for Java projects?
A build refers to the building of an application via source code. The end result of a build is a build artifact, which is a packaged version of the software that is ready for distribution or deployment. A build tool I've used for java projects is apache maven to create jar files.

### How can you check what caused a build to fail?
Some ways include build logs, test results, and pipeline stages.

### What is SonarQube / SonarCloud? Explain some of the features of it
SonarQube/SonarCloud are code quality analysis tools which increase the readbility, security, and maintainability of code. On the fly detection, smart education error.