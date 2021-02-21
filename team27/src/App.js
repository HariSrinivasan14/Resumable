import logo, { ReactComponent } from './logo.svg'; 
import React, { useDebugValue } from 'react';
import './App.css';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import buttonGroup from '@material-ui/core/ButtonGroup'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createMuiTheme, styled } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system'
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

const useStyles = makeStyles({
  
  drawer: {
      backgroundColor: "black",
      width: 500,
      marginTop: 500
}});




const Drawer = () =>{
  const classes = useStyles();
  return(
      <MUIDrawer variant="permanent" className={classes.drawer} >
    <List>
      {["overview         ", "Users", "Posts"].map((text, index) => (
      <ListItem button key={text}>
        <ListItemText primary={text}/>
      </ListItem>
      ))}
    </List>
  </MUIDrawer>
);
};

const typo = styled(Typography)({
  position: "relative",
  marginTop : 500,
  marginLeft : 500
});


class App extends React.Component {

  render(){
    return(
      <div>
        

        <AppBar>
        <Toolbar>
          <MyButton2
          variant="outlined">
            Admin
          </MyButton2 >

          <MyButton variant="outlined">
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


        <Drawer/>

        <typo>
          hi
        </typo>



        
      </div>

      )
  }
}






export default App;


