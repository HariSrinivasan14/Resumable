import React, { Component } from 'react'
import "./Explore.css"
import CardComponent from './CardComponent';
import { Grid } from "@material-ui/core"
import {NavExplore} from "./NavBar"
import logo from './images/Logo.png'
import PostBox from './PostBox'
import resume1 from './images/resume_samantha.jpg'
import resume2 from './images/resume_angela.webp'
import resume3 from './images/resume_emma.png'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  let posts = [{
            username: "Samantha Jansen",
            title: "My Resume",
            subtitle: "for Product Manager at Amazon",
            date: "Septermber 23, 2020",
            imagesrc: './images/resume_samantha.jpg',
            image: resume1,
            desc: " help me to fix my resume please!",
            likes: 10
            
        },
        {
            username: "Angela Wilkinson",
            title: "Recent Resume",
            subtitle: "for Administrative Assistant",
            date: "october 11, 2020",
            imagesrc: './images/resume_angela.webp',
            image: resume2,
            desc: "help me to improve my resume!",
            likes: 9
        },
        {
            username: "Emma Hayes",
            title: "My Resume",
            subtitle: "for Information Technology Technician",
            date: "november 23, 2020",
            imagesrc: './images/resume_emma.png',
            image: resume3,
            desc: " help me to fix my resume please!",
            likes: 3
        }
    ]   


export default class Explore extends Component {
    
    render() {
        const images = importAll(require.context('./images', false, /\.(gif|jpe?g|svg|png)$/));
        var user = {
            username: 'Parsa Monfared'
        }
        posts.forEach(function (item, index) {
            
        console.log(item, index);
        });
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
          });

        return (
            <div className="feed">
                <NavExplore/>

                <div className="resumes">
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
                                                post= {{item}}
                                                username= {item.username}
                                                title= {item.title}
                                                subtitle = {item.subtitle}
                                                date= {item.date}
                                                imagesrc= {item.image}
                                                desc = {item.desc}
                                                likes= {item.likes}/>
                                            </Grid> 
                                })}
                    </Grid> 

                    {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                        <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                            Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                            </Button>
                        </Toolbar>
                        </AppBar>
                        <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                        </ListItem>
                        </List>
                    </Dialog>    */}
                </div>
                   
                
                 </div>
            
        )
    }
}
