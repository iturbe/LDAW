import React, {Component} from 'react';
import Top from './Top'
import Home from './Home'
import { Link } from 'react-router-dom'

var pwd = null;
var useremail = null;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const name = target.name;
  // }

  redirect(email){

  }

  handleSubmit(event) {
    event.preventDefault();
    
    // query de autenticación
    pwd = document.getElementById("pwd").value;
    useremail = document.getElementById("email").value;

    console.log("p: " + pwd)
    console.log("e: " + useremail)

    var data = "password=" + pwd;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        
        // el usuario fue autenticado
        console.log(this.responseText);

        // TODO: NAVEGAR AL HOMEPAGE PERO PASANDO COMO PARÁMETRO EL CORREO DEL USUARIO!

        // mover a homepage
        window.location = '/home';

      } else {
        // el usuario no fue autenticado
        alert("That combination of email and password doesn't match, please try again!");
      }
    });

    xhr.open("POST", "http://ship-it.wake.mx/api/users/" + encodeURIComponent(useremail) + "/sessions");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "b3181889-0119-4caf-91a5-ef5074cb49ce");

    xhr.send(data);
  }

  render() {
    return (
      <div class="container">
        <h2>Ship it!</h2>
        <h4>Ship it is actually in beta phase and has only shipping routes to CDMX, MTY and GDL.</h4>
        <h4>Enjoy shipping!</h4>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email"></input>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password"></input>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login
