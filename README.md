# Template by SmokeTrees

This is a standard template we use at SmokeTrees to create our backend for node.js.

To start the server run
```
$ npm start
```

Note: This will run a server for development environment. 
For information on deploying express application to production server and learn best practices refer [this](https://expressjs.com/en/advanced/best-practice-performance.html).

### logger

This directory has 2 files.

* logger.js exports a winston object which we use for logging. You should edit logger.js to write your config for the logs.
* morgan.js exports a pre-configured morgan object to log using stream to winston object. It is used to intercept the http request and log the request and response details.
For more details visit the official page for [morgan](https://www.npmjs.com/package/morgan).

## routes

Directory for defining routes. I don't think this need more explanation.

## Additional Information

* If on linux running the following command add ./node_modules/.bin to the path.
  ```bash
  $ source ./activate
  ```
  By doing so we can use the commands installed with packages using the terminal.
  This won't be required in many IDEs like Webstorm but I thought it will be good idea to include it.
  
* [standard.js](https://npmjs.com/package/standard) has been added as the default linting and styling tool
  
  Use :
  ```
  $ npm run lint
  ```
  Fixes whatever can be fix. Above command logs out the errors which it couldn't fix.
  
* [mocha](https://npmjs.com/package/mocha) is used for testing and [chai](https://npmjs.com/package/chai) is used for assertion.
  [chai-http](https://npmjs.com/package/chai) is used to test http endpoints.
  
  Use:
  ```
    $ npm test
  ```
  
* [nyc](https://npmjs.com/package/nyc) is used as the default coverage tool.
  Use:
  ```
   $ npm run coverage
   ```
  

* The master contains code for a http server. Checkout the branch https for the http server.
  Replace the self-signed certificates in teh certs with your own ssl certificates.
  
## Dependency information

|Dependency         | Usage |
|-------------------|------ |
|[body-parser](https://npm.com/package/body-parser)               |Parses the body of the incoming request and add it to req.body field|
|[compression](https://npmjs.com/package/compression)             |Compresses the response|
|[express](https://npmjs.com/package/express)                     |Express|
|[express-sanitizer](https://npmjs.com/package/express-sanitizer) |Prevent XSS and sanitize the incoming request|
|[morgan](https://npmjs.com/package/morgan)                       |HTTP request logger|
|[winston](https://npmjs.com/package/winston)                     |General purpose logger for the application|
|[nyc](https://npmjs.com/package/nyc)                             |Code Coverage tool|
|[standard](https://npmjs.com/package/standard)                   |Linting and styling tool.|
|[chai](https://npmjs.com/package/chai)                           |Assertion Library|     
|[chai-http](https://npmjs.com/package/chai-http)                 |Middleware for chai to test http endpoints|
