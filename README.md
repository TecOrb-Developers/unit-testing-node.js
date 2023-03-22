# Unit-testing-node.js

Direact link to main website (https://mochajs.org/)


What is Unit testing?
Unit testing with mocha and chai making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught
exceptions to the correct test cases

What we have implemented in this project?
- User Signup
- User Login via password
- User Listing


#Required dependencies:
- Node is installed (v 14.x)
- Postman is installed (Version 10.12.3-230318-0431)
- Mongodb altles free tier cluster
- Mocha , chai npm
- Git is installed.

#Create development.env to setup required environment variables
- Go to the pre-start folder and env>development.env file directory
- NODE_ENV=development
- jwt_secret_key=""
- MONGO_URI=""

-


### Server 
- PORT=3000
- HOST=localhost


### Major steps are followed to create/setup:
`npm install`



### local server
`npm run start:dev`


### prod build
`npm run build`


### prod build run
`node dist/index.js`


# postman  api url
type post  "{host-url}/api/v1/user/add"
in body pass { phone, email, password, name }


type post  "{host-url}/api/v1/user/login"
in body pass { email, password }


type get  "{host-url}/api/v1/user/list"
in param send page and pageSize for pagination
