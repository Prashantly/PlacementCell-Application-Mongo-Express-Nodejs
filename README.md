# Placement Cell Application using MEN(Mongo Express Node)

This project is a Full Stack web application built for Team Career Camp to maintain a database of student interviews. It allows employees to manage student details, course scores, interviews, and results. Additionally, it includes a bonus feature that fetches real available jobs in India for React/Node.js using external APIs.




## Features

* Sign Up and Sign In functionality for employees/Users
* Student Management:
   - List Of Students.
   - Add new Student. 

* Interview Management:
  - List of interviews.
  - Create an interview with a specified date.

* Student's List contains students with the student data along with the list of assigned interviews.

* Company's List contains companies with the list of students in the assigned interview slots along with the results.

* Student Allocation:
   - Assign students to interviews.
   - Remove students from interview.
   - Edit result of student from interview.

* Result Management:
   - View a list of students for each interview.
   - Mark result status for students (PASS, FAIL, On Hold, Didn't Attempt).

* Bonus Feature: External Jobs List:
   - Fetch real available jobs using external APIs.(API Used : Adzuna Api )
   - External links for applying to jobs.

* CSV Export:
   - Download a complete CSV of all the data with the following columns:
      - Student id, student name, student college, student status, DSA Final Score, WebD Final Score, React Final Score, interview date, interview company, interview student result.
      - Includes multiple entries for students based on the interviews they have given.

## Installation

1) Clone the repository: git clone https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs.git

2) Install the dependencies:
    - cd your repository
    - npm install

3) The following environment variables need to be set in order for the application to run properly:

* PORT: The port number for the server (default: 3000).
* SECRET: The session secret key.
* CONN_STR: The MongoDB Atlas URL.

  To set up the environment variables, follow these steps:
   1) Create a config.env file at the root directory of the project.
   2) Open the config.env file and set the values for the environment variables mentioned above.

4) Start the server:
    - npm start

5) Access the application at http://localhost:3000.
    
## Technology Used

* Library
    - axios
    - connect-flash
    - connect-mongo
    - cookie-parser
    - csv-writer
    - dotenv
    - ejs
    - express
    - express-ejs-layouts
    - express-session
    - fast-csv
    - mongoose
    - nodemon
    - passport
    - passport-local
    - Noty

* Framework:
  - Bootstrap, express

* Databse:
  - MongoDB Atlas
 
* Version Control System: Git

* VCS Hosting: GitHub

* Programming Language : Java-script

* Front end : Ejs templates, css

* Runtime Environment: NodeJS

* Development platform : VS Editor


## Application Link
   ### -> Check out Website https://placement-cell-kofk.onrender.com/
## Screenshots

![ss1](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/bbeeaa68-4e28-435f-922e-47e2d03ef5e0)

![ss2](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/095ae8b9-8123-43d6-ae0d-58d82cfbb371)


![ss7](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/9a59e9da-ceb9-42a9-9fd0-289f78bc985d)

![ss3](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/9d4e8d93-466d-4a79-b49e-59c5c591a04a)

![ss4](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/fea31048-be68-4591-8d1f-47dcbf1b591b)

![ss5](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/f23483ae-40f3-4df2-b652-363225627eb8)

![Ss6](https://github.com/Prashantly/PlacementCell-Application-Mongo-Express-Nodejs/assets/99544800/4f79ee55-4c9d-4dad-8fad-29cffd3d5b32)
