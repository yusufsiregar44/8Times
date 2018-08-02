# 8Times
repo to store Hacktiv 8 phase-2 final live code

# Intro
8Times is a concept web app built upon the belief information should be shared transparently and effectively.

# Installation
The server side is unfortunately going to be hosted on the web so goodluck with that. As for the client side, go to the client directory and then execute npm intstall followed by npm run serve, it should do the trick

## API Endpoints

List of users routes:

| Route | HTTP | Description |
| ------ | ------ | ------ |  
| /users/login | POST | sends client entered data and matches those with the user database |
| /users/:register| POST | sends client entered data and creates those at the database)|

List of articles routes:

| Route | HTTP | Description |
| ------ | ------ | ------ |  
| /articles | GET | Get all the articles |
| /articles/:id | GET | Get a single article with the matching id params|
| /articles/:category | GET | Get all articles with the matching category params|
| /articles/:author | GET | Get all articles with the matching author params |
| /articles* | POST | create an article |
| /articles/:id* | DELETE | Delete an article |
| /articles/:id* | PUT | Update an article with new info |

routes marked with * can only be accessed by authenticated user
