# Experiment 4: Implement State Management in SPA (TechKart)

## Overview

This project is a Single Page Application (SPA) developed for the **Full Stack-II** lab (Experiment 4). It demonstrates robust state management patterns in React, distinguishing between **Context API** for simple global state and **Redux Toolkit** for complex data flows.

The application is a functional E-commerce store ("TechKart") featuring a product catalog, shopping cart, user authentication simulation, and theme customization.

## Features

### 1. Context API Implementation (Theme & Auth)

*Used for lightweight, global application state.*

* **Dynamic Theming:** Global Dark/Light mode toggle that persists across the application.
* **User Authentication:** A mock Login/Logout system accessible in the **Profile** section.
* **State Persistence:** User session and theme preferences are managed via Context providers.

### 2. Redux Toolkit Implementation (Shopping Cart)

*Used for complex state logic and asynchronous data handling.*

* **Async Data Fetching:** Loads product inventory using `createAsyncThunk` with simulated network delay.
* **Smart Cart Management:**
* Add items to the cart.
* **Dynamic Counters:** "Add" buttons transform into `[-] 1 [+]` counters for direct quantity control.
* Real-time cart badge updates in the navbar.


* **Advanced Filtering:**
* Real-time **Search** bar.
* **Category Filtering** (Audio, Laptops, Gaming, etc.).


* **Order Summary:** Automatic calculation of Subtotal, Tax (10%), and Grand Total.
* **Toast Notifications:** Pop-up alerts when actions are performed (e.g., "Added to cart").

## Tech Stack

* **Frontend Framework:** [React]() + [Vite]()
* **State Management:**
* **Redux Toolkit** (Store, Slices, AsyncThunks)
* **React Context API** (`createContext`, `useContext`)


* **Routing:** [React Router DOM]() (v6)
* **Icons:** [Lucide React]()
* **Styling:** CSS Variables (for Theming) & Flexbox/Grid layouts

## Installation & Setup

1. **Clone or Download the repository**:
```bash
git clone <your-repo-url>
cd experiment-4

```


2. **Install Dependencies**:
```bash
npm install

```


3. **Run the Development Server**:
```bash
npm run dev

```


4. **View the Application**:
Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```text
src/
├── components/
│   ├── Cart.jsx         # Cart summary & checkout view
│   ├── Home.jsx         # Landing page with banner & features
│   ├── Navbar.jsx       # Navigation bar with Cart Badge & Theme Toggle
│   ├── Profile.jsx      # User Dashboard (Demonstrates Context API)
│   └── Shop.jsx         # Main Product Store (Demonstrates Redux Toolkit)
├── context/
│   └── ThemeContext.jsx # Provider for Light/Dark mode & User Auth
├── store/
│   ├── cartSlice.js     # Redux logic (Reducers, Actions, Thunks)
│   └── store.js         # Central Redux Store configuration
├── App.jsx              # Main application component & Routing
└── main.jsx             # Entry point

```

## Student Details

**Name:** Parth
**UID:** 23BAI70459
**Course:** Full Stack-II
**Experiment:** 4 (Implement State Management in SPA)
