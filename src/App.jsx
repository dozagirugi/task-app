import "./App.css";
import TaskColumn from "./components/TaskColumn.jsx";
import TaskForm from "./components/TaskForm.jsx";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

export default function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="할 일" icon={todoIcon} />
        <TaskColumn title="진행 중" icon={doingIcon} />
        <TaskColumn title="완료" icon={doneIcon} />
      </main>
    </div>
  );
}
