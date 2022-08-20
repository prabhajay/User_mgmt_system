# User management system


- User management system made in HTML,CSS,Javascript,NodeJS,ExpressJS and MongoDB framework.It is able to create,edit,delete and update.
- 

- initialize npm
- initialize git repo
- create `.gitignore`
- create `index.js`
> note:update `package.json` if you are using other file name as entry point
- install packages
    - review `package.json` for dependencies
- create `.env`for environment variables
- require express and create basic web server
- update `package.json` to have `dev` script

# Planning

### Endpoints and Controllers
 
| endpoint name| purpose |aciton type| controller|
|`api/createuser`| create  |  User | POST | createuser |
|`api/deleteuser`| delete | User | DELETE | deleteuser |
|`api/updateuser`| modify |User | PATCH | updateusesr |
|`api/getuser`| get all User | GET | getusers |
|`api/getuser/:id`| get one payment | GET | getuser 


### Validation

- One per endpoint using joi and/or within the model


### Data Models

| model name | usage
| User | User details collection |


