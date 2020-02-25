# To Do Task List Project
Project to incorperate our knowledge learned in DGM 4790 in regards to Node, Express, MongoDB, Mongoose, REST API's, and more. 

*Users will eventually be incorperated into the project, however for now it is just a simple list in which you add to or edit/delete from.*

## __RESTful CRUD Node Server for DGM 4790__
### __Assignment Requirements__
- [x] Mongoose as your data modeling tool
  - Mongoose was used throughout the project, especially on model schemas for future [users](https://github.com/rconatser/to-do-list-ria-2/blob/master/models/user.js), and [task](https://github.com/rconatser/to-do-list-ria-2/blob/master/models/task.js) entry requirements.
- [x] Cloud-based MongoDB as your data store
  - When utilizing Heroku, you have to whitelist all IPs to be able to properly deploy and have access to the mongoDB atlas server. You can see the connection being made towards the bottom of the [index.js](https://github.com/rconatser/to-do-list-ria-2/blob/master/index.js) file.
- [x] At least 3 endpoints to GET data from your server
  - I will eventually have 4 endpoints, though for this project there are 3. You can find 3 GET endpoints to look at task data differently in the [routes/task.js](https://github.com/rconatser/to-do-list-ria-2/blob/master/routes/task.js) file. There is 1 GET endpoint, not currently set up properly, in the [routes/user.js](https://github.com/rconatser/to-do-list-ria-2/blob/master/routes/user.js) file.
- [x] At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
  - There is 1 endpoint allowing the user to update a task within the [controllers/task.js](https://github.com/rconatser/to-do-list-ria-2/blob/master/controllers/task.js) file. *All fields must be filled out in order to change data without error*.
- [x] At least 1 endpoint allowing user to create an item via POST
  - You can find 1 endpoint creating tasks within the [controllers/task.js](https://github.com/rconatser/to-do-list-ria-2/blob/master/controllers/task.js) file.
- [x] At least 1 endpoint allowing user to delete an item via DELETE
  - There is 1 endpoint within the [controllers/task.js](https://github.com/rconatser/to-do-list-ria-2/blob/master/controllers/task.js) file allowing users to delete task entries by ID. *Do so at your own risk, of course*.
- [x] Datastore will contain at least 25 items
- [x] App will be deployed to production using some service like Heroku, Digital Ocean, etc.
- [x] All source code will be properly uploaded to GitHub
  - Though you're already here, you can locate all source code via the [GitHub Repo](https://github.com/rconatser/to-do-list-ria-2)
- [x] ReadMe file will accurately describe the server install process (if any) and how to use the APIs
  - This ReadMe file contains all information the user would need to know to simulate all HTTP requests. It can be found on the [GitHub Repo Main Page](https://github.com/rconatser/to-do-list-ria-2) or [directly](https://github.com/rconatser/to-do-list-ria-2/blob/master/README.md) within the GitHub's files.

---
## Quick Overview of all End Points
### __/tasks__
- Shows all tasks created 
### __/bytag?tags=*[tag name]*__  
- Shows all tasks that contain a single tag name 
### __/create__
- Creates a task  
### __/due__ 
- Shows all tasks sorted by Due Date (Ascending)
- Shows task due next first
### __/delete/*[id of task]*__
- Deletes task by designated ID
### __/update/*[id of task]*__
- Updates task by designated ID, *must fill out all fields in Postman to successfully update. Though, Content/Tags are technically not required.*
---
## Breakdown of End Points by HTTP Request
### __GET__
- /tasks
- /due
- /bytag?tags=```[tag name]```

### __POST__
- /create

### __PUT__
- /update/```[task id]```

### __DELETE__
- /delete/```[task id]```

---
## Using this API on your Local Computer
If you choose to clone the repo and view it on your local machine, you will need to do the following:
1. Clone the repo and run ```npm install express body-parser mongoose --save``` within VS Code or your terminal within the designated directory. This will install dependencies and ensure your machine is utilizing all necessary npm packages.
2. In order to utilize ```npm start``` booting up the server with Nodemon, you need to install that dependency as well by typing ```npm nodemon --save-dev```
3. Once these packages completely install and you notice a ```node_modules``` folder created, type ```npm start``` to run the server with Nodemon, updating with any changes automatically, in VS Code or your terminal.