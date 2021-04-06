import React, { useState, useEffect, Suspense } from 'react'
import { useHistory } from "react-router"
import "./Explore.css"
import CardComponent from '../CardComponent/CardComponent';
import { Grid } from "@material-ui/core"
import {NavExplore} from "../NavBar"
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import {styled} from '@material-ui/core';
import Dropzone from '../Dropzone/Dropzone';
import {TextField, OutlinedInput, Box} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {newPosti, fetchPostsData} from '../actions/post.js';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resource = fetchPostsData();
const inputBoxTheme = createMuiTheme({
	overrides: {
		MuiOutlinedInput: {
			root: {
				borderRadius: '10px',
				Textcolor: 'black',
				Height: '48px',
				minWidth: '500px',
				textTransform: 'capitalize',
				marginLeft: '50px',
				marginBottom: '10px',
				'&$focused $notchedOutline': {
					borderColor: '#009688',
					borderWidth: '2px',
				},
				"&:hover $notchedOutline": {
					borderColor: '#71A89E'
				}
			},
			notchedOutline: {
				borderColor: '#71A89E'
			},
		},
	}
});

function GetPosts(user){
    const got_posts = resource.posts.read();
    console.log(got_posts)
    return(
        <div className="resumes">

            {got_posts.length === 0 ?(
                <h5 className="posts_empty">No Posts Yet</h5>
            ) :
            (
               
                    <Grid container 
                        spacing={10}
                        p = {1}
                        direction="column"
                        alignItems="center"
                        justify="flex-end">
                            {got_posts.slice(0).reverse().map((item,index)=>{
                                if(item.Username != user.Username){
                                return (<Grid key={index} item xs = {12}>
                                            <CardComponent 
                                                post= {item}
                                                user = {user.Username}
                                            />
                                        </Grid>)}
                                         
                                })}
                    </Grid>
                        )}

        </div>
    );
    
}
function Explore(props){
    const username = props.app.state.currentUser;
    const history = useHistory();
    useEffect(() =>{
        history.push('/Explore');
    }, [history]);
    const user = {
        Username: username
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

        function MyVerticallyCenteredModal(props) {
            const [file, setFile] = React.useState('');
            const handleFileChange = (f) => {
                console.log(f);
                setFile(f);
            };
            const [title, setTitle] = React.useState('');
            const handleTitleChange = (event) => {
                setTitle(event.target.value);
            };
            
            const [subtitle, setSubtitle] = React.useState('');
            const handleSubtitleChange = (event) => {
                setSubtitle(event.target.value);
            };
        
            const [desc, setDesc] = React.useState('');
            const handleDescChange = (event) => {
                setDesc(event.target.value);
            };
            function postit(){
                if(title == ''){
                    console.log("empty title");
                    
                }else{
                    setModalShow(false)
                    // console.log(pdfjs.getDocument(file.preview))


                    let data = new FormData()
                    data.append('likes', 0);
                    data.append('Username', user.Username);
                    data.append('title', title);
                    data.append('subtitle', subtitle);
                    data.append('file', file);
                    data.append('fileUrl', file.preview);
                    data.append('date', Date().toLocaleString());
                    data.append('desc', desc);
                    data.append('comments', [])
                    
                    // window.localStorage.setItem('file', file)
                    newPosti(data);

                    window.location.reload(false);
                    window.location.reload(false);

                }

                
            }
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
                <div>
            
            {/* <NavExplore /> */}
            {/* <div className = 'postResume'>
                <Dropzone />
            </div> */}

            <div className='Title_input'>     

                <OutlinedInput
                    id="outlined-name"
                    name="Title*"
                    value={title}
                    placeholder="Title"
                    onChange={handleTitleChange}
                    variant="outlined"/>    
               

            </div>
            <div className='Subtitle_input'>
                <Box width={500}>
                    <TextField
                        id="subtitle-textarea"
                        name="Subtitle"
                        value={subtitle}
                        placeholder="Subtitle"
                        onChange={handleSubtitleChange}
                        variant="outlined"
                        fullWidth
                    />
                </Box>

            </div>
            <div className='Desc_input'>
                <Box width={500}>
                    <TextField
                        id="desc-textarea"
                        name="Description"
                        placeholder="Description"
                        onChange={handleDescChange}
                        value={desc}
                        multiline
                        variant="outlined"
                        fullWidth
                    />
                </Box>

            </div>
           <Dropzone onImageDrop={handleFileChange}/>


        </div>
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
                <NavExplore app = {props.app}/>
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
                <Suspense fallback={<h2>Loading Posts...</h2>}>
                    <GetPosts user={user}/>
                </Suspense>
                   
                
            </div>
            
        
    )
}
export default Explore;