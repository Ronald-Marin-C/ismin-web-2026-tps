import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import { Form, Link, useParams } from "react-router";
import { ApiError, fetchModel } from "../api";
import { TASK_LABELS } from "../model";
import { formatDownloads, formatParameters } from "../format";

/**
 * The page of one model, at /models/:id.
 *
 * TODO step 3: the <a href> becomes a <Link to>.
 *
 * TODO step 4. Below, the mockup: written by hand, for Mistral. Make it show
 * the model of the URL.
 *   - the id in the URL: useParams
 *   - the model: useQuery, with the key ['model', id] and fetchModel(id)
 *   - the three states, like CatalogPage. A 404 of the API: "Modèle introuvable."
 *   - the numbers with format.ts, the task with TASK_LABELS
 *   - no licence: "Non précisée". No createdBy: no "Ajouté par" line
 */
export const ModelPage = () => {
  const {id} = useParams() as {id: string};
  const {data: model, error, isPending, isError} = useQuery({
    queryKey: ['model', id],
    queryFn:() => fetchModel(id),
  });


  return (
    <section className="page">
      <Link  className="back" to="/">
        ← Retour au catalogue
      </Link>
      {isPending && <p role ="status">Chargement...</p>}
      {isError && <p role="alert">
        {error instanceof ApiError && error.status == 404
        ? 'Modèle introuvable.'
          : `Impossible de charger le modèle : ${error.message}`}
      </p>}
      {model && 
      
      <article className="detail">
        <header className="detail-header">
          <h2 className="detail-title">{model.name}</h2>
          <span className="badge">{TASK_LABELS[model.task]}</span>
        </header>

        <dl className="detail-fields">
          <div>
            <dt>Identifiant</dt>
            <dd>{model.id}</dd>
          </div>
          <div>
            <dt>Organisation</dt>
            <dd>{model.org}</dd>
          </div>
          <div>
            <dt>Paramètres</dt>
            <dd>{formatParameters(model.parameters)}</dd>
          </div>
          <div>
            <dt>Téléchargements</dt>
            <dd>{formatDownloads(model.downloads)}</dd>

          </div>
          <div>
         
            <dd>{model.license && <dt>Licence {model.license}</dt>}</dd>
          </div>
          <div>
          
            <dd>{model.createdBy && <dt>Ajouté par{model.createdBy}</dt>}</dd>

          </div>
        </dl>
      </article>}
    </section>
  );
};
