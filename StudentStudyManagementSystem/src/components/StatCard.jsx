import React from "react";

export default function StatCard({ icon, title, value, text }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p>{title}</p>
        <h3>{value}</h3>
        <small>{text}</small>
      </div>
    </div>
  );
}