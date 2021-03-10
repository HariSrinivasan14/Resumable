import React, { useState } from 'react'
import "./Explore.css"
import CardComponent from './CardComponent';
import { Grid } from "@material-ui/core"
import {NavExplore} from "./NavBar"
import PostPage from './PostPage'
import resume1 from './images/resume_samantha.jpg'
import resume2 from './images/resume_angela.webp'
import resume3 from './images/resume_emma.png'
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import {styled} from '@material-ui/core';




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


function Explore(){
    const images = importAll(require.context('./images', false, /\.(gif|jpe?g|svg|png)$/));
        var user = {
            username: 'Parsa Monfared'
        }
        const [modalShow, setModalShow] = React.useState(false);

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
        function postit(){
            setModalShow(false)
            posts.unshift(
                {
                    likes: 0,
                    username: "user",
                    title: "my best resume",
                    subtitle: "best resume ever",
                    date: "march 10, 2021",
                    imagesrc: './images/resume_emma.png',
                    image: resume3,
                    desc: " I made this resume for software engineering in google."
                    
                }

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
                  <Button color= "primary"  onClick={postit}>
                    Post
                  </Button>
                </Modal.Footer>
              </Modal>
            );
          }

    return(
            <div className="feed">
                <NavExplore/>
                {/* <Button className='button_post' variant="primary" onClick={() => setModalShow(true)}>
                    Create a Post
                </Button> */}
                <GreenButton_explore variant="contained" onClick={() => setModalShow(true)}>
			        {'create post'}
		        </GreenButton_explore>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
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
                                                post= {item}
                                                />
                                            </Grid> 
                                })}
                    </Grid> 

                </div>
                   
                
                 </div>
            
        
    )
}
export default Explore;
