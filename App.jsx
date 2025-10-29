import React from "react";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>RemitBee — User Directory</h1>
        <p className="subtitle">
          Fetches users from jsonplaceholder.typicode.com
        </p>
      </header>

      <main>
        <UserList />
      </main>

      <footer className="footer">
        <small>Built for Task 1 — Frontend Developer (React)</small>
      </footer>
    </div>
  );
}
