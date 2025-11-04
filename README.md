# 🧾 Lost and Found Web Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** web app that helps users report and recover lost items within a campus or community.  
It features secure authentication, image uploads, and a simple, intuitive interface for posting and finding items.

---

## 🚀 Tech Stack

**Frontend:** React.js, Axios, React Router, TailwindCSS  
**Backend:** Node.js, Express.js, MongoDB, JWT 
**Database:** MongoDB Atlas  
**Email Service:** Nodemailer (for password reset)  
**Hosting:**  
- Frontend → [Vercel](https://vercel.com)  
- Backend → [Render](https://render.com)  

---

## 📁 Folder Structure

lost-and-found/
│
├── backend/
│ ├── server.js
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ ├── uploads/
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ ├── .env
│ └── package.json
│
├── .gitignore
└── README.md

----------------------------

## ⚙️ Backend Setup (Node + Express)

### 1. Navigate to the backend
```bash
cd backend
2. Install dependencies
bash
Copy code
npm install
3. Create a .env file in /backend
ini
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAIL_HOST=smtp.yourmailhost.com
MAIL_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
FRONTEND_URL=http://localhost:3000
4. Start the backend
bash
Copy code
npm run dev
Server runs on:
👉 http://localhost:5000

💻 Frontend Setup (React)
1. Navigate to frontend
bash
Copy code
cd frontend
2. Install dependencies
bash
Copy code
npm install
3. Create .env file in /frontend
ini
Copy code
REACT_APP_API_URL=http://localhost:5000
4. Start the frontend
bash
Copy code
npm start
App runs on:
👉 http://localhost:3000
----------------------------------
🧠 Key Features
✅ User Authentication (Signup / Login using JWT)
✅ Password Reset via Email (Nodemailer)
✅ Upload and Manage Lost/Found Items
✅ Filter and Search by Category or Location
✅ Secure API Routes with JWT Middleware
✅ Admin/Moderator Access (optional)
✅ Fully Responsive Frontend

---------------------------------
🧪 API Endpoints (Backend)
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	User login
POST	/api/auth/forgot-password	Send reset link
POST	/api/items	Upload new lost/found item
GET	/api/items	Fetch all items
GET	/api/items/:id	Get item details
DELETE	/api/items/:id	Delete item

🧑‍💻 Author
Vikash C. Bhagat
B.Tech in Information Technology,
Shri Govindrao Wanjari College of Engineering and Technology, Nagpur.
MERN Stack Developer | JavaScript | Node.js | React.js

📧 vikashb4782@gmail.com
💼 https://www.linkedin.com/in/vikash-bhagat-657517252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

------------------------------------
📄 License
This project is open-source and available under the MIT License.






