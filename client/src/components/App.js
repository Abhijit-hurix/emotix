import React,{Component} from'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Preloader from './Preloader';
import './preloader.css';
import '../index.css';
const SurveyNew=()=> <div className="surveys">
						<h1>Surveys</h1>
					</div> ;				

class App extends Component{
	componentWillMount(){
		this.props.fetchUser();
	}
	render(){
		console.log(this.props.auth);
		return(
		<div>
			<BrowserRouter>
				<div>
					<Header/>
					<Route exact path="/" component={Landing}/>
					<Route exact path="/about" component={Dashboard}/>
				</div>
			</BrowserRouter>
		</div>
		)
	}
};

function mapStateToProps({auth}){
	return {auth};
};
export default connect(mapStateToProps,actions)(App);