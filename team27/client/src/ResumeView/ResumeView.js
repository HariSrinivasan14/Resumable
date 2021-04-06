import './ResumeView.css'
import React, {useState, useEffect, Suspense} from 'react'
import {NavExplore} from "../NavBar"
import { Container, List } from "semantic-ui-react";
import { Comment, Form, Button as Bt, Header, TextArea } from 'semantic-ui-react'
import Avatar from '@material-ui/core/Avatar';
import {newComment, fetchCommentsData, fetchPostsData} from '../actions/post.js';
import {TextField, OutlinedInput, Box} from '@material-ui/core';
import PdfDisplay from '../PdfDisplay'
// const resource = fetchCommentsData;
const res = fetchPostsData();
const App = ({ children }) => (
    <Container style={{ margin: 20 }}>
      {children}
    </Container>
  );

  let post = null;
  function GetComments(){
      
    // const gotComments = resource(post._id).comments.read(); 
    const cvc = res.posts.read();
    // console.log(gotComments);

         return(
           <div>
              {false ?(
                <h5 className="posts_empty">No Comments Yet</h5>
            ) :(
              cvc.slice(0).reverse().map((i,index)=>{
                    if(i._id == post._id)
                      if(i.comments.length>0){
                        return (i.comments.map((item,index)=>{
                          return <Comment key={index}>
                              <Comment.Avatar src={<Avatar aria-label="user" >
                                                  {item.Username.charAt(0)}
                                                  </Avatar>} />
                              <Comment.Content>
                              <Comment.Author as='a'>{item.Username}</Comment.Author>
                              <Comment.Metadata>
                                  <div>{item.time}</div>
                              </Comment.Metadata>
                              <Comment.Text>{item.text}</Comment.Text>
                              <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                              </Comment.Actions>
                              </Comment.Content>
                          </Comment> 
                      }))}
                      else{
                        <h5 className="posts_empty">No Comments Yet</h5>
                      }
                        
                })
              
            )}
        </div>
          )

}


function ResumeView(props) {
    var username = props.app.state.currentUser;
    console.log(username);
    post = props.location.state.data.post
    const [commentText, setCommentText] = React.useState("");
    const handleCommentChange = (event) => {
      setCommentText(event.target.value);
  };
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);


    const CommentSection = () => (
        
        <Comment.Group>

          <Header as='h3' dividing>
            Comments
          </Header>

          <Suspense fallback={<h2>Loading Comments...</h2>}>
            <GetComments/>
          </Suspense>


          <Form onSubmit={(e)=>{
                
                // setComment(c)
              if(commentText!=''){
                let nComment = {
                    Username: username,
                    text: commentText,
                    time: Date().toLocaleString()
                };
                newComment(post._id, nComment)
                window.location.reload(false);  
              }

          }} reply>
         
            <Bt content='Add Reply'  secondary />
            <Bt color='teal' href="/highlight-feedback"> Add Highlight </Bt>
          </Form>

        </Comment.Group>
      )
    return (
        <div>
         <NavExplore app = {props.app}/>
            <div>
              <div id="resume-image">
                <h1 id="resume-header"> {post.title}</h1>
                <div className="border-box">
                    <p className="pp">{post.desc}</p>
                </div>
                <div className = "border-box">
                  <PdfDisplay url={`http://localhost:5000/files/${post.file}`} width={0.5} ></PdfDisplay>
                </div>
                
              </div>
              <div className = "feedback-box">
              <App>
                <CommentSection/>

              </App>
                {/* <textarea 
                    id="comment-text-area" 
                    value={commentText} 
                    onChange={handleCommentChange}
                /> */}
                <TextField
                        id="comment-textarea"
                        name="Comment"
                        placeholder="Please insert your comment in here"
                        onChange={handleCommentChange}
                        value={commentText}
                        multiline
                        variant="outlined"
                        fullWidth
                />
              </div>



            </div>

        </div>
    )
}

export default ResumeView
