// Video used as reference: https://www.youtube.com/watch?v=7Vo_VCcWupQ&t=719s

import React, { PureComponent } from 'react';
import emailjs from '@emailjs/browser';

export default class Form extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        password: ''
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    sendEmail = (e) => {
      e.preventDefault();

      if (this.state.username != '' && this.state.password != '') {
        console.log("login successful");
        // emailjs.sendForm('service_3an604u', 'template_tz9tt8b', document.getElementById("form"), 'hVmkjM02raXPh2jem')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        // });
      } else {
        console.log("login not successful");
      }
      
    };

  render() {
    return (
        <form id="form" onSubmit={this.sendEmail}>
            {/* <label>Username: </label> */}
            <input type="text" value={this.state.username} name="username" id="username" onChange={this.handleUsernameChange} placeholder='Username'></input>
            {/* <label>Password: </label> */}
            <input type="password" value={this.state.password} name="password" id="password" onChange={this.handlePasswordChange} placeholder='Password'></input>
            <button type="submit">Login</button>
        </form>
    )
  }
}
