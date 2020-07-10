Phase 1 (White Cross) if starting from scratch:
===

- ```npx create-react-app APPNAME```
- cd into APPNAME folder
- npm installs (eg: express, axios, etc...)

edit package.json

- set up scripts
```
    "client": "react-scripts start",
    "server": "nodemon --watch server server/server.js"
```
- set up proxy: 

```
  "private": true,
  "proxy": "http://localhost:5000",
  "dependencies": {
```

setup basic server
---

setup react files (src folder)
---

- create "components" folder
- set up components