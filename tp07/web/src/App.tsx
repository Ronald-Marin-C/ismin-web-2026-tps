import { ModelList } from "./components/ModelList";
import { TaskFilter } from "./components/TaskFilter";
import type { Model, Task } from "./model";
import { useEffect, useState } from "react";
import { fetchModels } from "./api";

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
  type Status = 'loading' | 'error' | 'ready';


  const [models, setModels] = useState<Model[]>([]);
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState('');


  const [task, setTask] = useState<Task | undefined>(undefined);
  useEffect(() => {
    let ignore = false;        // la réponse est-elle périmée ?
    setStatus('loading');
    fetchModels(task)
      .then((data) => {
        if (ignore) return;
        setModels(data);
        setStatus('ready');
      })
      .catch((err: unknown) => {
        if (ignore) return;
        setError(err instanceof Error ? err.message : String(err));
        setStatus('error');
      });
    return () => { ignore = true; };  // le nettoyage
  }, [task]);

  return (
    <main className="app">
        <header className="app-header">
          <h1 className="app-title">ModelZoo</h1>
          <p className="app-tagline">Le catalogue des modèles d'IA</p>
        </header>

       <TaskFilter value={task} onChange={setTask} />
      {status === 'loading' && <p className="status" role="status">Chargement…</p>}
      {status === 'error' && <p className="error" role="alert">{error}</p>}
      {status === 'ready' && <ModelList models={models} />}

    </main>
  );
};

export default App;
