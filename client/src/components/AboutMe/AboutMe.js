// About Me -
// - accepts parent userState as props
// - copies userState to userState 
// - accepts input edits to userState
// - on submit, copies userState to userState
//NOTE: DO NOT CHANGE EMAIL HERE -
// - it is our database key for user

// todo: Style form - convert skills to checkboxes/array input

import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const AboutMe = ({ userState, setUserState }) => {
 
  const devSkillsOptions = ['AJAX', 'Android', 'Apollo Graph QL', 'AWS', 'Azure', 'Bash', 'Bootstrap', 
    'C++', 'CSS3', 'Docker', 'Express', 'Flutter', 'Google Firebase', 'Git', 'GitHub', 'GitHub API', 
    'GitHub Pages', 'Handlebars', 'Heroku', 'HTML5', 'Java', 'JavaScript',  'jQuery', 'Linux Tux', 
    'Materialize', 'Moment.js', 'Mongo DB', 'MySQL', 'Node.js', 'NPM', 'PostgreSQL', 'RasberryPi', 
    'React', 'React Bootstrap', 'React Router', 'Redux', 'Rest API', 'Tailwinds CSS', 'Typescript', 
    'Vue.js', 'Webpack'];
  // const [userState, setuserState] =
  //   useState({
  //     email: '',
  //     firstname: '',
  //     lastname: '',
  //     phone: '',
  //     headshot: '',
  //     aboutMe: '',
  //     devSkills: [],
  //     colorPref: 0,
  //     fontPref: 0,
  //     projects: [],
  //     socialMedia: []
  //   });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  

  // ----------------------------------------------
  // ON LOAD, copy userState to userState     
  // ----------------------------------------------
  // useEffect(() => {
  //   const userData = { ...userState }
  //   if (userData) {

  //     // mock devSkills for testing
  //     // setuserState(userData);
  //     setUserState(userData);
  //   }
  // }, [])

    const [devSkillsChoices, setDevSkillsChoices] = useState([]);
    useEffect(() => {
      setDevSkillsChoices(devSkillsOptions.map(skill => ({name: skill, selected: userState.devSkills.includes(skill)})));
    }, [userState])

    
    // ----------------------------------------------
    // UPDATE FORM FIELD Event Listener 
    // ----------------------------------------------
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserState({ ...userState, [name]: value });
    };

    // ----------------------------------------------
    // UPDATE CHECKBOX CHOICES based on index 
    // ----------------------------------------------
    const updateChoice = (index) => {
      const newDevSkillsChoices = [...devSkillsChoices].map((choice, i) => i === index ? {...choice, selected: !choice.selected} : {...choice});
      setDevSkillsChoices(newDevSkillsChoices);
      const updatedDevSkills = newDevSkillsChoices.filter(choice => choice.selected).map(choice => choice.name);
      setUserState({...userState, devSkills: updatedDevSkills})
    };
    
    // ----------------------------------------------
    // SUBMIT BUTTON event listener
    // -validate form and copy to userState 
    // ----------------------------------------------
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      // console.log("!!!!!", devSkillsChoices)
      // console.log("#######", updatedDevSkills)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setUserState(userState)
    console.log("*******", userState)
  };
  // ----------------------------------------------



  return (
    <section className="bg-green-100 rounded">
      {/* <Accordion noValidate validated={validated} onSubmit={handleFormSubmit}> */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Accordion>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Error updating user "About Me" information.
        </Alert>

          {/*  About Bio Form  */}
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
              className="montserrat-font">
              About Bio
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="raleway-font">
              <Card.Body className="raleway-font">

                {/*  First Name:   */}
                <div className="flex-col w-full">
                  <label className="raleway-font text-gray-700 text-xl" >
                    <span className="text-left">
                      First Name:
                </span>
                  </label>
                  <input 
                    type="text" 
                    placeholder='required first name' 
                    name='firstname'
                    required onChange={handleInputChange} 
                    value={userState.firstname} 
                    className="form-input px-4 py-3 rounded-full w-full mt-1">
                  </input>
                </div>

                {/*  Profile Image Name:   */}
                <div className="flex-col w-full">
                  <label className="raleway-font text-gray-700 text-xl">
                    <span className="text-left">
                      Profile Image Name:(Case Sensitive)
                </span>
                  </label>
                  <input 
                    type="text" 
                    placeholder='required last name' 
                    name='lastname'
                    required onChange={handleInputChange} 
                    value={userState.lastname} 
                    className="form-input px-4 py-3 rounded-full w-full mt-1">
                  </input>
                </div>

                {/*  Profile Image Name:   */}
                <div className="flex-col w-full">
                  <label className="raleway-font text-gray-700 text-xl">
                    <span className="text-left">
                      Profile Image Name:(Case Sensitive)
                </span>
                  </label>
                  <input                     
                    type="text" 
                    placeholder='profile image name' 
                    name='headshot'
                    required onChange={handleInputChange} 
                    value={userState.headshot} 
                    className="form-input px-4 py-3 rounded-full w-full mt-1">
                  </input>
                </div>

                {/*  Phone Number:   */}
                <div className="flex-col w-full">
                  <label className="raleway-font text-gray-700 text-xl">
                    <span className="text-left">
                      Phone Number:
                    </span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder='phone number'
                    name='phone'
                    onChange={handleInputChange} 
                    value={userState.phone} 
                    className="form-input px-4 py-3 rounded-full w-full mt-1">
                  </input>
                </div>

                {/*  About Me Bio:   */}
                <div className="flex-col w-full">
                  <label className="raleway-font text-gray-700 text-xl">
                    <span className="text-left">
                      About Me Bio:
                    </span>
                  </label>
                  <textarea 
                    type="textarea" 
                    placeholder='about me text'
                    name='aboutMe'
                    onChange={handleInputChange} 
                    value={userState.aboutMe}
                      className="form-textarea px-4 py-3 rounded-full w-full mt-1" rows="6">
                  </textarea>
                </div>

              </Card.Body>
            </Accordion.Collapse>

          </Card>

          {/*  Developer Skills List Form  */}
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey="1"
              className="montserrat-font">
              Developer Skills List Options:
          </Accordion.Toggle>
            <Accordion.Collapse eventKey="1" className="raleway-font">
              <Card.Body>
                {devSkillsChoices.map((choice, index) => 
                  <div key={index}>
                  <label>
                    <input type="checkbox" 
                      checked={choice.selected} 
                      onChange={() => updateChoice(index)}/>
                  <span className="text-left">
                    {choice.name}: 
                    </span>
                  </label>
                  </div>
                  // <Form.Check 
                  //   key={index}
                  //   type="switch" 
                  //   id="custom-switch" 
                  //   label={choice.name} 
                  //   checked={choice.selected} 
                  //   onChange={() => updateChoice(index)}
                  // />
                )}

              </Card.Body>
            </Accordion.Collapse>

          </Card>

          <Button disabled={!(userState.firstname && userState.lastname)} type='submit' variant='success'>
            Submit
        </Button>

        </Accordion>
      </Form>

    </section>
  );
};

export default AboutMe;