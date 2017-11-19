import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import background1 from '../assets/background1.jpg';
import background2 from '../assets/background2.jpg';
import background3 from '../assets/background3.jpg';
import Authenticate from './Authenticate';
const TopPart = () => 
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <h1 className="header center robHeader">Emotix</h1>
        <div className="row center">
          <h5 className="header col s12 modRobot">A modern robot which understands human imotion</h5>
        </div>
      </div>
    </div>
    <div className="parallax">
      <img src={background3} alt="Unsplashed background img 1">
      </img>
    </div>
  </div>; 
 
const MiddlePart=()=>
  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">Robot 1</i></h2>
            <h5 className="center">Speeds up development</h5>
            <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">Robot 2</i></h2>
            <h5 className="center">User Experience Focused</h5>
            <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">Robot 3</i></h2>
            <h5 className="center">Easy to work with</h5>
            <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
          </div>
        </div>
      </div>
    </div>
  </div>;

const ThiredPart=()=>
    <div>
    <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light">A modern robot which understands human imotion Design</h5>
        </div>
      </div>
    </div>
    <div className="parallax">
      <img src={background3} alt="Unsplashed background img 2">
      </img>
    </div>
  </div>
  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>
    </div>
  </div>
  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light">A modern robot which understands human imotion</h5>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={background3} alt="Unsplashed background img 3"></img></div>
  </div>
  </div>;


const Footer=()=>
  <div>
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">Miko is your child’s new companion — a brain with loads of heart. You will be amazed with how much Miko can do — be it chatting away about the facts of the world or adapting and responding to your child’s needs. Miko has a wide pool of knowledge and an even wider pool of fun</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="brown-text text-lighten-3">Abhijit</a>
      </div>
    </div>
  </footer>
  </div>;

class  Dashboard extends Component{
  static contextTypes={
      router: PropTypes.object
    }
  componentWillMount(){
    console.log(this.props.auth);
  }
  componentWillUpdate(nextProps){
    console.log(nextProps.auth);
      if(!nextProps.auth){
      }
    }  
  render(){
    return( 
      <div className="dashboard">
        <Authenticate/>
        <TopPart/>
        <MiddlePart/>
        <ThiredPart/>
        <Footer/>
      </div> 
      )
  }
};

function mapStateToProps({auth}){
  return {auth};
}
export default connect(mapStateToProps)(Dashboard);