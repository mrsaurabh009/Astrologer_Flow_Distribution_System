# 🔮 Astrologer Flow Distribution System

A scalable, secure, and intelligent backend system built using **Node.js**, **Express**, and **MongoDB** to manage astrologer assignments in a fair and optimized way. This system ensures balanced flow distribution of user connections across 500+ astrologers while offering a boost mechanism for top performers.

# API Documentation
[Click Here](https://documenter.getpostman.com/view/44352317/2sB2ixjDtT)

---

## 📌 Table of Contents

- [Overview]
- [Tech Stack]
- [Features]
- [Flow Distribution Algorithm]
- [API Endpoints]
- [Database Models]
- [Validation & Security]
- [Testing]
- [Deployment]
- [How to Run Locally]


---

## 🧠 Overview

This system connects thousands of users per day with astrologers based on availability, specialization, and weighted priority. Designed to simulate real-time user-to-astrologer allocation under scalable load conditions (2000–3000 users/day).

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Testing**: Jest, Supertest
- **Validation**: express-validator
- **Documentation**: Postman, Markdown
- **Deployment**: Render, MongoDB Atlas

---

## ✨ Features

- 🧮 Fair and optimized astrologer distribution
- 🔝 Priority flow for top astrologers
- 📈 Scalable for thousands of users per day
- 📬 RESTful APIs
- 🧪 Unit tested with real and mock scenarios
- 🔐 Input validation & error handling

---

## 🔁 Flow Distribution Algorithm

- Retrieves all active astrologers
- Filters by specialization if applicable
- Applies weighted random selection for top astrologers
- Sorts by `assignedCount` or `lastAssigned`
- Assigns user and updates astrologer data
- Built to scale with queueing/future AI enhancement support

---

## 📮 API Endpoints

### 🔹 Astrologers
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/astrologers/list` | List all astrologers |
| POST   | `/api/astrologers/add`  | Add new astrologer |
| PATCH  | `/api/astrologers/:id/toggle-top` | Toggle top astrologer |
| DELETE | `/api/astrologers/:id`  | Delete astrologer |

### 🔹 Distribution
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/distribute` | Distribute users to astrologers |

### 🔹 Assign
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/assign` | Assign user to best-match astrologer |

---

## 🧾 Database Models

### Astrologer
```js
{
  name: String,
  email: String,
  phone: String,
  experience: String,
  specialization: String,
  isTopAstrologer: Boolean,
  assignedCount: Number,
  lastAssigned: Date
}
```
---
# How to Run Locally
```
git clone https://github.com/your-username/astrologer-flow-system.git
cd astrologer-flow-system
npm install

# Create .env file with the following:
MONGO_URI=<Your MongoDB Atlas URI>
PORT=5000

npm start
```
📜 License
This project is for academic/educational purposes. All rights reserved.

Developed By
Saurabh Kumar – Backend Developer
