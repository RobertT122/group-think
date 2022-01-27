# *group*Think

Live Site: <a href="https://group-think-gt.herokuapp.com/#/" target="_blank">groupThink</a>

## Overview
Group think is a crowd sourced question and answering application that focuses on getting users gut reactions. 
The app allows you to ask a "Yes" or "No" questions to other users and get information on how people respond. Users will be given time limits to respond to questions, and receive rewards or penalties based on whether they answered as part of the majority. The function of this app is to apply social pressure and time pressure to users answering questions and provide feedback on their decisions.

## Main MVPs and Features

### User Authenitcation
* Backend: 
  * user auth pattern using encrypted passwords and tokens
* Frontend: 
  * login/signup forms
  * Navigation bar to lauch forms
### User Profile
* Backend: 
  * Users will have personal info stored in database (eg. jobs and profile pictures*) 
  * User Update for profile
* Frontend:
  * User profile paige (basic layout and routing)
  * "Dummy" buttons and modals for UI
### Submitting Questions
* Backend: 
  * Create table for storing questions 
  * Handle CRUD operations for questions
  * Fetching for questions based active/inactive
  * Set questions to inactive based on time-limit*
* Frontend:
  * Create a form for Submitting Questions
  * Create interface for user to manage own questions (set active/inactive) on profile page
  * Submitted questions are ordered by most recently created or set to inactive
### Answers
* Backend: 
  * Api request for questions (recieve a queue of random active questions)
  * Handle creation of answer and associations to questions
* Frontend:
  * Questions will render dynamically based on queue
  * Create form for handling answers
  * Answers form will have 2 timed sections (one to view questions, one to recieve input)
  * Create a "weight" for questions based on time taken to answer (multiplier of time remaining rounded to whole integer)
### *group*Think score
* Backend: 
  * Create score attribute for user
  * Update score when a "answer's question" becomes inactive
  * Users are given positive or negative points based on if their answer falls in the majority
  * Users points are multiplied by their anwers weight
* Frontend:
  * Users recieve notifications when quesitons they have ansered are closed (and what points they lost or recieved)
  * Display users' *group*Think score on their homepage
### Question analytics
* Backend: 
  * Allow fetching for user analytics
  * Overall percent of Yes/No
  * Percent Yes/No based on job type
* Frontend:
  * Show number of users who have answered active questions
  * Show majority answer for questions that are inactive
  * Show analytics for Yes/No distribution

## Bonus MVPs and Features
### Friends
* Create a friends association for users
* Friends only questions
* Friends questions appear first in queue

### Comments and Reports
* add the ability to Comment on a question you answered
* give users the ability to read comments to their questions
* give users the ability to report offensive questions and comments

### Mobile Compatibility
* Create Cynamic mobile friendly UI
* Add swiping for Yes/No on mobile interface

### Dark mode
* because dark mode...


## Technologies
* Backend: MongoDB, Express
* Frontend React Redux
## Challenges
* live updates across users
* managing active state of questions
* creating queues for questions
* creating a timed form for answers
## Group members & work breakdown
- [Liam Williams](https://github.com/Williamsliam23) (backend lead): 
  * MongoDB implementation
  * Relations for users, questions, and answers
  * Manage api requests and interface
- [Jacky Chen](https://github.com/jackychen6825) (frontend lead): 
  * React Redux cycle with state persistance
  * Implement frontend routing, modals, and forms
- [Rober Tetrault](https://github.com/RobertT122) (team lead): 
  * Manage direction and design goals of app
  * Provide support and assistance implenting both frontend and backend goals
