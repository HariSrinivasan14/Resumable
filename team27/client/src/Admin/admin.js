import React, {Suspense, useEffect} from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import { styled, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import camera from '../images/camera.png'
import ground from '../images/ground.jpg'
import './admin.css'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Explore from '../Explore/Explore';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {NavExplore} from "../NavBar/NavBar"
import {newPosti, fetchPostsData} from '../actions/post.js';
import {fetchSessions, fetchUsersData} from '../actions/user.js';
import { useHistory } from "react-router"
import ReactScrollableList from '../Components/scroll'

const data = [
  { argument: 1, value: 25 },
  { argument: 3, value: 20 },
  { argument: 5, value: 30 },
  { argument: 7, value: 60 },
  { argument: 9, value: 50 },
  { argument: 11, value: 60 },
];


const drawerWidth = 170;


const useStyles1 = makeStyles((theme) => ({
  root: {
   flex: 1,
    backgroundImage: ground
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 40
  },
  
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  list:{
    // width: "100%",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper
  },
 
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:'#71A89E'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#71A89E'
  },
  list:{
    color: "white",
    marginTop: 10,
    display: 'block'
  },



  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    display: 'flex',
    width: 100,
    height: 100,
    marginTop: 20
  },
  typography: {
    color: "white",
    fontSize: 25,
  },

 
}));
export default function Admin(props) {
  var user_list = [];
  var new_list = [];
  var count = 0;
  console.log("welcome to BHD")
  const classes = useStyles1();
  const history = useHistory();
  useEffect(() =>{
      history.push('/Admin');
  }, [history]);



  const resource = fetchPostsData();
  let count_post = 0;
  let count_user = 0;
  let count_comment = 0;
  function GetPosts(){
    const got_posts = resource.posts.read();
      return(
          <div>
        
              {got_posts.length === 0 ?(
                  <h5 className="posts_empty">No Posts Yet</h5>
              ) :
              (
                              got_posts.map((item,index)=>{
                                count_comment += item.comments.length
                                count_post = count_post +1
                                  })
                      
                                )}
<div style={{ display: 'flex' }}>
            <Grid item xs={3} >
                  <Card id="car1" className="bg-dark text-white" >
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          Total Feedbacks
                        </Typography>
                        <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
                        {count_comment}
                        </Typography>
                     
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image={camera}  />
                    </Hidden>
                  </Card>
               </Grid>
            
          <Grid item xs={3} >
            <Card id="car3" className="bg-dark text-white">
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    Total Posts
                  </Typography>
                  <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
                  {count_post}
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image={camera}/>
              </Hidden>
            </Card>
          </Grid>
          </div>
          </div>
      );
    
}
const resour = fetchUsersData();
	function GetUsers(){ 
		
		const got_posts = resour.posts.read();
		return(
			<div>

				{got_posts.length === 0 ?(
					<h5 className="posts_empty">No Posts Yet</h5>
				) :
				(
				
					
								got_posts.map((item)=>{
									count_user = count_user +1
                  user_list.push(item.Username)
								})
						
							)}
<Grid item xs={3}>
        <Card id="car1" className="bg-dark text-white">
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Total Users
              </Typography>
              <Typography className={classes.typography} variant="subtitle1" color="textSecondary">
              {count_user}
              </Typography>
    
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={camera}  />
          </Hidden>
        </Card>
    </Grid>
    {user_list.map((item)=>
      new_list.push({id: count, content: item}),
      count = count + 1,
      console.log(count)
    )}
 
          <h1 id='head'>Overview</h1>      
          
                        <ReactScrollableList
                        listItems={new_list}
                        heightOfItem={30}
                        maxItemsToRender={20}
                        style={{ color: '#333' }}
                      />

              
			</div>
		);
		
	}
  function printUsers(){
   
  }
    return(
    <div>
        <div  className={classes.root}  >
         
          <NavExplore className="nav" app = {props.app} log = {props.history}/>

          <main className={classes.content}> 

            <h1 id='head'>Overview</h1>

            <div style={{ display: 'flex' }}>
        
            <Suspense fallback={<h2>Loading Posts...</h2>}>
                  <GetPosts/>
            </Suspense>
            

            <Suspense fallback={<h2>Loading Users...</h2>}>
                  <GetUsers/>
            </Suspense>

            </div>
            <Chart
            style={{ marginLeft: 150 , marginTop: 40}}
              data={data}
              width={1200} height={500}
            >
              <ArgumentAxis />
              <ValueAxis />
              
              
              <LineSeries valueField="value" argumentField="argument" />
              
            </Chart>
            


            </main>
   
    </div>
    
    </div>
      )
  } 







