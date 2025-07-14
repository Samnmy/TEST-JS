
# 🎉 EventManager SPA – Smart Event Management

Welcome to **EventManager SPA**, a dynamic and modern web application for **event management**! This project was developed as part of the **Module 3 Performance Test (JavaScript)** with the goal of allowing both organizers and visitors to efficiently manage events through a smooth and interactive interface.

---

## 🧑‍💻 Developer Information

- **Name:** [Your Name Here]
- **Clan:** [Clan Name]
- **Email:** [youremail@domain.com]
- **ID Number:** [ID #######]

---

## 🗂️ Project Description

This **Single Page Application (SPA)** was built using modern technologies such as **JavaScript**, **HTML5**, **CSS**, and **json-server**. It's designed to deliver a seamless experience for both administrators (event CRUD operations) and visitors (event browsing and registration), including user authentication and protected routes.

---

## 🚀 Key Features

### 🔐 Authentication & Session
- User registration with two roles: **Administrator** and **Visitor**.
- Secure login system.
- Route protection implemented in **Router.js**.
- **Session persistence** using `LocalStorage`, even after page reloads.

### 📦 Simulated Database
- Full **CRUD operations** using `json-server`.
- Effective synchronization between frontend and simulated backend.

### 🖥️ User Interface
- Fully **responsive SPA**.
- Intuitive forms for authentication and event management.
- Smooth navigation across protected and public views.

---

## 🛣️ Route Structure

| View                      | Path                          | Required Role      |
|---------------------------|-------------------------------|--------------------|
| Dashboard (Home)          | `/dashboard`                  | Authenticated      |
| Create Event              | `/dashboard/events/create`    | Administrator      |
| Edit Event                | `/dashboard/events/edit/:id`  | Administrator      |
| Login                     | `/login`                      | Public             |
| Register                  | `/register`                   | Public             |
| Not Found Page            | `/not-found`                  | Auto Redirect      |

---

## 👥 User Types

### 🛠️ Administrator
- Full CRUD capabilities on events.
- Default admin user created in `db.json`.

### 👤 Visitor
- Browse and register for available events.
- Registration allowed only if capacity is not exceeded.

---

## ✅ Acceptance Criteria

- 🟢 Protected authentication and redirection.
- 🟢 Functional CRUD synchronized with json-server.
- 🟢 Session persistence using `LocalStorage`.
- 🟢 Smooth navigation with defined routes.
- 🟢 Clean, organized, and documented code.
- 🟢 Descriptive commits by feature.

---

## 🧪 Testing & Delivery

### 🧾 Deliverables:
- ✅ Public GitHub repository.
- ✅ Complete `README.md` file.
- ✅ `db.json` configured with users and events.
- ✅ Postman collection for testing (CRUD and authentication).

---

## 🛠️ Installation & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/username/eventmanager-spa.git
cd eventmanager-spa
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start json-server
```bash
npx json-server --watch db.json --port 3000
```

### 4. Run the Application
Open the `index.html` file in your browser (or use a local server if you're using ES6 modules).

---

## 📁 Suggested Folder Structure

```
📦 src/
 ┣ 📂 auth/
 ┣ 📂 components/
 ┣ 📂 views/
 ┣ 📂 services/
 ┗ 📜 router.js
📜 db.json
📜 index.html
📜 main.js
📜 README.md
```

---

## 🌐 Resources

- [JavaScript Documentation - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Figma UI - Guide Design](https://www.figma.com/design/abSNj8rp58DsQP805w83Zs/Crud-Operations--Community---Copy---Copy-?node-id=0-1&p=f)

---

## 🎯 Final Considerations

> ⚠️ **Focus on logic before visual design**. Ensure that all functional requirements are met and that your code is clean and modular.

---

Thank you for checking out this project! 🚀
