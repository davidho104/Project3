# Project3: Jump-Start v2

JUMP-START (℠) is training program for your first day at work that will provide a series of challenges to test how much you absorbed through your orientation.

Designed to relieve first-day jitters, this app functions as a game with timers and scores. The player will provide text based responses to a chat-bot, and will have an opportunity to ask questions about those topics.

Each time an employee completes the challenges they can compare their scores with previous "players." Employers can see which questions each employee got right through the manager analytics page.

## MySQL Database
What is in MYSQL?: The questions, the answers, the accounts of each player, the scores and times of each attempt.


## Contributors
JUMP-START (℠)is created and developed by David Ho, Laurence Martinez, Raymond Won, and Brian Swift.

## Technology

* React
* Firebase authentication (Possibly Auth0)
* Node.js Express server
* Sequelize ORM
* MySQL database
* Mongo/Mongoose
* Google Charts API

## API Routes:
#### GET
* /api/users - return all user profiles
* /api/users/<email>   - return one user profile by email
* /api/quizzes - return all questions
* /api/results - return all results
* /api/results/<email> - return one user result by email
* /api/checkrole/<email> - return role i.e. manager, employee

#### POST
* /api/users - insert user
* /api/quizzes - insert question
* /api/results - insert results

#### PUT
* /api/users/<email> - update user
* /api/quizzes/<id> - update question
* /api/results/<id> - update result
  
### Deployment
through Heroku at: https://jump-start2.herokuapp.com/
-
