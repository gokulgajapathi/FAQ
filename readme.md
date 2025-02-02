# BharatFD Hiring Challenge

Welcome to the **BharatFD Hiring Challenge** repository! This project showcases backend development skills through the creation of a **multilingual FAQ management system**.

---

## 🚀 Technology Stack

### Backend Technologies:
- **Node.js**: JavaScript runtime for building scalable applications.
- **Express.js**: Web framework for Node.js to build APIs.
- **MongoDB (with Mongoose)**: NoSQL database for storing FAQs.
- **Redis**: In-memory data structure store for caching.
- **Google Translate API**: For translating FAQs into multiple languages.

### Frontend Technologies:
- **React.js**: Library for building user interfaces.
- **Vite**: Build tool that enhances development experience.
- **Axios**: Promise-based HTTP client for making requests.
- **CKEditor**: Rich text editor for creating and editing FAQ answers.

### Caching:
- **Redis**: Utilized to cache responses and improve performance.

---

## ✨ Key Features

- **Multilingual Support**: Manage FAQs in various languages.
- **RESTful API**: CRUD operations for FAQs via a REST API.
- **Dynamic Language Selection**: Users can select their preferred language through query parameters.
- **Performance Optimization**: Caching implemented with Redis to enhance response times.
- **Rich Text Editing**: WYSIWYG editor for formatting FAQ answers.

---

## 📂 Project Structure

### Backend:
- `database/db.js`: Mongoose schema and model definitions for FAQs.
- `index.js`: Main entry point of the backend application.
- `routes/faq.js`: Express routes handling FAQ management.
- `middlewares/cacheMiddleware.js`: Middleware for caching API responses.
- `utils/redis.js`: Configuration and connection setup for Redis.
- `utils/sanitize.js`: Input sanitization utilities.
- `utils/utils.js`: Utility functions, including those for translation handling.
- `package.json`: Lists backend dependencies and scripts.

### Frontend:
- `index.html`: The main HTML file of the React application.
- `vite.config.js`: Configuration file for Vite setup.
- `src/main.jsx`: Entry point of the React application.
- `src/App.jsx`: Main application component managing routes and state.
- `src/components/`: Directory containing all React components used in the application.
- `package.json`: Lists frontend dependencies and scripts.

---

## 🛠️ Setting Up the Project

### Prerequisites
Ensure you have the following software installed:
- **Node.js**
- **MongoDB**
- **Redis**

### Backend Setup
1. Clone the repository:


   ```sh
   git clone https://github.com/your-repo/bharatfd-hiring-challenge.git
   cd bharatfd-hiring-challenge/backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file with the following content:

   ```env
   MONGO_URL=mongodb://localhost:27017/FAQS
   ```

4. Start the Redis server using Docker:

   ```sh
   docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
   ```

5. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```sh
   cd ../frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm run dev
   ```

---

## 📌 API Usage Examples

### Fetch FAQs

#### Request:

```sh
curl http://localhost:3000/api/faqs/get-faq
```

#### Response:

```json
[
  {
    "question": "What is BharatFD?",
    "answer": "BharatFD is a platform for FAQ management.",
    "language": "en"
  }
]
```

```sh
curl http://localhost:3000/api/faqs/get-faq?lang=hi
```

#### Response:

```json
[
  {
      "hi": {
        "question": "React क्या है?"
        "answer": "<p>React एक JavaScript लाइब्रेरी है जिसका <strong>उपयोग यूज़र इंटरफ़ेस</strong> (UI) बनाने के लिए किया जाता है। यह कम्पोनेंट्स आधारित है, जो UI के पुनः उपयोग करने योग्य हिस्से होते हैं, और इनका उपयोग बड़ी और जटिल<em><strong> एप्लिकेशन</strong></em> को आसानी से विकसित करने के लिए किया जाता है।</p>",
    }
  }
]
```

```sh
curl http://localhost:3000/api/faqs/get-faq?lang=bn
```

#### Response:

```json
[
  {
    "bn": {
        "question": "প্রতিক্রিয়া কি?"
        "answer": "<html><head></head><body><p>প্রতিক্রিয়া একটি জাভাস্ক্রিপ্ট লাইব্রেরি যার<strong>ব্যবহারকারী ইন্টারফেস ব্যবহার করুন</strong>(ইউআই) তৈরি করার জন্য করা হয়। এটি ভিত্তিক উপাদানগুলির উপর ভিত্তি করে, যা ইউআইয়ের পুনরায় ব্যবহারযোগ্য অংশ এবং তাদের ব্যবহার বড় এবং জটিল<em><strong>আবেদন</strong></em>সহজেই বিকাশের জন্য করা হয়।</p></body></html>",
    }
  }
]
```

### Add an FAQ

#### Request:

```sh
curl -X POST http://localhost:3000/api/faqs/add-faq \
    -H "Content-Type: application/json" \
    -d '{"question": "What is Node.js?", "answer": "Node.js is a JavaScript runtime."}'
```

```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime.",
  "language": "en"
}
```

#### Response:

```json
{
  "message": "FAQ added successfully",
  "data": {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime.",
    "language": "en"
  }
}
```

### Delete an FAQ

#### Request:

```sh
curl -X DELETE http://localhost:3000/api/faqs/delete-faq/{id}
```

#### Response:

```json
{
  "message": "FAQ deleted successfully"
}
```

---


## 🤝 Contribution Guidelines

1. **Fork the repository**.
2. **Create a new branch**:
   ```sh
   git checkout -b feature-branch
   ```
3. **Make your changes and commit them**:
   ```sh
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```sh
   git push origin feature-branch
   ```
5. **Open a pull request**.

---


## 🎉 Happy Coding! 🚀
