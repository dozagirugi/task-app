import "./App.css";
import TaskForm from "./components/TaskForm.jsx";

export default function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <section className="task_column">secion 1</section>
        <section className="task_column">secion 2</section>
        <section className="task_column">secion 3</section>
      </main>
    </div>
  );
}
