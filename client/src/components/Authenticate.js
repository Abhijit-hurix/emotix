import {Redirect} from 'react-router-dom';
import React,{Component} from 'react';
import {connect} from 'react-redux';

class Authenticate extends Component{
  render(){
    console.log('Hi....'+this.props.auth)
    if(!this.props.auth){
      return(
          <Redirect to='/' push/>
        )
    }else{
      return(
          <div></div>
        )
    }
  }
};
function mapStateToProps({auth}){
  return {auth};
};
export default connect(mapStateToProps)(Authenticate);