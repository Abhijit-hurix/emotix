import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import robot_1 from '../assets/robot_1.jpg';
import $ from 'jquery';
import DotAnimation from "./DotAnimation";
import SunshineAnimation from './SunshineAnimation';
class Arrows extends Component{
    constructor(props){
        super(props);
        this.state={top:0,height:0};
    };
    moveDown(){
        let self=this,ctop=this.state.top,height=this.state.height;
        if(this.state.top<=-1000){
            return;
        }
        ctop = ctop-Number(height);
         console.log(ctop);
        this.setState({top:ctop});
        $('.landing').animate({top:ctop},500,function(){
                $('.dot').removeClass('active');
                if(ctop==-height){
                   $('#dot_2').addClass('active'); 
                }else{
                    $('#dot_3').addClass('active');
                }
            });  
        
    };
    moveUp(){
        let self=this,ctop=this.state.top,height=this.state.height;
        if(this.state.top>=0){
            return;
        }
        ctop = ctop+Number(height);
        console.log(height);
        console.log(ctop);
        this.setState({top:ctop});
        $('.landing').animate({top:ctop},500,function(){
            $('.dot').removeClass('active');
               if(ctop==-height){
                   $('#dot_2').addClass('active'); 
                }else{
                    $('#dot_1').addClass('active');
                }
            });  
    };
    componentDidMount(){
        let height = $('.landing').css('height').split('px')[0];
        height = Number(height);
        console.log(height);
        this.setState({height:height});
    };
    render(){
        
        return(
            <div className="arrow_container">
                <i className="up_arrow" onClick={this.moveUp.bind(this)} onWheel={this.moveUp.bind(this)}></i>
                <i className="down_arrow" onClick={this.moveDown.bind(this)}></i>
            </div>
        )
    }
};
class DotContainer extends Component{
        render(){
            return(
                <div className="dotContainer">
                    <div className="dot active" id="dot_1"></div>
                    <div className="dot" id="dot_2"></div>
                    <div className="dot" id="dot_3"></div>
                </div>
            );
        }
};
const Raw_1 = () =>{
    return( 
            <div>
            <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <h1 className="header center white-text">Intelligence</h1>
              <div className="row center">
                <h5 className="header col s12 light">India's first Robot</h5>
                </div>
              <div className="row center">
                <div className="btn-large">Log in to meet Miko</div>
              </div>
            </div>
        </div>
        
        </div>
        )
};
const ScrollDown=()=>{
    return(
        <div className="footer">Scroll down</div>
    )
}
const Landing =()=> {
    return(
    <div className="wrapper">
        <div className="landing">
            <div className="raw" id="raw_1">
                <Raw_1/>
                <DotAnimation/>
            </div>    
            <div className="raw" id="raw_2">
                <Raw_1/>
                <DotAnimation/>
            </div>    
            <div className="raw" id="raw_3">
                <Raw_1/>
                <DotAnimation/>
            </div>    
        </div>
        <ScrollDown/>
        <DotContainer/>   
        <Arrows/>
    </div>          
 )
}

export default Landing;