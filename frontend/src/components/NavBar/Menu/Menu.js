import React, {PropTypes} from 'react';
import { stack as Menu } from 'react-burger-menu';
import axios from 'axios';

import "./Menu.css";

export default class MenuLink extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  logout = () =>{
    axios.get('/auth/logout')
      .then( (response) => {
        console.log("AJAX: Logged out @ '/auth/logout'");
        window.location.href = "/";
      })
      .catch((error)=> {
        console.log(error);
      });
    }

  render() {
    return (
      <Menu>
        <img className="SquirrelLogoWhite" src="https://image.ibb.co/bOwhza/Squirrel_Logo_White.png" alt="Squirrel_Logo_White"></img>
        <hr/>
        <a href="/" style="display: block; outline: none;" onClick={this.logout}>
          <i className="fa fa-fw fa-sign-out"></i>
          <span className="menuLink">Log out</span>
        </a>
        <hr/>
      </Menu>
    );
  }
}

MenuLink.propTypes = {
};
