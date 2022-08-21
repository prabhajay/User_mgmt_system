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

        Method:POST       http://localhost:3000/api/users

<img width="750" alt="api_post" src="https://user-images.githubusercontent.com/43902822/185796152-00a67a08-f4fe-427e-baf2-e4ec46710eb3.png">


|`api/users`| delete | User | DELETE | deleteuser |

        Method:Delete      http://localhost:3000/api/users/63023ae39409d58655aB69e9

<img width="750" alt="api_delete" src="https://user-images.githubusercontent.com/43902822/185796176-413440ab-da0c-4b43-a32a-cacf4d08d544.png">


|`api/users`| modify |User | PUT | updateusesr |

        Method:PUT       http:localhost:3000/api/usesrs/63023ae39409d5855aB69e9

<img width="750" alt="api_put" src="https://user-images.githubusercontent.com/43902822/185796211-df8c4bee-bbdc-46ed-8eb1-21b0f48016bf.png">

<img width="750" alt="api_put_update" src="https://user-images.githubusercontent.com/43902822/185796415-5aa019e4-f560-4fbb-9d82-59b357580cee.png">


|`api/users`| get all Users | GET | getusers |

        Method: GET    http:localhost:3000/api/users

<img width="750" alt="api_user" src="https://user-images.githubusercontent.com/43902822/185796225-ba703696-3e7e-45d8-9160-92b61a7557f2.png">

|`api/users/:id`| get one user | GET | getuser 




### Validation




### Data Models

| model name | usage
| User | User details collection |add-user

        http://localhost:3000/add-user

<img width="750" alt="add_user" src="https://user-images.githubusercontent.com/43902822/185772783-7c6abcab-bc76-4fb5-ab71-bb91476db32f.png">

| User | User details collection |delete-user

        http://localhost:3000/

<img width="750" alt="delete_user" src="https://user-images.githubusercontent.com/43902822/185772804-f8d47eea-b4bb-491b-91a6-5b6b10c2dc16.png">

| User | User details collection |update-user

        http://localhost:3000/update-user?id=63004189251b45f20da541fa

<img width="750" alt="update_success" src="https://user-images.githubusercontent.com/43902822/185772813-fd547880-ce92-4f96-95b4-2de6030bd8d4.png">

| User | User details collection |get-user

        http://localhost:3000/
        
<img width="1057" alt="All_user" src="https://user-images.githubusercontent.com/43902822/185772820-78ee921a-dcad-4697-b7c5-e087945ccddc.png">





