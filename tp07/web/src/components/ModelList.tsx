import type { Model } from '../model';
import { ModelCard } from './ModelCard';

interface ModelListProps {
  models: Model[];
}

/**
 * TODO step 3. The <ul> of the mockup: one <li> per model, a ModelCard in each,
 * and a key. No model: the text « Aucun modèle pour ce filtre. », not an empty list.
 */
export const ModelList = ({ models }: ModelListProps) => {
  return (
     models.length === 0 ? 
      (<p>Aucun modèle pour ce filtre.</p>) :
      (<ul className="model-list">
        {models.map((model) => (
          <li key = {model.id}>
            <ModelCard model ={model} />
         </li>
        ))}
      </ul>)
      )
};
