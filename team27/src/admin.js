import logo, { ReactComponent } from './logo.svg'; 
import React, { useDebugValue } from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import buttonGroup from '@material-ui/core/ButtonGroup'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import { withRouter } from "react-router-dom"
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemText
} from '@material-ui/core' 
import Typography from '@material-ui/core/Typography'
import resume from './resume.png'
import TextField from '@material-ui/core/TextField';
import { palette, spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import graph from './graph.png'
import './admin.css'
import Profile from './profile';





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



const Drawer = () =>{
  return(
      <MUIDrawer variant="permanent">
        <List style={{ backgroundColor:'#71A89E', top: 65, color: 'white' }}>
          {["overview", "Users", "Posts"].map((text, index) => (
          <ListItem button key={text}>
             <ListItemText primary={text}/>
          </ListItem>
          ))}
        </List>
      </MUIDrawer>
);
};

const defaultProps = {
  bgcolor: '71A89E',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '11.2rem', height: '1.5rem' },
  padding: 1,
  marginBottom: 0,
  marginLeft: 5,
  
};
const default1Props = {
  bgcolor: '71A89E',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '2rem', height: '1.5rem' },
  padding: 1,
  marginBottom: 0,
  marginLeft: 25,
  
  
};


class App extends React.Component {
  render(){
    return(
      <div>
        

        <AppBar style={{ backgroundColor:'#71A89E'}}>
          <Toolbar  >
          <img className="landingPic" src={resume} />
            <MyButton2 variant="outlined">
              Admin
            </MyButton2 >

            <MyButton variant="outlined" href="Profile">
              Explore
            </MyButton>

            <MyButton variant="outlined">
              Help
            </MyButton>

            <MyButton3 variant="outlined">
              Log out
            </MyButton3>
           
          </Toolbar>
        </AppBar>

        <h1>Overview</h1>
        <div >

            <Box style={{ marginLeft: 200 }} 
              display="flex" 
              justifyContent="left"
              >
              <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Feedbacks</Box>
              <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Posts</Box>
              <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Current Users</Box>
              <Box alignContent="center" borderRadius={16} {...defaultProps}>Number of Total Users</Box>
            </Box> 
            <Box style={{ marginLeft: 80 }} display="flex" justifyContent="left">
              <Box alignContent="center" borderRadius={16} {...default1Props}>55</Box>
              <Box alignContent="center" borderRadius={16} {...default1Props}>255</Box>
              <Box alignContent="center" borderRadius={16} {...default1Props}>89</Box>
              <Box alignContent="center" borderRadius={16} {...default1Props}>190</Box>
            </Box>
            <img className="graphPic" src={graph} />
         
        </div>
        


       

        


        
      </div>

      )
  }
}






export default App;


