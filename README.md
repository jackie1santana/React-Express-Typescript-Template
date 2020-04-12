`npm run dev` runs typescript.ts in development mode

`npm run tsc` runs tsc server.ts --outDir server-dist -w

`npm run servers` runs both client side and server side in development mode

Side note: The backend server url is launched by `open-server-url` via `open` node package

`npm run build` transpile Typescript into js & runs nodemon on server.ts

`npm start` runs server-dist/server.js (Production Mode)

`@types` are installed both in React & Backend, so you can add custom types to React, Express & Node

I use `Concurrently` Node Package to run multiple commands simultaneuosly.

Typescript is Running in Node, so you can now use ES6 import modules, however this only works with a tsconfig.json file installed as well

Node/Express Custom Types added => `import express, { Application, Request, Response, NextFunction } from 'express'`

Node-Sass installed in React
`yarn add node-sass or  npm install -f node-sass`

if you have node-sass binary issues 
run `node node_modules/node-sass/scripts/install.js` (manually) in the terminal via client folder