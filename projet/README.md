# Projet : une application pour un client

*Développement Web, ISMIN 3A. En binôme, à rendre le samedi 31 octobre, 23 h 59.*

## 🎯 La mission

Un client a un problème. Il vous l'explique mal, comme tous les clients. Votre travail : comprendre ce dont il a vraiment besoin, décider ce que vous construisez, le construire, et le lui livrer en production.

Les dix clients sont dans [`SUJETS.md`](./SUJETS.md). Un sujet par binôme, premier arrivé, premier servi.

**Le client, c'est moi.** Chaque sujet a son fil dans les [Discussions](https://github.com/gaetanmaisse/ismin-web-2026-tps/discussions) du dépôt. Vous y posez vos questions, je réponds en tant que client, et tout le monde voit les réponses. Le brief est flou exprès : ce que vous ne demandez pas, vous ne le saurez pas. Et un client ne parle pas de base de données ni d'API : il parle de son problème.

**Trois fonctionnalités, pas une de plus.** Bien faites, testées, déployées. Une quatrième ne rapporte rien. Choisir les trois bonnes, c'est la moitié du projet.

## 🤖 IA

Tout est permis : Le Chat, Continue, un agent en ligne de commande. Les outils gratuits vus en cours suffisent. La note ne porte pas sur la quantité de code, elle porte sur vos décisions et sur ce qui fonctionne vraiment.

Deux conséquences :

- Un assistant produit du code, pas des décisions. C'est à vous de choisir quoi construire, quoi couper, et de le justifier.
- Chaque affirmation de votre rapport renvoie à une preuve : un commit, une PR, `fichier:ligne`, un message du fil. Une affirmation sans preuve ne compte pas.

## 🧱 Le socle technique, imposé

| Exigence | Comment je le vérifie |
|---|---|
| Back en NestJS et Prisma, front en React, en TypeScript | Je lis le dépôt |
| Authentification JWT, avec les rôles dont votre client a besoin | Je crée un compte de chaque rôle et je me connecte |
| `GET /health` répond `200` | Je l'appelle sur l'URL déployée |
| `docker compose up` à la racine démarre tout, base comprise | Je clone sur une machine neuve et je lance |
| Tests automatisés, côté API et côté front | `npm test` dans chaque dossier |
| CI GitHub Actions verte sur `main` | L'onglet Actions |
| Application déployée, URL publique dans le README | Je l'ouvre |
| Travail par PRs, chacune relue par l'autre membre du binôme | L'onglet Pull requests |

Vous pouvez partir de zéro ou réutiliser le code des TPs.

## 🗓 Les jalons

| Date | Jalon | Ce que vous rendez |
|---|---|---|
| Lundi 28 septembre | Lancement | Vous choisissez votre sujet et vous commencez à poser vos questions |
| **Vendredi 2 octobre** | **Le cadrage** | Une slide par mail : ce que vous avez compris du besoin, les trois fonctionnalités, ce que vous laissez de côté, le lien du dépôt. Je valide ou je vous fais recadrer. |
| **Vendredi 16 octobre** | **La recette** | L'application déployée. Je la teste en tant que client et je vous fais mes retours dans une issue sur votre dépôt. |
| **Lundi 19 octobre, 9 h** | **Le changement d'avis** | Le client change d'avis, dans le fil de votre sujet. Vous avez **48 h** : une PR fusionnée avant le mercredi 21 octobre, 9 h. |
| **Vendredi 23 octobre** | **Le gel pour audit** | Un tag `v0.9` sur `main`. Je vous attribue le dépôt d'un autre binôme. |
| **Mardi 27 octobre** | **L'audit croisé** | Vous ouvrez une issue sur le dépôt audité, au format du TP5 : le problème, la solution, le backlog. |
| **Samedi 31 octobre, 23 h 59** | **Le rendu** | Le dépôt, l'URL déployée, `RAPPORT.md`. Les corrections issues de la recette et de l'audit reçu, en PRs. |

Le dépôt : un par binôme, sur GitHub, public ou privé partagé avec `gaetanmaisse`.

## 📝 Le rapport : `RAPPORT.md`, trois pages au plus

1. **Le besoin.** Ce que le client voulait vraiment, et en quoi c'était différent de son premier message. Les questions qui vous ont fait changer d'idée, avec le lien vers le fil.
2. **Les trois fonctionnalités.** Et ce que vous avez coupé, avec la raison.
3. **Le journal de décisions.** Cinq à dix entrées : ce que vous avez choisi, ce que vous avez écarté, pourquoi. Chaque entrée renvoie à un commit ou une PR.
4. **L'IA, écartée.** Au moins une fois où l'assistant a proposé quelque chose que vous n'avez pas retenu. Citez sa proposition, dites pourquoi.
5. **La recette.** Mes retours de client, ce que vous avez corrigé, ce que vous avez refusé, avec les PRs.
6. **Le changement d'avis.** Ce qu'il a touché dans votre code, ce qui a résisté, ce qui a cassé. Lien vers la PR.
7. **L'audit reçu.** Ce que vous avez corrigé, ce que vous avez refusé, et pourquoi.

## ✅ La grille, une note par binôme

| Critère | Poids | Ce que je regarde |
|---|---|---|
| Le socle technique | 30 % | Chaque ligne du tableau du socle, vérifiée une par une |
| Le changement d'avis | 25 % | Livré à temps, en une PR lisible, sans casser le reste, tests compris |
| La réflexion produit | 25 % | Les questions posées au client, les trois bonnes fonctionnalités, des coupes justifiées, la réponse à la recette |
| L'audit croisé | 20 % | La qualité de l'audit rendu, et la réponse à l'audit reçu |

> ⚠️ **Règle d'or** : ce que vous ne pouvez pas prouver par le dépôt ou par le fil ne compte pas.
