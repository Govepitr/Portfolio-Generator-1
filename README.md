
<h1 align="center">Web-Developer Portfolio Generator</h1>
  <h2 align="center">University of Arizona Web Developers Bootcamp - Group Project 3</h2>

  <p align="center">
    <img src="https://img.shields.io/github/repo-size/Portfolio-Generator/Portfolio-Generator?style=plastic" />
    <img src="https://img.shields.io/github/languages/count/Portfolio-Generator/Portfolio-Generator?style=plastic" />
    <img src="https://img.shields.io/github/last-commit/Portfolio-Generator/Portfolio-Generator?style=plastic" />
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/React-9cf" />
    <img src="https://img.shields.io/badge/-TailwindCSS-blueviolet" />
    <img src="https://img.shields.io/badge/-Node.js-green" />
    <img src="https://img.shields.io/badge/Express-brightgreen" />
    <img src="https://img.shields.io/badge/JWT-orange" />
    <img src="https://img.shields.io/badge/MongoDB-darkgreen" />


<img src="https://img.shields.io/badge/graphql-maroon" />
    <img src="https://img.shields.io/badge/-Bcrypt-darkgrey" />
    <img src="https://img.shields.io/badge/-Dotenv-gold" />
   
   
    
  </p>
  
  ## Description
Portfolio Generator collects all the information you need to create a high-quality web-based developer's portfolio and generates the html and css files to deploy to GitHub Pages or other website.  

Information is stored in a mongo database on Heroku so it can be retrieved and edited at any time.

The generated portfolio includes:  
 * About Me with optional photo and short bio
 * Developer's skill list
 * Projects you've worked on, including thumbnail images, live links, video walkthrough link, and GitHub repository information
 * Social media contact information 


:loop: Here's a GIF showing the a quick view of the app:

![demo](./assets/assets/images/PortDemo.gif)

## Table of Contents

- [User Story](#user)
- [License](#license)
- [Live Site](#live)
- [GitHub Repository](#github)
- [instructions](#instructions)
- [Contributors](#contributors)
- [Questions](#questions)

## User Story: 

As a professional working in the tech industry, I need a high-quality web-based portfolio that will make it easy for employers to get to know me and my skills.

When I run the Portfolio-Generator, I see a brief introduction and the option to either Sign up or Login.

Once I sign up or login, I have access to  Portfolio Generator sections for entering my Developer Information, Social Media Links, and a list of Projects I've worked on. 

When I expand the Developer Information, I can specify my (required) name, (required) profile image, phone number, and a short, required "About Me" biography, as well as selecting from a large list of optional developer skills (and icons) that to include in the portfolio.

When I expand the Social Medial section, I can optionallyl provide account urls for a variety of social media platforms.

When I expand the Projects section, I see a list of any projects that were previously specified, together with a button to add a new project. 

When I click ``Add New Project``, a form expands that lets me enter a (required) title, (required) thumbnail image filename, link to deployed application, github repository link, video link, organization, and (required) short description.

When I click ``Save`` in any of the sectons, the information in that area is written to a mongoDB database so it it can be retrieved and edited at a later date.

When I click ``Create Portfolio Zip File`` the HTML and css files for my portfolio are downloaded to my computer.

When I unpack the zip files, I place  ``index.html`` in a directory of my choosing, place the ``styles.css`` in an ``assets/css`` subdirectory, and place any images I've included in the project in an ``assets/images`` subdirectory so they can be loaded propertly by the html file.

When I load my ``index.html`` file into a web browser, I see a single-page portfolio with "About Me" and "Contact" information, social media links, and a list of projects that includes both image thumbnails and application links. 

## Live Site:

> https://dksv-portfolio-generator.herokuapp.com/

## GitHub Repository Link:

>https://github.com/Portfolio-Generator/Portfolio-Generator

## Instructions:

Create a user-account (or login) and follow the directions included in the application.   

## License

![badge](https://img.shields.io/badge/license-MIT-success)
<br />
This application is covered by the MIT license.

## 👥Contributors:

- :octocat: [Kashay Arbelo](https://github.com/KashCodes)<br /> - _Project Manager, UX/UI Design, HTML, CSS, Template design & generation, JavaScript/JSX, QA, Presentation (Design & Front-End)_
- :octocat: [Dan Arbelo](/https://github.com/Govepitr)<br /> - _UX/UI Design, HTML, CSS, JavaScript/JSX, QA, Presentation (Design & Front-End)_
- :octocat: [Stephanie Giel](https://github.com/SGiel)<br /> - _Functional Design, JavaScript/JSX, React, Apollo/GraphQl/Mongoose API, QA, Presentation (Front & Back-End)_
- :octocat: [Vicky Loebel](https://github.com/vloebel)<br /> - _Functional Design,  JavaScript/JSX, React, Database Design & Integration, JWT Authentication, Documentation (Front-end/Back-End)_



## Questions

🔧 Please feel free reach out to us should you have any questions, comments, or concerns. Please connect with us through GitHub.<br />
