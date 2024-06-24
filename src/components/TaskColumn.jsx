import React from "react";
import "./TaskColumn.css";
import "./TaskForm";
import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>

      {tasks.length > 0
        ? tasks.map(
            (task, index) =>
              task.status === status && (
                <TaskCard
                  key={index}
                  title={task.task}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  index={index}
                />
              )
          )
        : null}
    </section>
  );
}
