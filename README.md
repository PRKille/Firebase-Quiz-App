# Quiz Creator

#### Firestore/React project, May 4, 2020

#### By: Patrick Kille, Geoff Goetz, Michelle Morin

## Description

_This application is a quiz creator, to create and take surveys._

### Specification user stories:
* A user should be able to create, update and delete a survey. 
* All surveys should be stored in the database.
* A user should be able to fill out and submit surveys. Survey results should be submitted to the database.
* A user should be able to sign up, sign in, and sign out.
* A user should have their own dashboard which lists the surveys they've created.

### Component Tree
![component tree](/componenttree.png)

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* ``/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git with the following command:_
* ``brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``brew install node``

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

### Clone this repository

_Enter the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``cd desktop``
* ``git clone {url to this repository}``
* ``cd quiz-creator``

_Confirm that you have navigated to the quiz-creator directory (e.g., by entering the command_ ``pwd`` _in Terminal)._
_Next, install npm at the project's root directory by entering the following commands in Terminal (macOS) or PowerShell (Windows):_
* ``npm install``
* ``npm start``

_To view/edit the source code of this application, open the contents in a text editor or IDE of your choice (e.g., to open the project in Visual Studio Code, enter the command_ ``code .`` _in Terminal (macOS) or PowerShell (Windows))._

## Technologies Used
* Git
* CSS
* JavaScript
* JSX
* React
* Create-React-App
* Webpack
* npm
* ESLint
* Firebase
* Firestore database

### License

MIT license

Copyright &copy; 2020 Michelle Morin, Patrick Kille, Geoff Goetz