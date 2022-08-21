# User management system

        - User management system made in HTML,CSS,Javascript,NodeJS,ExpressJS and MongoDB framework.
        - It is able to create,edit,delete and update.

<img width="992" alt="image" src="https://user-images.githubusercontent.com/43902822/185749053-a84d5c96-f923-4652-ae40-446bc2033f38.png">


### Description

- initialize npm
- initialize git repo
- create `.gitignore`
- create `index.js`
> note:update `package.json` if you are using other file name as entry point
- install packages
    - review `package.json` for dependencies
    <img width="563" alt="dependencies" src="https://user-images.githubusercontent.com/43902822/185772750-de0044ef-07dd-429d-8e53-a729eb463290.png">

    
- create `.env`for environment variables
- require express and create basic web server
- update `package.json` to have `dev` script

# Planning

### Endpoints and Controllers
 
| endpoint name| purpose |aciton type| controller|

|`api/users`| create  |  User | POST | createuser |

<img width="750" alt="add_user" src="https://user-images.githubusercontent.com/43902822/185772783-7c6abcab-bc76-4fb5-ab71-bb91476db32f.png">

|`api/users`| delete | User | DELETE | deleteuser |
<img width="750" alt="delete_user" src="https://user-images.githubusercontent.com/43902822/185772804-f8d47eea-b4bb-491b-91a6-5b6b10c2dc16.png">


|`api/users`| modify |User | PATCH | updateusesr |
<img width="750" alt="update_success" src="https://user-images.githubusercontent.com/43902822/185772813-fd547880-ce92-4f96-95b4-2de6030bd8d4.png">


|`api/users`| get all Users | GET | getusers |
<img width="1057" alt="All_user" src="https://user-images.githubusercontent.com/43902822/185772820-78ee921a-dcad-4697-b7c5-e087945ccddc.png">


|`api/users/:id`| get one user | GET | getuser 




### Validation




### Data Models

| model name | usage
| User | User details collection |


