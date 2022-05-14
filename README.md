# E-com_BE
Homework 13

## Description of Project
This is an application for managers at an internet retail company who want a back end  tool for an e-commerce website using the latest technologies. This allows a the company to stay competitive with other e-commerce companies.
## Aims/Goals
1. Given a functional Express.js API, when I add my database name, MySQL username, and MySQL password to an environment variable file, then I am able to connect to a database using Sequelize.
2. When I enter schema and seed commands, a development database is created and is seeded with test data.
3. When I enter the command to invoke the application, my server is started and the Sequelize models are synced to the MySQL database.
4. When I open API GET routes in Insomnia for categories, products, or tags the data for each of these routes is displayed in a formatted JSON.
5. When I test API POST, PUT, and DELETE routes in Insomnia I am able to successfully create, update, and delete data in my database.

## Technologies Used
JavaScript, Sequelize, Node.js, MySQL2, .dotenv, Insomnia
## Challenges Faced
I had many failed attempts to connect to the server. I had no trouble connecting to MySQL (mysql -u root -p) but I had a typo in my .env file where DB_PASSWORD='password' should've been DB_PW='password'. The error message kept telling me I wasn't using a password. I need to work on my powers of observation. Then I noticed errors with my product_routes using Insomnia. I had typed too many ()'s in an arrow statement.

## Installation
From the root directory run npm i, then nodemon server.js to connect to the server. Tested the routes using Insomnia.

## Video link

## My Repo link
https://github.com/utilrr/E-com_BE
## Screenshots w/ Captions



### Contribution
Made with ❤️ by [Mark Healy]
### ©️2022 
