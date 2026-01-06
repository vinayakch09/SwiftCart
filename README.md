# 🛒 SWIFTCART — React + Vite E-commerce (Frontend) + JSON backend (mock)

**SwiftCart** is an **advanced, fully responsive, and interactive e-commerce web application** built using **React + Vite**.
Designed with a **clean, modern, and intuitive UI**, SwiftCart delivers a realistic online shopping experience with features such as:

---

### ✅ **Core Features**

* **Dynamic product listing**
* **Product detail view pages**
* **Add-to-cart & update-cart functionality**
* **Delivery option selection**
* **Order placement & tracking flow**
* **Interactive state management**
* **High-performance rendering powered by Vite**
* **Mock backend (JSON Server) simulating real API behavior**

---

### 🎯 **About the Project**

This project emphasizes **real-world e-commerce workflows**, making it perfect for:

* Learning modern frontend development
* Showcasing your portfolio
* Extending into a more complete production-level system

Every screen, interaction, and UI component is crafted to feel like a **real online shopping platform**, ensuring both functionality and a smooth user experience.

---

### 👨‍💻 **Who Is This Project For?**

* **Students** building a polished, portfolio-ready full-stack project
* **Developers** learning React, REST APIs, and modern UI patterns
* **Anyone** who wants a clean foundation for a scalable e-commerce product

---

### 🚀 **Why SwiftCart Stands Out**

With a strong focus on:

* **Performance**
* **User experience**
* **Responsive design**
* **Clean and maintainable code structure**

SwiftCart is both **easy to understand** and **highly customizable**, making it an ideal starting point for real e-commerce development.

---

## 🔥 Quick summary

* **Frontend:** React + Vite (fast dev, HMR)
* **Backend (dev):** JSON files (`backend/*.json`) served via `json-server` (mock REST API)
* **Goal:** Local development, demo product browsing, add-to-cart flow, orders & delivery options via the mock API.

---

## 📁 Project structure (what you shared)

```
SWIFTCART/
├─ frontend/
│  ├─ public/
│  ├─ src/
│  ├─ index.html
│  ├─ package.json
│  └─ vite.config.js
└─ backend/
   ├─ products.json
   ├─ cart.json
   ├─ orders.json
   └─ deliveryOptions.json
```

---

## 🚀 Getting started (run locally)

Follow these steps to run frontend + mock backend locally.

### 1) Prerequisites

* Node.js (v16+) & npm
* Optional: `npx` (comes with npm) and `git`

### 2) Clone & install

```bash
# clone (if not already cloned)
git clone <your-repo-url>
cd SWIFTCART

# install frontend deps
cd frontend
npm install
```

### 3) Create a combined `db.json` for json-server

`json-server` expects one `db.json` file. If your backend folder contains multiple json files (as in this project), create `backend/db.json` by merging them. From the project root run:

```bash
# from project root (one-line Node script)
node -e "const fs=require('fs');const files=['products.json','cart.json','orders.json','deliveryOptions.json'];const out={};files.forEach(f=>out[f.replace('.json','')]=JSON.parse(fs.readFileSync('backend/'+f)));fs.writeFileSync('backend/db.json',JSON.stringify(out,null,2));console.log('backend/db.json created')"
```

> This will produce `backend/db.json` with top-level keys: `products`, `cart`, `orders`, `deliveryOptions`.

### 4) Start the mock backend (json-server)

From project root (or open a new terminal):

```bash
# install json-server if you don't have it globally
npm install -g json-server   # optional

# run json-server from project root
npx json-server --watch backend/db.json --port 5000
```

**Mock API base URL:** `http://localhost:5000`
Common endpoints:

* `GET /products` — list products
* `GET /products/:id` — single product
* `GET /cart` — retrieve cart resource
* `POST /orders` — create an order
* `GET /deliveryOptions` — delivery choices

(If you want different routes, you can create a `routes.json` for json-server.)

### 5) Run the frontend (Vite)

Open a new terminal, from `frontend`:

```bash
cd frontend
# If not installed already
npm install

# start dev server
npm run dev
```

Vite will print a local URL — usually `http://localhost:5173`. The frontend should call the mock API at `http://localhost:5173`.

---

## ⚙️ Environment configuration

Create a `.env` in `frontend/` with:

```
VITE_API_URL=http://localhost:5173
```

In code refer to `import.meta.env.VITE_API_URL`. (Vite prefixes env vars with `VITE_`.)

---

## 🧩 Running both servers together (optional)

You can run both with `concurrently` (or open two terminals).

```bash
# from project root
npm install -g concurrently   # optional
npx concurrently "npx json-server --watch backend/db.json --port 5000" "cd frontend && npm run dev"
```

---

## ✅ Available npm scripts (suggested / common)

Add these to `frontend/package.json` if not already present:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Build for production:

```bash
cd frontend
npm run build
# preview production build
npm run preview
```

---

## 📡 API examples (curl)

```bash
# list products
curl http://localhost:5000/products

# create an order
curl -X POST http://localhost:5000/orders -H "Content-Type: application/json" -d '{"user":"test","items":[{"productId":1,"qty":2}], "total":99.99}'
```

---

## 🎨 Features / UX (suggested & typical for this repo)

* Responsive product grid
* Product detail view with images, price, and description
* Add to cart / update cart quantity
* Checkout demo that POSTs to `/orders`
* Delivery options pulled from `/deliveryOptions`
* Client-side state (React context / localStorage) for cart

*(If anything above is not implemented yet, this README serves as a clear roadmap.)*

---

## 🧭 Notes on development & customization

* **Switching to a real backend:** Replace `VITE_API_URL` with the real API. Ensure CORS is allowed.
* **Persist cart server-side:** Adapt `cart` resource to be user-specific (requires auth or userId).
* **Authentication:** This mock backend has no auth — for production add OAuth/JWT.

---
