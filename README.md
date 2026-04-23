Esercizio
Ora è il momento di prepararci al frontend della nostra Web App!

MILESTONE 0 

Ragionare e preparare uno schemino per ompostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props.

MILESTONE 1

Mettiamo su un nuovo progetto React aiutandoci con Vite
Ripuliamo come sempre l’app da file e codice di esempio non necessari
Installiamo il necessario: React Router, Axios e Bootstrap (se volete utilizzarlo)

MILESTONE 2

Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
Creiamo 2 pagine:
La home, in cui mostreremo la lista dei film
La pagina di dettaglio di un singolo film

MILESTONE 3

Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei libri

MILESTONE 4

In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

Bonus
Curare l’aspetto estetico della vostra applicazione

Frontend: Nella pagina di elenco films, quando l'utente e' in hover sull'immagine del film appare un'icona di un occhio 👁️, cliccando l'immagine si apre una modale con all'interno i dettagli del film completi + il pulsante per visitare il singolo film

Frontend: Creare componenti riutilizzabili per le card dei film, l'elenco delle recensioni nella pagina del libro e la singola recensione (tutto componentizzato)

Frontend: Nella pagina di dettaglio del libro mostrare le stelline ✨ per indicare il voto al posto del semplice numero (se nn lo avete gia fatto)

Front/Back: Aggiungere il voto medio delle recensioni a ciascun film. La media voto dovra' poi essere mostrata nella pagina del singolo film quindi dovra' essere recuperata dal database cosi che la frontend riceva il dato e possa usarlo

Frontend: Predisporre una pagina Admin dove mostrare una tabella con l'elenco dei film
Frontend: Aggiungere un form statico allla pagine del singolo libro per l'invio di una recensione



Miglioriamo l’esperienza dell’utente inserendo 

MILESTONE 1 (BACKEND)

Predisponiamo un’API per salvare nel database una nuova recensione legata ad un film
Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

MILESTONE 2 (FRONTEND)

Creiamo un componente che contenga il form per le recensioni
Inseriamo questo componente nella pagina di dettaglio del film
All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

BONUS:

Inseriamo una validazione nel form di recensione


AGGIUNTE:
dashboard per admin, con pagina di visualizzazione di tutti i libri e pagina di aggiunta di un libro