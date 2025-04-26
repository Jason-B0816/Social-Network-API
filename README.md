# Social-Network-API

## Description

This is a **Social Network API** that allows users to create accounts, share thoughts, add reactions to thoughts, and manage friends.  
It is built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**.  
The project uses **Insomnia** to demonstrate full CRUD functionality across users, thoughts, reactions, and friendships.

---
## 🧭 Table of Contents

- [Technologies](#-technologies)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Routes](#-api-routes)
- [Demo](#-demo)
- [License](#-license)
- [Contact](#-contact)

---
## 🖥️ Technologies
* Node.js

* Express.js

* MongoDB

* Mongoose

* Insomnia for API testing
---

## 🛠️ Installation

```bash
git clone https://github.com/Jason-B0816/Social-Network-API
cd social-network-api
npm install
npm start
(Make sure MongoDB is running locally, or update your connection string)
```
---
## 📋 Usage
* You can test all routes using Insomnia or Postman.
The server will run on http://localhost:3001.

* Example endpoints:

* GET /api/users

* POST /api/users

* PUT /api/users/:id

* DELETE /api/users/:id

* POST /api/users/:userId/friends/:friendId

* POST /api/thoughts

* POST /api/thoughts/:thoughtId/reactions

### 🔥 API Routes

***Method--Endpoint--Description***
* GET	/api/users	Get all users

* GET	/api/users/:userId	Get a single user

* POST	/api/users	Create a new user

* PUT	/api/users/:userId	Update a user

* DELETE	/api/users/:userId	Delete a user

* POST	/api/users/:userId/friends/:friendId	Add a friend

* DELETE	/api/users/:userId/friends/:friendId	Remove a friend

* GET	/api/thoughts	Get all thoughts

* POST	/api/thoughts	Create a new thought

* POST	/api/thoughts/:thoughtId/reactions	Add a reaction

* DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Remove a reaction
---
## 🎥 Demo

- ### **Screenshot:**  
  ![Social Network API Screenshot](src/public/Screenshot%20Social%20Network%20API.png)

### **Demonstration Video:** 

* Watch the Video
https://app.screencastify.com/v3/watch/tpdmLMDqL1ZGbmDsVcps

### **GitHub Repository:**

* View on GitHub: https://github.com/Jason-B0816/Social-Network-API

## 📜 License
This project is licensed under the Apache License.

## 📬 Contact
* Github Username: https://github.com/Jason-B0816
* Email: jbrooks200800@gmail.com


