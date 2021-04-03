# Fleet Tracking API


## Local setup steps below
#### Step 1: 

after cloning the repo, change to repo directory and run "npm install"
<br>
#### Step 2: 

run the db migration scripts to initialize db "npx sequelize-cli db:migrate"
          update the db config
#### Step 3: 
run "npm start"

## Design
Node, Express framework, Sequelize for ORM, Mysql is used.

## Security
 Each vehicle will get its own registration code. to update location registration code is required.

## Handling Scaling.

API and Frontend is seperated to handle traffic seperatly

for production db conifguration read and write server concept can be used with connection pooling. this will handle trafic well. 

```javascript
"replication": {
            "read": [
                {
                    "host": "localhost",
                    "username": "admin",
                    "password": "admin"
                }
            ],
            "write": {
               "host": "localhost",
                    "username": "admin",
                    "password": "admin"
            }
        },
        "pool": {
            "max": 50,
            "idle": 30000
        }
```
## Unit Testing
Mocha and Chai frameworks will be used. as of now out of scope due to time limitation

## end to end testing
cypress framework will be used for end to end testing.
