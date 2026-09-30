import { ModelList } from "./components/ModelList";
import { TaskFilter } from "./components/TaskFilter";
import { MOCK_MODELS } from "./models.mock";
import type { Task } from "./model";
import { useState } from "react";

/**
 * The mockup: the page as a designer would hand it over, static HTML written
 * as JSX, and nothing else. `npm run dev`, then localhost:5173.
 *
 * You turn it into components, step by step:
 *   step 2  one card    → <ModelCard model={…} />
 *   step 3  the <ul>    → <ModelList models={MOCK_MODELS} />
 *   step 4  the <nav>   → <TaskFilter value={task} onChange={setTask} />, the state lives here
 *   step 6  MOCK_MODELS → the API
 */
const App = () => {
  const [task, setTask] = useState<Task | undefined>(undefined);
  const visible = task ? MOCK_MODELS.filter((m) => m.task === task) : MOCK_MODELS


  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">ModelZoo</h1>
        <p className="app-tagline">Le catalogue des modèles d'IA</p>
      </header>

      <TaskFilter value={task} onChange={setTask} />

      <ModelList models={visible} />
    </main>
  );
};

export default App;
