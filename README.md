# ArchLock 🔒🏗️

**ArchLock** is a secure file-sharing platform built for architects and engineers. It enables professionals to upload building layouts and share them with clients using time-bound links. The system uses real-time webcam detection to identify and prevent unauthorized screen captures using external devices like mobile phones — ensuring complete privacy and confidentiality.

## 🚀 Features

- 🏗️ **Engineer Dashboard**: Upload and manage house map files (PDF/images).
- ⏰ **Time-Limited Links**: Share files via secure links that automatically expire.
- 📷 **Webcam Surveillance**: Uses your webcam to detect unauthorized photo attempts.
- 🚫 **Auto-Expire on Violation**: If a mobile phone is detected during view, access is instantly revoked.
- 🔒 **Auth System**: Secure login and protected access using Clerk/Auth.js.
- 🧊 **Watermark & Anti-Screenshot**: Adds dynamic watermarks and disables right-click/download.

## 🛠️ Tech Stack

| Layer         | Tech Used                      |
|---------------|-------------------------------|
| Frontend      | Next.js 14, Tailwind CSS       |
| Auth          | Clerk / NextAuth.js            |
| Backend       | Go / Node.js                   |
| AI Detection  | TensorFlow.js (YOLO model)     |
| Storage       | AWS S3 / Cloudinary            |
| Database      | PostgreSQL / MongoDB           |
| Real-time     | WebSockets (Socket.io)         |

## 📌 Use Case

An engineer uploads a confidential blueprint and shares a temporary link with a client. If the client tries to take a photo using a mobile device, the system detects it via webcam and instantly disables access, protecting the file from leaks.

---

## 📦 Future Plans

- Engineer profile page with analytics
- Client access logs
- Mobile version with front camera detection
- PDF viewer with annotation & blur options

---

## 🛠️ Local Setup

_Coming soon once core features are implemented._

---

## 📄 License

MIT License © 2025

---

