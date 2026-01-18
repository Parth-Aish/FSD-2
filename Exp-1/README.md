# FSD-2 (Full Stack Development - II)

This repository serves as a centralized lab record for the Full Stack Development - II course. Each directory corresponds to a specific experiment or project milestone.

---

## 🚀 Experiment 1: Simple Counter SPA

### 📝 Aim
To create a basic Single Page Application (SPA) using React that dynamically updates the UI without page reloads.

### 🛠️ Tech Stack
* **Framework:** React 19 (via Vite)
* **Language:** JavaScript
* **Styling:** CSS3 (Custom responsive card layout)
* **Environment:** Node.js

### 📖 Theory
A **Single Page Application (SPA)** provides a fluid user experience by loading a single HTML page and updating the content dynamically as the user interacts with the app. 

In this experiment, React manages the application's **State** using the `useState` hook. When the state (the counter value) changes, React's reconciliation process updates only the specific part of the real DOM that needs to change, preventing a full page refresh.

### ⚙️ Implementation Details
* **useState Hook:** Used to initialize and update the counter.
* **Event Handlers:** Functions linked to "Increment", "Decrement", and "Reset" buttons.
* **Conditional Styling:** A dedicated reset button with distinct visual feedback.
