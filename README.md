# Portfolio Rep 
MongoDB Express.js React.js Node.js

## Quick Start

#### Setup

```bash
npm install

brew tap mongodb/brew
brew install mongodb-community
```

Start the database
```bash
brew services start mongodb-community
# or
mongod
```

#### for Development

Start the client
```bash
npm run dev
```

Start the server
```bash
npm start
```

#### for Production

```bash
npm run prod
```

#### Other Commands

```bash
npm run build
npm test
npm run test:verbose
npm run lint
npm run lint:fix
```

## Features

* Webpack conveniently bundles your code for you.
* Babel lets you use ES6/7 features.
* CSS pre-processor setup for LESS and SASS lets you keep your styles clean and organized.
* ESLint helps you maintain a high level of code quality.
* Jest and Enzyme give you a robust testing frame work to make sure your code works.

## Code Structure

```
- client
  - api
  - assets
    - images
    - icons
  - components
    - atoms
    - molecules
    - organisms
    - templates
    - pages
    - environment
  - hooks
  - store
    - actions
    - reducers
    - thunks
    - tests
  - styles
  - utils
- server
  - config
  - database
  - routes
- scripts
```

Component Heirarchy:

Environment > Pages > Templates > Organisms > Molecules > Atoms

This is based on atomic design. Learn more about [atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

## Technologies

[React](https://facebook.github.io/react/) - View Library

[Redux](http://redux.js.org/) - State Manager

[Webpack](https://webpack.github.io/) - Module Bundler

[Express](http://expressjs.com/) - Node Application Framework

[MongoDB](https://www.mongodb.com/) - Document Database

[Mongoose](http://mongoosejs.com/) - MongoDB Framework

[Passport](http://www.passportjs.org/) - Authentication Framework

[React Notification System](http://igorprado.com/react-notification-system/) - Notification System

[Bulma](http://bulma.io/) - CSS Framework

[FontAwesome](http://fontawesome.io/) - Icons

[Ramda](http://ramdajs.com/) - Functional Library

[date-fns](https://date-fns.org/) - Date Functions Library

[SuperAgent](https://github.com/visionmedia/superagent) - HTTP Request Library

[ESLint](http://eslint.org/) - Code Linter

[Jest](https://jestjs.io/) - Testing Framework

[Enzyme](https://airbnb.io/enzyme/) - React View Testing
