Sample App demonstrating how to build applications with React, Node.js, and the Lightning Design System. Written with ECMAScript 6 on the client and on the server (leveraging the new ES6 support of Node.js 4+).

The back-end is built with Node.js using a Postgres database.

See it live here: http://www.belgianbeerexplorer.com.

Automatic Deployment to Heroku
Make sure you are logged in to the Heroku Dashboard

Click the Button below to deploy the application on Heroku.

Deploy

Your own instance of the application is automatically deployed, and your own Postgres database is populated with sample data.

If the Heroku Toolbelt is not install on your system, install it now.

Open a browser, access beers.sql, and save the file locally.

On the command prompt, type the following command to populate your database:

heroku pg:psql --app YOUR_HEROKU_APP_NAME < beers.sql
Local Installation
Follow the instructions below if you prefer to install the application on your local machine:

Install the latest version of Node.js. This application requires Node.js 4+.

Install Postgres locally

Start Postgres and create a database called belgianbeers.

Clone this repository or download and unzip this zip file.

Navigate to the belgian-beer-explorer directory and install the project dependencies:

npm install
Open server/config.js and make sure the databaseURL matches your configuration (use your user name)

Type the following command to build the client application:

npm run webpack
The project is written using ECMAScript 6 including ECMAScript 6 modules.

Type the following command to start the server:

npm start
The database is automatically populated

Open a browser and access http://localhost:5000






### HeyTranslate

_______________________________________________________________________________________________________________________________________

This project was created with [React](https://reactjs.org/)

Technologies used
React 
CSS
Ajax / Fetch API


## Installation

```
Clone or download the repository.
Open it in your IDE.
Run cd mock-chat and npm i.
Then run node server.js.
Then npm start.

```


### Learn More

To learn React, check out the [React documentation](https://reactjs.org/)

You can learn more in the [Create React App documentation](https://create-react-app.dev/docs/getting-started)
