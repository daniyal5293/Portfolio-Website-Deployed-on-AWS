
# Deploying a 3D Portfolio Application on AWS EC2

A comprehensive guide to deploying a high-performance **3D portfolio application** on an **Amazon EC2** instance.  
This documentation covers **local setup**, **cloud infrastructure provisioning**, and **remote server management**.

![AWS](https://img.shields.io/badge/AWS-EC2-orange)
![Ubuntu](https://img.shields.io/badge/Ubuntu-24.04-E95420)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)

---

## 🛠️ Phase 1: Local Development & Testing

Before moving to the cloud, ensure your project is configured correctly on your local machine.

### 1️⃣ Clone the Project
```bash
git clone https://github.com/<your-username>/Portfolio-Website-Deployed-on-AWS.git
cd Portfolio-Website-Deployed-on-AWS
````

---

### 2️⃣ Environment Variables

Create a `.env` file in the root directory and add your **EmailJS** credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 3️⃣ Install Dependencies & Start Dev Server

```bash
npm install
npm run dev
```

---

## ☁️ Phase 2: AWS Infrastructure Setup (2026 Edition)

### 🔐 IAM User Setup

1. Log in to the **AWS Management Console**
2. Create an **IAM User** with **Password Access**
3. Attach the **AdministratorAccess** policy

---

### 🖥️ Launching the EC2 Instance

| Setting       | Value                         |
| ------------- | ----------------------------- |
| OS Image      | Ubuntu Server 24.04 LTS       |
| Instance Type | t2.micro (Free Tier Eligible) |
| Key Pair      | Create & download `.pem` key  |

#### 🔓 Security Group – Inbound Rules

| Type       | Port | Protocol | Source    | Description     |
| ---------- | ---- | -------- | --------- | --------------- |
| SSH        | 22   | TCP      | My IP     | SSH Access      |
| Custom TCP | 5173 | TCP      | 0.0.0.0/0 | Vite Dev Server |
| HTTP       | 80   | TCP      | 0.0.0.0/0 | Web Traffic     |

---

## ⚡ Phase 3: Remote Server Configuration

### 1️⃣ Connect to EC2

```bash
ssh -i "your-key.pem" ubuntu@<YOUR_EC2_PUBLIC_IP>
```

---

### 2️⃣ Update System & Install Tools

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install git nodejs npm -y
```

---

### 3️⃣ Transfer Assets (Optional)

```powershell
scp -i "your-key.pem" "C:\path\to\logo.png" ubuntu@<YOUR_EC2_PUBLIC_IP>:/home/ubuntu/
```

---

## 🌐 Phase 4: Final Deployment

### ⚠️ Troubleshooting

**ENOENT Error**

```bash
cd Portfolio-Website-Deployed-on-AWS
```

**Port Issue**

* Ensure port **5173** is allowed in the Security Group

---

### 🚀 Run Application Publicly

```bash
npm run dev -- --host
```

---

### 🔗 Live URL

```
http://<YOUR_EC2_PUBLIC_IP>:5173
```

---

## 👨‍💻 Author

**Daniyal**
GitHub: https://github.com/daniyal5293
LinkedIn: www.linkedin.com/in/daniyal-khan-706b542b7

