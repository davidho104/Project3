-- insert these lines first to avoid foreign key violation
INSERT INTO roles (role) VALUES ("manager");
INSERT INTO roles (role) VALUES ("employee");
------
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("michael", "Michael", "Scott", "michael.png", "michael@dm.com", "570-123-0001", "1");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("jim", "Jim", "Halpert", "jim.png", "jim@dm.com", "570-123-0002", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("dwight", "Dwight", "Schrute", "dwight.png", "dwight@dm.com", "570-123-0003", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("pam", "Pam", "Beasley", "pam.png", "pam@dm.com", "570-123-0004", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("standley", "Stanley", "Hudson", "standley.png", "standley@dm.com", "570-123-0005", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("phyllis", "Phyllis", "Lapin", "phyllis.png", "phylllis@dm.com", "570-123-0006", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("angela", "Angela", "Martin", "angela.png", "angela@dm.com", "570-123-0007", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("oscar", "Oscar", "Gutierrez", "oscar.png", "oscar@dm.com", "570-123-0008", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("kevin", "Kevin", "Malone", "kevin.png", "kevin@dm.com", "570-123-0009", "2");
INSERT INTO users (username, firstName, lastName, picture, email, phone, permissionId) 
VALUES ("creed", "Creed", "Bratton", "creed.png", "creed@dm.com", "570-123-0010", "2");
---------------
INSERT INTO quizzes (question, choices, answer) 
VALUES ("If work hours end at 5:00 pm, how many hours after work should you stay to convince the people you are a real employee?", "0, 2, 4, Leave Early", "2");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("How many times can you ask your coworkers to help you before they start to deliberately sabotage your efforts?", "1, 3, 13, People here are always helpful", "3");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("Which co-worker will take any personal details you share and inform everyone about them?", "Kevin, Creed, Angela, Sam", "Sam");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("When your boss complains about your coworkers what is the correct response?", "Throw them under the bus, Yes Sir, if you say so, I think they are working very hard, I wouldn't know", "Throw them under the bus");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("What color is the carpet in Meeting Room D?", "Blue, Gray, Orange, There is no meeting room D", "There is no meeting room D");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("When deciding what to wear to work, which color does your supervisor detest above all others?", "Light Blue, Blue, Gray, Orange", "Light Blue");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("When your make a huge mistake who is the best person to blame it one?", "Kevin, Creed, Angela, Sam", "Angela");
INSERT INTO quizzes (question, choices, answer) 
VALUES ("Who keep’s stealing stuff from my desk?", "Creed, Angela, Sam, A former employee named Carl who has been hiding in the building for years", "A former employee named Carl who has been hiding in the building for years.");

-----
----- Michael
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 1, "100", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 3, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 4, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 6, "Gray", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 7, "Sam", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (1, 8, "A former employee named Carl who has been hiding in the building for years.", 1);
----- Jim
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 1, "2", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 3, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 4, "Throw them under the bus", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 6, "Blue", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 7, "Angela", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (2, 8, "Angela", 0);
----- Dwight
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 1, "2", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 3, "Sam", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 4, "Angela", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 6, "Light Blue", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 7, "Sam", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (3, 8, "Sam", 0);
----- Pam
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 1, "2", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 3, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 4, "Throw them under the bus", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 6, "Light Blue", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 7, "Kevin", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (4, 8, "A former employee named Carl who has been hiding in the building for years.", 1);
----- Stanley
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 1, "2", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 3, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 4, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 6, "Light Blue", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 7, "Angela", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (5, 8, "A former employee named Carl who has been hiding in the building for years.", 1);
----- Phyllis
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 1, "0", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 3, "don't know", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 4, "Throw them under the bus", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 6, "Light Blue", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 7, "Kevin", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (6, 8, "Kevin", 0);
----- Oscar
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 1, "2", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 2, "3", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 3, "Sam", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 4, "Throw them under the bus", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 5, "There is no room D", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 6, "Light Blue", 1);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 7, "Kevin", 0);
INSERT INTO results (userId, quizId, userAnswer, score)
VALUES (8, 8, "A former employee named Carl who has been hiding in the building for years", 1);