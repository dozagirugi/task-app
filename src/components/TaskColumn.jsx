import React from "react";
import "./TaskColumn.css";
import "./TaskForm";
import TaskCard from "./TaskCard";

export default function TaskColumn({ title, icon }) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>

      <TaskCard />
    </section>
  );
}
