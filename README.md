To open this App just follow this link:
https://dmitrydam.github.io/The-Movie-Routing-Database/build

## The Movie Routing Database (API+LocalStorage) on ReactJS.

* Создан базовый раутинг: домашняя страница (home), страница поиска кинофильмов
  (movies), страница информации (about).
* При клике по ссылке главной навигации, происходит переход по
  соответствующим раутам.
* Хедер с навигацией не входят в раутинг и рендерятся всегда на старте.
* Домашняя страница должна "открываться" по умолчанию при посещении приложения.
  На странице текст с приветствием и 2 ссылки, одна на страницу
  кинофильмов, вторая на страницу информации.

* На странице About, subroutes, простое меню которое содержит несколько
  ссылок: team, stack, career. При клике по ним происходит добавление пути в
  текущий раут, к примеру about/team.
* В зависимоти от того какой subroute выбран на странице about, под меню
  рендерится соответствующий компонент.
* В сабрауте about/team рендерится компонент содержащий список членов команды.
  При клике по имени в списке, рендерится компонент карточки члена команды. Это
  делается с помощью использования history, поля match.params. В конец url
  строки добавляется id члена команды и, компонент карточки с информацией о нем,
  использует match.params.параметр для отображения информации.
  
## Food service application (ReactJS + Redux)

**To open this App just follow this list:**

- Clone this repository.
- **in "server" folder (Server for authorization in APP):**
  - npm i (install authorization server)
  - npm start (start authorization server)
- **in "client" folder (APP) you should open two bash windows.**
  - npm i (install APP)
  - json-server --watch server/db.json --port 8000 (start backend server fo APP - in first bash window)
  - npm start (start APP - in second bash window )

####**Technologies that using in this project**

- "react": "^16.6.3",
- "react-redux": "^6.0.0",
- "react-router-dom": "^4.3.1",
- "redux": "^4.0.1",
- "redux-persist": "^5.10.0",
- "redux-thunk": "^2.3.0",
- "axios": "^0.18.0",
- "query-string": "^6.2.0",
- "reselect": "^4.0.0"
- "normalizr": "^3.3.0",
