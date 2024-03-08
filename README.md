# Next js - drizzle - mysql - tailwind css: 

this repo is my starter to full stack applications with all those libraries,

## Usage : 

```sh
  npx create-next-app@latest app_name -e https://github.com/PLMohamed/next-drizzle-template
```

Or

```sh
  git clone https://github.com/PLMohamed/next-drizzle-template .
```


### env

Make sure to change what necessary in the .env file (<i>I'm using api versioning</i>)

```env
  DB_HOST = "localhost"
  DB_NAME = "your_database"
  DB_USER = "your_user"
  DB_PASSWORD = "your_password"
  
  # NEXT PUBLIC
  NEXT_PUBLIC_API_VERSION = "v1"
```

### docker-compose : 
if you want to also install the database with docker-compose, make sure credentials of db match .env

```sh
    docker-compose up -d
```
