# Server Testing Module Project

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- x[ ] Create a forked copy of this project.
- [x ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ x] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ]x Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ x] Push commits: git push -u origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

For this project you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Requirements

- use `jest` and `supertest` to write the tests.
- Your API must be able to **create** and **delete** a _resource_ of your choosing.
- Write a minimum of two tests per route handler.

### Task 3: Stretch Goals

The following goals are designed to stretch your knowledge and may require additional research beyond what was learned in class today.

- [ ] Add endpoints for viewing the details of the resource. Write tests for it.
- [ ] Add a testing database to the project and configure the testing script inside `package.json` to use the testing database. Hint: use `cross-env` npm package.
- [ ] Complete the rest of the CRUD operations and write tests for them.
- [ ] Add tests for your data access files (models).

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**


# In Terminal:

1. npx gitignore node
2. touch index.js
3. npm init -y
4. touch server.js
5. npm i -D nodemon
6. npm i express dotenv helmet morgans cors knex knex-cleaner sqlite3 colors
    (if auth/entication|orization needed:)
    bcryptjs express-session connect-session-knex
7. touch .env
8. npx knex init
9. mkdir data => cd
10. touch db-config.js => cd ..
11. mkdir models => cd
12. touch models.js && router.js
13. code .

## In the Code:

14. package.json => line 6 ''scripts'' :
    ''server'': ''nodemon index.js'',
    ''start'': ''node index.js''

15. index.js _ STATIC _ :
    dotenv.config ; server require ; PORT ; server.listen

16. .env :
    PORT = 8888

17. server.js _ mostly static _ :
    require dependencies ; //require router// ; define server ; use server ; //use router// ; export server

18. knexfile,js _STATIC_ :
    zac rec dev sets

19. data => config.js _STATIC_ :
    knex config.dev

20. models => models.js -dynamic-:
    require config ; module.exports with function names for endpoitns ; functions for endpoitns

21. models => router.js - dynamic-:
    express.Router ; pull in model ; //a ; export

22. test on postman

23. npx knex migrate:make create*ducks_table

24. data => migrations => 2020..._dynamic*:

25. npx knex migrate:latest

26. npx knex seed:make 01-cleanup

27. npx knex seed:make 02-ducks

28. data => seed => 01.js :
    add in cleanup code

29. 02.js :
    add in seed data

30. npx knex seed:run

31. create endpoints in router

32. create functions in model