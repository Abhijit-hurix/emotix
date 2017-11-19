const Landing =()=> {
	return(
	<div className="landing">
		<div className="section no-pad-bot" id="index-banner">
		    <div className="container">
		      <h1 className="header center white-text">Emotional Intelligence</h1>
		      <div className="row center">
		        <h5 className="header col s12 light">India's first companion robot</h5>
		     	</div>
		      <div className="row center">
		        <Link to="/surveys"id="download-button" className="btn-large waves-effect waves-light orange">Meet Miko</Link>
		      </div>
		    </div>
  		</div>
  		<div className="container">
    		<div className="section">
      			<div className="row">
        			<div className="col s12 m6">
          				<div className="icon-block">
            			<h2 className="center"><i className="material-icons">About Miko</i></h2>
						<p className="light white-text">Miko is your child’s new companion — a brain with loads of heart. You will be amazed with how much Miko can do — be it chatting away about the facts of the world or adapting and responding to your child’s needs. Miko has a wide pool of knowledge and an even wider pool of fun</p>
          				</div>
        			</div>
					<div className="col s12 m6">
          				<div className="icon-block">
            				<h2 className="center light-blue-text"><i className="material-icons">Miko Intelligence</i></h2>
							<p className="light white-text">Miko is your child’s new companion — a brain with loads of heart. You will be amazed with how much Miko can do — be it chatting away about the facts of the world or adapting and responding to your child’s needs. Miko has a wide pool of knowledge and an even wider pool of fun</p>
          				</div>
        			</div>
        		</div>
        	</div>
        </div>
        <Arrows/>
        <div className="footer">Scroll down</div>
    </div>    		
 )
}