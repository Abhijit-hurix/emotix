import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments'

class Header extends Component{
	renderContent(){
		switch(this.props.auth){
			case null:
				return
			case false:
				return (
					<li><a className="google" href="/auth/google">Login with Google</a></li>);
			default:
				return [
						<li key="1" className="google"><a href="/api/logout">Logout</a></li>
						];
		}
	}

	render(){
		console.log(this.props.auth);
		return(
			<nav>
				<div className="nav-wrapper">
					<Link to={this.props.auth?'/surveys':'/'} className="left brand-logo">
						Emotix
					</Link>
					<ul className="right">
						<li>
						<Link to={this.props.auth?'/about':'/'} className="google">
						About
						</Link>
						</li>
						{this.renderContent()}
					</ul>
				</div>
			</nav>
			);
	}
}

/*function mapStateToProps({state}){
	return {auth : state.auth};
}*/

//Used destructuring
function mapStateToProps({auth}){
	return {auth};
}
export default connect(mapStateToProps)(Header);