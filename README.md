# Text Master
---
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
docker build -t text_master .
```

### Start

```
docker run -d -p 3000:8080 text_master
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
