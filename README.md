# 📿 Azkar App

A modern web application for displaying daily Islamic Azkar in a clean, organized, and user-friendly interface. Built with **React + Vite**, featuring category-based navigation, dynamic routing, and SCSS styling.

---

## 🌟 Features

* 📂 Browse Azkar by categories
* 🔢 Interactive Azkar counter (decreases on click)
* 🔀 Dynamic routing using React Router
* 🎨 Modern UI styled with SCSS
* 🌐 Responsive design
* 🕌 Arabic-friendly layout and typography
* 🔗 About page with GitHub & LinkedIn links

---

## 🛠️ Tech Stack

* React
* Vite
* React Router DOM
* SCSS
* React Icons
* JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── AzkarCard.jsx
│   └── Loading.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Azkar.jsx
│   └── About.jsx
│
├── hooks/
│   └── useAzkar.js
│
├── styles/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── main.scss
│
├── public/
│   └── api.json
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started (Web Version)

1️⃣ Clone the repository

```bash
git clone https://github.com/ahmedsamir45/azkar.git
cd azkar
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Run the development server

```bash
npm run dev
```

The app will run at: [http://localhost:5173](http://localhost:5173)

4️⃣ Build for production

```bash
npm run build
```

---

## 📱 APK Version (Android)

You can download the Android APK here:
[Download Azkar APK](https://drive.google.com/file/d/1bEqqO0bZZNfZ4b-Oske4xOKIjSBkccsy/view?usp=drive_link)

---

## ⚡ Building APK with Capacitor

Azkar App can be converted into a mobile app using **[Capacitor](https://capacitorjs.com/)**. Capacitor allows you to run your web app on Android and iOS.

### 1️⃣ Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

### 2️⃣ Add Android platform

```bash
npx cap add android
```

### 3️⃣ Build the web app

```bash
npm run build
```

### 4️⃣ Copy web assets to Android project

```bash
npx cap copy
```

### 5️⃣ Open Android project in Android Studio

```bash
npx cap open android
```

From Android Studio, you can build the APK or run it on an emulator/device.

### 6️⃣ Updating after changes

After making changes in your React project:

```bash
npm run build
npx cap copy
npx cap sync
```
