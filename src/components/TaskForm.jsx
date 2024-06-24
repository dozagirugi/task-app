import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

export default function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="REACT" />
          </div>

          <div>
            <select className="task_status">
              <option value="todo">할일</option>
              <option value="todo">진행중</option>
              <option value="todo">완료</option>
            </select>

            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
