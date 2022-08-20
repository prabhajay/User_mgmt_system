# User management system

        - User management system made in HTML,CSS,Javascript,NodeJS,ExpressJS and MongoDB framework.It is able to create,edit,delete and update.

        image.png

### Description


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
|`api/users`| create  |  User | POST | createuser |
|`api/users`| delete | User | DELETE | deleteuser |
|`api/users`| modify |User | PATCH | updateusesr |
|`api/users`| get all User | GET | getusers |
|`api/users/:id`| get one payment | GET | getuser 


### Validation




### Data Models

| model name | usage
| User | User details collection |


