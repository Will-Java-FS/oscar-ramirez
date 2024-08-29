# Jenkins | CI/CD
## Continuous Integration
Continuous Integration is a software development process where a code is continuously tested after a commit to ensure there are no bugs
- With CI, bugs can be idenfied early and fixed before pushing changes to production
- New code is integrated into one executable form, a **build**
- If the build is green, the executable artifact can be deployed
- If not, the bug needs to be fixed, and the new build is tested again

#### Benefits
- Reduced development cucle - since every commit is getting built and tested, it allows releasing new features to the user faster and with fewer errors
- Shorter time to integrate code - before the use of Jenkins CO, integration of code was done manually. Potentially took a long time. Integrating code after every commit ensures that at least the functionality is not broken after a commit.
- Faster feedback to developer teams - WHenever a test breaks during a commit, developers get feedback and hence improve the code there and then. Instead of debugging several commits after the fact.
- Automated workflow - teams do not have to worry about running a manuyal test for each commit. THe Jenkins CI pipeline checks the latest code and builds the code along with the tests. If green, can deploy.

Jenkins pipeline can be created in two ways - Declarative Pipelines and Jenkins Job Builder
- Jenkins CI helps in test automation, provides faster feedback, reduces the development cycle, and helps in the continuous integration of code

## Continuous Deployment
Continuous deployment (CD, or CDE) is a strategy or methodology for software releases where any code update or change made through the rigorous automated test process is deployed directly into the live production environment, where it will be visible to customers.

<b>Benefits of Continuous Deployment</b> - The most important feature of continuous deployment is that it enables developer teams to get their new releases into the production environment asap

<b>Enable a more rapid feedback loop with customers</b> - More frequent updates to your application mean a shorter feedback loop with the customer

<b>Reducing manual processes with automation</b> - CD is defined by its use of automation in the application deployment process. Utilizing automation as much of the process as possible.

## Jenkins Overview
Jenkins is an open-source continuous integration/continuous delivery and deployment (CI/CD) automation software DevOps tool written in the Java programming language. It is used to implement CI/CD workflows, called pipelines.

Pipelines automate testing and reporting on isolated changes in a larger code base in real time and facilitate the integration of disparate branches of the code into the main branch

#### How Jenkins works
Jenkins run as a server on a variety of platforms including Windows, macOS, Unix variants and especially, Linux.
- Requires a Java 8 VM and above, can be run on the Oracle JRE or OpenJDK
- Can be run as a Java servlet within a Jetty application server, or on application servers usch as Apache Tomcat
- More recently Jenkins has been adatped to run in a Docker container

#### Advantages of Using Jenkins
- Free to use Jenkins is fully open-source and free to use
- Rich Plugin Ecosystem
- Easy Integration 

## Continuous Delivery
Continuous delivery is a specific software development practice that's often applied in connection with DevOps.

#### Differences Between Continuous Integration, Delivery and Deployment
In CI, every code commit is built and tested, but, is not in a condition to be released. The build app is not automatically deployed on the test servers to validate it using different types of blackbox testing like User Acceptance Testing

In Continuous Delivery, the applicaiton is continuously deployed on the test servers for UAT. The application is ready to be released to production anytime. So, CI is necessary for CDelivery

Continuous Deployment is the next step past continuous delivery, where you are not just creating a deployable package, but you are deploying it in an automated fashion

## Jenkins Job Project
**Build Jobs** are the basic currency of a Continuous Integration server.
- A build job is a way of compiling, testing, packaging, deploying with your project
- Build jobs are a way to customize the way you want to automate compilation, testing, packaging, and deploying your application

#### Steps to setup build jobs
1. Go to the Jenkins dashboard and Click on New Item
2. In the next screen, enter the item name
3. Specify the details of the job
4. Specify the location of files which need to be built
5. Go to the build section, and click on add built step -> execute windows batch command
6. In the command window, enter the following commands and then click on the save button
7. Once saved, you can click on the build now option to see if you have successfully defined the job
8. Once the build is scheduled, it will run. 
9. Once complete, the build status will show if it was successfully executed

## Sonarcloud and Sonlarlint
SonarLint is free, open source, and available in the Visual Studio Gallery (supports C# and VB.NET) which will help fix code quality issues before they even exist
- Can be used as a plugin for Visual Studio support 2015/2017
- Instant View SonarLint provides instant feedback on IDEs
  - shows already existing issues in the code and enables developers to differentiate what issues they introduced
- On the fly Detection
  - Issues appear as you code. Prodices the facility to identify problems as you write code
- Smart Education Error
  - Descriptions come with issue detection
  - provides rich documnetation
  - gives code example, and how to resolve example issue
- Push notifications
  - tracks quality gate status (failed, passed, warning)
- Connected Mode
  - User can connect to a SonarQube server and bind VS solution to a SonarQube project
  - Automatically updates the rulesets of the solution and attaches the solution to the required Roslyn analyzers

SonarCloud is acloud-based code analysis service designed to detect code quality issues in 25 different programming languages, continuously ensuring the maintainability, reliability and security of your code
- State of the art static code analysis to find problems, and potential problems
- Supports over 20 languages including Java, JavaScript, TypeScript, Python, C#, and C/C++
- Purposely conservative to minimize false positives
- Issue groups:
  - Code smells - characteristics of code that don't prevent proper functioning, but indicate deeper problems that affect maintainability
  - Bugs - errors in the code that can prevent theprogram from operating as intended
  - Vulnerabilities - problems in the code that could be exploited by a bad actor to compromise the security of the application
- Security Hotspots - areas of the code that may cause security issues and therefore need to be reviewed
  - By separating security hotspots from issues, SonarCloud is able to accurately detect issues while providing devs with useful warnings under th eless stringent criteria of the hotspot