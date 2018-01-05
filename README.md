# ToDo App with 2 roles: manager and employee

The project has Front-End and Back-End

To start the app:

**Consult README in db folder to spin up Postgres and connect to the server**

0. git clone https://github.com/codalife/roletodo.git
1. Install yarn if not installed alredy: npm install -g yarn
1. Run yarn to install dependencies. In the app's root folder: yarn
1. Start server: yarn start
1. Go to http://localhost:3000 to see the app

Stack:

1. React
2. Redux
3. Yarn + NPM
4. Webpack
5. Babel
6. Node/Express
7. Postgres
8. Sequelize
9. Axios
10. React-Bootstrap
11. Heroku

Justification for choosing technologies:
Yarn - making sure application is not dependant on local machine’s environment.
React - scalability, eaze of development and maintainance
Redux - not really justifiable for an app this size, simplifies state management
Postgres - relational db for relational data

Additional tooling:

1. Prettier - fixes code, including indentations, new lines, semicolons and etc
2. ESLINT by AirBnB - checks for proper use of variables, some code styling and etc

Notes:

Todo, Edit and Create routes are rendered if a user is authenticated. However, it is not a enough for security. A user needs to be authenticated by the back-end service and then given a token, which is consequenly checked from requests. If token does not match session, we should not send any user data. Dealing with authentication on the client side is not safe, as data is already in a browser.
Current solution does a basic check if a user exists.
