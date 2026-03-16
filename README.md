Employee Management System

A full-stack **Employee Management System** built using **Spring Boot (Backend)** and **React (Frontend)**.
This application helps manage employee information such as adding, updating, viewing, and deleting employee records through a simple web interface.

---

## 🚀 Features

* Add new employees
* View employee list
* Update employee details
* Delete employees
* Department management
* Login authentication
* RESTful API backend
* Modern React user interface

## 🛠 Technologies Used

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven
* MySQL

### Frontend

* React
* Vite
* JavaScript
* CSS
* Axios

### Tools

* Spring Tool Suite / Eclipse
* Visual Studio Code
* Postman
* Git & GitHub

---

## 📁 Project Structure

```
Employee_Management_System
│
├── backend
│   ├── controller
│   ├── model
│   ├── repository
│   ├── service
│   └── resources
│
└── frontend
    ├── components
    ├── services
    └── assets
```

---

## ⚙️ How to Run the Project

### 1️⃣ Run Backend (Spring Boot)

1. Open the backend project in **Spring Tool Suite / Eclipse**
2. Configure database in `application.properties`

Example:

```
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

3. Run the Spring Boot application

```
BackendApplication.java
```

Backend runs at:

```
http://localhost:9191
```

---

### 2️⃣ Run Frontend (React)

Navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the application:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/employees      | Get all employees  |
| GET    | /api/employees/{id} | Get employee by ID |
| POST   | /api/employees      | Create employee    |
| PUT    | /api/employees/{id} | Update employee    |
| DELETE | /api/employees/{id} | Delete employee    |


## 👩‍💻 Author

**Meerajasmin Shaik**
Software Developer

GitHub:
https://github.com/MeerajasminTech
