# Project3: Jump-Start v2

JUMP-START (℠) is training program for your first day at work that will provide a series of challenges to test how much you absorbed through your orientation.

Designed to relieve first-day jitters, this app functions as a game with timers and scores. The player will provide text based responses to a chat-bot, and will have an opportunity to ask questions about those topics.

Each time an employee completes the challenges they can compare their scores with previous "players." Employers can see which questions each employee got right through the manager analytics page.

## Spec
User Stories

As an employee, I can take the quiz.
As an employee, I can see the summary of my quiz.
As an employee, I can see my study plan and my mentor. 
As an employee, I can see other resource materials arranged by topic and they are searchable. 
As an employee, I can leave comments and give rating for the study plan and resource materials 

As an employer, I can design quiz to be multiple choices, true/false and fill in the blank. 
As an employer, I can have images as the input for questions, choices and answers.
As an employer, I can decide whether to show the right answer right after the question or after all the questions been answered. 
As an employer, I can set pass/fail criteria.
As an employer, I can edit employee study plan and assign mentor. 
As an employer, I can edit the resource materials

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
