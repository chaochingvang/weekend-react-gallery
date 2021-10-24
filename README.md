![License](https://img.shields.io/github/license/chaochingvang/weekend-react-gallery.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/chaochingvang/weekend-react-gallery.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/chaochingvang/weekend-react-gallery.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/chaochingvang/weekend-react-gallery.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/chaochingvang/weekend-react-gallery.svg?style=for-the-badge)
    
# Creature Gallery List

## Table of Contents

- [Creature Gallery List](#creature-gallery-list)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Screenshots](#screenshots)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)
  - [Contacts](#contacts)

## Description

This project allows for users to add, delete and update items on the DOM using Javascript and React with REST methods to send data back and forth between the client-side, server-side and database. This process is shown in the project by starting off with a list of mythical creatures that are imported from a SQL database. The user can interact with the DOM by adding in their own new mythical creatures that will immediately reflect onto the DOM. The user can also choose to delete a mythical creature by clicking on a button. In doing so, it will also remove the data from the database. Last but not least, the user will have the ability to update the like count and have it reflected through the DOM and database. 

## Screenshots

<img src="" />## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>

## Getting Started

Aside from having the necessary softwares to be able to run the code, no further background information is need to observe and use the functionalities of this project.  

### Prerequisites

Softwares used in creating this project includes:

- Visual Studio Code
- PostgreSQL
- Postico
- Postman

The project will require alterations and possibly additional lines of codes if used with softwares that are not listed above. 

### Installation

To run this project, the user should fork the repository onto their own GitHub repository. In the user's repository, go ahead and copy link and clone onto local system. The project will then be installed using npm by navigating to folder:

- $ cd ../weekend-react-gallery
- $ npm install

Create a local sql database using PostgreSQL with the provided database.sql file. Using different database systems may require the user to alter or add additional lines of codes in the project to reflect the example database provided. 

To start up the project, simply run the npm command lines of:

- npm run server
- npm run client

## Usage

Once the project is up and running, the user should be redirected to the browser with the project loaded. If not, open up a browser and enter in the url: 
- localhost:3000

While on the page, the user will see a list of mythical creatures along with images of the creatures. When the user clicks on an image, the webpage will update and show a comment about that creature. To revert back to the image, simply click the comment or the container it is in.  

To add a new creature, the user must input in the information listed by the input fields. To submit the form, the user must click on the submit button after entering all the necessary information. If any information is left blank, the user will be alerted and instructed to enter in the missing information. Once corrected and submitted, the creature along with the image url will be shown at the bottom of the webpage.

Each creature has a like count that starts off at 0. The user can click on the like button to increase its like count. This is reflected directly on the browser and in the database.

To delete a creature, the user will click on the delete button of the particular creature they wish to delete. In doing so, the user will be prompted to confirm if they wish to delete the selected creature. If the user clicks no, it will redirect the user back to the page and leave the creature on the webpage. If the user clicks yes, the creature along with its image will be deleted from the webpage and database.



## License

<a href="https://choosealicense.com/licenses/unlicense/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/unlicense.svg" height=40 />The Unlicense</a>

## Acknowledgements

The project was made possible with the help of friends, families and especially with the help of the Solinas Cohort at Prime Digital Academy.




README.md created using template created by John Turner.
<a href="https://johnturner4004.github.io/readme-generator/" />

## Contacts

<a href="https://www.linkedin.com/in/chaochingvang"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:chaoching.vang@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>