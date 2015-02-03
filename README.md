# Music-Player
Music player built with web languages using angular.
# Project Plan
#### Version
1.0.0
#### 1. Problem Statement
- We are planning to build an online audio distribution platform that enables its user to access and create their favourite music collection remotely.
- It will provide a same user experience in different working environment and operating system. 
- Software clients in different operating system will use the same lower level restful APIs. So they can access their favourite music collection on the go. The multimedia database created or remote server will be categorized on the basis of various genres.

#### 2. Project Objectives
- Our project will give user the access to the collection uploaded by the admin.
User will be able to create their own playlist.
User will get RSS feed on latest updates.

> [Poorva Arora] : Handling client side activities and optimized working of the software client on different platform.

> [Sahil Narula] :  Working on backend scripts, multimedia database and restful APIs.

#### 3. Feasibility Study
- The software client will target every possible platform including linux, unix system and web operating system.
- Timeline: The project has already been started. The frontend of the project will be completed within few weeks and following weeks will be devoted to backend.
- We could have started the project on PHP but to make it dynamically stable and to provide some real time triggers, we will be using sockets along with single threaded evented io using node js.

#### 4. Process Model
- We have found that Incremental Model is the appropriate model for your project.
- Incremental method is used when all requirements are clear in process iteration but customer wants something immediately to use. 
In our project designing will be done for whole system all together but development is done in increments and integrated with existing system.

#### 5. Deliverables
- The software doesn’t have any hardware dependency so it provides convenient user experience.

#### 6. Tech Stack
- We are currently using the MEAN stack. MEAN stack includes [Mongodb], [Express], [Angularjs], [Nodejs].
- If required, clustering of the remote multimedia database will be handled by [hadoop].
- Restful web services are developed using Loopback or sails.

### Installation

```sh
$ git clone git@github.com:poorva16/Music-Player.git
$ cd Music-Player
```

You need node and mongo installed globally:

To install node dependencies
```sh
$ npm install
```
You need bower for client side dependencies
```sh
$ npm install -g bower
```
To install bower dependencies
```sh
$ bower install
```

### Todo's

 - Restful Api's
 - Multimedia Database
 - Client Side Music player functionality
 - Web to Software porting

**Hell Yeah!**

[Nodejs]:http://nodejs.org
[Angularjs]:http://angularjs.org
[Mongodb]:http://www.mongodb.org/
[hadoop]:http://hadoop.apache.org/
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[express]:http://expressjs.com
[Poorva Arora]:http://github.com/poorva16
[Sahil Narula]:http://github.com/sahanarula
