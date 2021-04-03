import React, { useState } from 'react';
import './profile.css';

import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ground from './images/ground.jpg'
import acount from './images/acount.png'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import SinglePagePDFViewer from "./pdf-viewer";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import {NavExplore} from "./NavBar"
import CardComponent from './CardComponent/CardComponent';
import resume1 from './images/resume_samantha.jpg'
import resume2 from './images/resume_angela.webp'
import resume3 from './images/resume_emma.png'
import "./styles.css";
import Modal from 'react-bootstrap/Modal'
import PostPage from './Postpage/PostPage'
import newPDF from './images/sampleResume.pdf'

let posts = [{
	Username: "Samantha Jansen",
	title: "My Resume",
	subtitle: "for Product Manager at Amazon",
	date: "Septermber 23, 2020",
	imagesrc: './images/resume_samantha.jpg',
	image: resume1,
	desc: " help me to fix my resume please!",
	likes: 10
	
},
{
	Username: "Angela Wilkinson",
	title: "Recent Resume",
	subtitle: "for Administrative Assistant",
	date: "october 11, 2020",
	imagesrc: './images/resume_angela.webp',
	image: resume2,
	desc: "help me to improve my resume!",
	likes: 9
},

] 

  const GreenButton_explore = styled(Button)({
	backgroundColor: '#71A89E',
	borderRadius: '5px',
	marginLeft: '50px',
	marginTop: '15px',
	color: "white",
	Height: '48px',
	minWidth: '225px',
	textTransform: 'capitalize',
	"&:hover": {
		backgroundColor: "#009688",
		color: 'white'
	}
});

 
  const drawerWidth = 170;
  const useStyles2 = makeStyles((theme) => ({
	root: {
		flex: 1,
		backgroundImage: ground
	  },
	  toolbar: theme.mixins.toolbar,
	  content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		
	  },
	  
	 

	  but:{
		top: 10,
		left: 130,
		background: 'linear-gradient(to top, #818b94, #808c9a, #7f8d9f, #808da5, #828daa, #818aa9, #8087a8, #8084a7, #7b7ea0, #767899, #717393, #6c6d8c)',
		borderRadius: 3,
		border: 0,
		color: 'black',
		height: 48,
		marginLeft: 10,
		width: 235,
		color: '#C6D8D7'
	  },
	
	  card: {
		display: 'flex',
		marginTop: 250,
		marginLeft: 50,
		background: 'linear-gradient(to top, #818b94, #808c9a, #7f8d9f, #808da5, #828daa, #818aa9, #8087a8, #8084a7, #7b7ea0, #767899, #717393, #6c6d8c)',
		padding: '0 30px',
	  },
	  cardDetails: {
		width: 50,
		flex: 1,
	  },
	  cardMedia: {
		width: 180,
	  },
	  typography: {
	    textAlign: 'center',
		fontSize: 25,
		color: '#C6D8D7'
	  },
	  pdf:{
		  left: 400,
		  top: 400,
		  width: 400
	  },
	  appBar:{
		  flex: 1
	  },
	  image:{
		  height:60
	  }
}));
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('./images', false, /\.(gif|jpe?g|svg|png)$/));

export default function Profile1(){
	const classes = useStyles2();
	const [modalShow, setModalShow] = React.useState(false);
	const [post, setPost] = React.useState(false);

	function postit(){
		setPost(true);
	    setModalShow(false);
	   
	}
	function afterPost(){
		return(
			<div className="Apps">
				<h4>Resume</h4>
				<SinglePagePDFViewer pdf={newPDF} />
		 	</div>
		   )
	}
	function MyVerticallyCenteredModal(props) {

		return (
		  <Modal 
			{...props}
			size='xl'
			aria-labelledby="contained-modal-title-vcenter"
			centered
		  >
			<Modal.Header closeButton>
			  <Modal.Title id="contained-modal-title-vcenter">
				Post Your Resume
			  </Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<PostPage/>
			</Modal.Body>
			<Modal.Footer>
			  <Button color= 'secondary'  onClick={props.onHide}>Close</Button>
			  <Button color= "primary"  onClick={() => {
				postit();
				afterPost();

				}} >
				Post
			  </Button>
			</Modal.Footer>
		  </Modal>
		);
	  }

		return(
			
		<div className={classes.root} >
		
			<NavExplore/>

			<div id="info">
        		<img className="pic" src={acount} />
						<Card className={classes.card}>
							<div className={classes.cardDetails}>
								<CardContent>
									<Typography className={classes.typography}>First Name, Last Name</Typography>
									<Typography className={classes.typography}>Birthday</Typography>
									<Typography className={classes.typography}>Contacts</Typography>
									<Typography className={classes.typography}>Occupation</Typography>
									<Typography className={classes.typography}>Major/Program</Typography>
									<Typography className={classes.typography}>About</Typography>
									<Typography className={classes.typography} color="primary">More Info</Typography>
									<CardActionArea>
									<Typography className={classes.typography}>...</Typography>
									</CardActionArea>
								</CardContent>
							</div>
						</Card>
				<buttonGroup>
				<GreenButton_explore variant="contained" onClick={() => setModalShow(true)}>
			        {'upload resume'}
		        </GreenButton_explore>		
				</buttonGroup>
				<MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
				</div>
				<div className="oldPosts">
					<h4>Old Posts</h4>
                    <img src={images['images/landingImage.png']}/>
                    <Grid container 
                        spacing={10}
                        p = {1}
                        direction="column"
                        alignItems="center"
                        justify="flex-end">
                                 {posts.map((item,index)=>{
                                    return <Grid item xs = {12}>
                                                <CardComponent 
                                                post= {item}
                                                />
                                            </Grid> 
                                })}
                    </Grid> 
				</div>
					{post ? afterPost(): null}
				</div>
			

				
	
			
		)
	}


