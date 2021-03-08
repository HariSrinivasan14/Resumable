import React, { Profiler } from 'react';
import './profile.css';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import resume from './resume.png'
import ground from './ground.jpg'
import acount from './acount.png'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import SinglePagePDFViewer from "./pdf-viewer";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./resume.pdf";

import "./styles.css";



const MyButton = styled(Button)({
	marginRight: 50,
	color: "white",
  });
  
  const MyButton2 = styled(Button)({
	marginRight: 50,
	marginLeft: 200,
	color: 'white',
  });
  
  const MyButton3 = styled(Button)({
	position: "absolute",
	right: 30,
	color: 'white',
	width: 120,
	
  });
  const MyButton4 = styled(Button)({
	position: "absolute",
	right: 200,
	color: 'white',
	width: 120,
	
  });
  const MyButton5 = styled(Button)({
	
	position: "absolute",
	right: 360,
	color: 'white',
	width: 150,
  });

 
  const drawerWidth = 170;
  const useStyles2 = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundImage: ground
	  },
	  toolbar: theme.mixins.toolbar,
	  content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		
	  },
	  
	 

	  but:{
		top: 10,
		background: '#83C2B7',   
		borderRadius: 3,
		border: 0,
		color: 'black',
		height: 48,
		marginLeft: 10,
		width: 235
	  },
	
	  card: {
		display: 'flex',
		width: 400,
		marginTop: 400,
		marginLeft: 20,
		background: 'linear-gradient(to top, #e9e9ff, #d6e4fb, #c4e0f3, #b4dbe7, #a8d6d8, #a1d0cd, #9bcac2, #96c4b7, #8dbdb1, #84b6aa, #7aafa4, #71a89e)',		padding: '0 30px',
	  },
	  cardDetails: {
		flex: 1,
	  },
	  cardMedia: {
		width: 180,
	  },
	  typography: {
	    textAlign: 'center',
		fontSize: 25,
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


export default function Profile1(){
	const classes = useStyles2();
		return(
			
		<div className={classes.root} >
			<AppBar className={classes.appBar} style={{ backgroundColor:'#71A89E'}} position="fixed" >
          		<Toolbar>
				  <img className={classes.image} src={resume} />
						<MyButton2 variant="outlined"  href="/">
							Admin
						</MyButton2 >

						<MyButton variant="outlined" >
							Feed
						</MyButton>

						<MyButton variant="outlined">
							Help
						</MyButton>

						<MyButton3 variant="outlined">
							Log out
						</MyButton3>

						<MyButton4 variant="outlined">
							Ban User
						</MyButton4>

						<MyButton5 variant="outlined">
							Unban User
						</MyButton5>
				</Toolbar>
			</AppBar>

			<div >
        		<img className="pic" src={acount} />
				<Grid item xs={12} md={6}>
					<CardActionArea component="a" href="#">
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
								<Typography className={classes.typography}>...</Typography>
								</CardContent>
							</div>
						</Card>
					</CardActionArea>
				</Grid>
				<buttonGroup>
					<Button className={classes.but} variant="outlined" href="Profile">
						Add New Resume
					</Button>
					<Button className={classes.but} variant="outlined">
						Edit Profile
					</Button>
				</buttonGroup>

          	</div>
		 <div className="App">
			 <h4>Resume</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
		  </div>
		
			</div>
			

				
	
			
		)
	}


