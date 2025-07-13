# 🔐 ArchLock – Secure Document Sharing System

ArchLock is a privacy-first document sharing platform built to prevent unauthorized distribution using cutting-edge AI and real-time monitoring. Designed for engineers, architects, and organizations who share confidential files like house maps and blueprints.

---

## 🚀 Features

- 📄 Upload and securely share files via unique access links
- ⏳ Link expiration control (e.g., auto-expire after 1 hour)
- 🧠 Real-time **webcam-based device detection** using TensorFlow.js
- 📸 Detection of phones, cameras, or suspicious activity
- 🔔 Instant **email alerts** to the document owner upon detection
- 🧑‍💻 Admin dashboard for viewing security alerts and logs
- 📱 Fully responsive – Works beautifully on all screen sizes

---

## 🛠️ Tech Stack

| Tech            | Usage                            |
|----------------|----------------------------------|
| **Next.js 14** | Frontend + Backend (App Router)  |
| **Tailwind CSS** | Modern UI styling             |
| **Clerk Auth** | Authentication (Owner Login)     |
| **Prisma**     | ORM with PostgreSQL              |
| **Cloudinary** | File uploads & storage           |
| **Nodemailer** | Sending secure email alerts      |
| **TensorFlow.js** | AI-powered real-time detection |

---

## 🔒 Security Workflow

1. User uploads a sensitive file (e.g., house map)
2. A secure access link is generated and emailed to the client
3. If a device (like a phone) is detected via webcam:
   - Visual/audio alert is triggered
   - A detection log is saved
   - Email alert is sent to the file owner

---

## 📷 AI Detection Snapshot

> Uses COCO-SSD  model via TensorFlow.js for on-device detection  
> ✅ Privacy-respecting: No webcam data is sent to server  
> ✅ Customizable to detect specific objects (phones, tablets, etc.)

---



