# React Redux Boilerplate

[![Build Status](https://travis-ci.org/haipham23/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/haipham23/react-redux-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/haipham23/react-redux-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/haipham23/react-redux-boilerplate?branch=master)
[![Code Climate](https://codeclimate.com/github/haipham23/react-redux-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/haipham23/react-redux-boilerplate)
[![Issue Count](https://codeclimate.com/github/haipham23/react-redux-boilerplate/badges/issue_count.svg)](https://codeclimate.com/github/haipham23/react-redux-boilerplate)

### Tech stack
- React
- Redux
- React-router
- Redux-thunk

### Prerequisite
- Node v7
- npm v3
- Docker v17

### Test
```
npm t

npm run cover
```

### Build

```
docker build -t react_redux_boilerplate .
```

### Start

```
docker run -d -p 3000:8080 react_redux_boilerplate
```

Go [here](https://localhost:3000/) to check

### Project structure

```
- public // for assests like images
- src
--- actions
--- components // stateless components
--- constants
--- containers // statefull components
--- css // auto generated css -- should not edit
--- discounts // discount logics
--- products // product logics
--- reducers
--- scss
--- services
--- store
--- index.js
--- registerServiceWorker.js
- .eslintrc
- .gitignore
- Dockerfile
- package-lock.json
- package.json
- README.md
```
