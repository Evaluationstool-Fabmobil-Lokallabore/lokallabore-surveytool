# Ein Umfragetool für die Lokallabore!

<img width=200 src="https://github.com/Evaluationstool-Fabmobil-Lokallabore/lokallabore-surveytool/assets/147499884/938e4127-9269-4bd1-b8f5-417fb2d0cd97" />
<img width=200 src="https://github.com/Evaluationstool-Fabmobil-Lokallabore/lokallabore-surveytool/assets/147499884/a9740fdb-167d-4390-b90b-11b79e82b697" />
<img width=200 src="https://github.com/Evaluationstool-Fabmobil-Lokallabore/lokallabore-surveytool/assets/147499884/607d1b87-0762-43f4-ae06-4a0e7af9ae28" />

<br/><br/>

Dies ist eine Webapp, die in allen modernen Browsern läuft.
Die App ist mit dem Javascript Framework [React](https://react.dev/) entwickelt worden (mehr siehe unten im README), und benutzt [Firebase](https://firebase.google.com/) als Datenbank.

Deployed und gehostet wird die App auf [Netlify](https://www.netlify.com/). [![Netlify Status](https://api.netlify.com/api/v1/badges/aabd7458-40a4-4c54-bdac-f8aa52bef505/deploy-status)](https://app.netlify.com/sites/lokallabore-survey/deploys)

## Umfrage Ablauf und Logik
Es gibt 3 Umfrage-Sorten innerhalb der App, die für verschiedene Menschen und Situationen gedacht sind:
- "Registrierung"
- "Login"
- "Ich bin zu Gast"

Besonderheit Ablauf bei "Login": Hier gibt es eine kurze und eine lange Variante. Die lange (extended) Variante wird aktiviert bei jedem 3. Besuch einer Person. Wenn sich eine Person jedoch als Betreuer*in ausweist, dann wird die lange Variante nie aktiviert.

## User Identifizierung aka Benutzer*innen Login
Für die Datenauswertung ist es wichtig, mehrere Submissions, die von ein und derselben Person stammen, zuordnen zu können.
Dafür benutzt die App eine vereinfachte Benutzer*innen Identifizierung. Der "Login" besteht aus dem Nicknamen und dem Geburtsdatum einer Person. Es werden keine Passwörter benutzt.

## Technisches über React (weiter auf Englisch)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started with Create React App

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
