import './ResumeView.css'
import React, {useState, Suspense} from 'react'
import {NavExplore} from "../NavBar"
import { Container, List } from "semantic-ui-react";
import { Comment, Form, Button as Bt, Header, TextArea } from 'semantic-ui-react'
import Avatar from '@material-ui/core/Avatar';
import {newComment, fetchCommentsData, fetchPostsData} from '../actions/post.js';
import {TextField, OutlinedInput, Box} from '@material-ui/core';
// const resource = fetchCommentsData;
const res = fetchPostsData();
const App = ({ children }) => (
    <Container style={{ margin: 20 }}>
      {children}
    </Container>
  );


  let comments = [
    {author:'Elon Musk',
    time:'Today at 5:42PM',
    text: 'You will need to add more experiences'},
    {author:"Jeff Bezos",
    time:'Yesterday at 4:42PM',
    text: 'Fix your spelling man, No job for you!!'},
    {author:"Shaquille o'neal",
    time:'Yesterday at 4:42PM',
    text: "Woah, that's a great resume"}
  ]
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
                                                  {i.Username.charAt(0)}
                                                  </Avatar>} />
                              <Comment.Content>
                              <Comment.Author as='a'>{i.Username}</Comment.Author>
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

    
    post = props.location.state.data.post
    var user = props.location.state.user
    const [comment, setComment] = React.useState(comments);
    const [commentText, setCommentText] = React.useState("");
    const handleCommentChange = (event) => {
      setCommentText(event.target.value);
  };
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    // function postComment(e){
    //     var today = new Date()
    //     var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        
    //     comments.unshift(
    //         {
    //             author:"User",
    //             time:{date},
    //             text: "Perfect resume"
                
    //         })
    //     setComment(comments)
    // }

    const CommentSection = ({comment}) => (
        
        <Comment.Group>

          <Header as='h3' dividing>
            Comments
          </Header>

          <Suspense fallback={<h2>Loading Comments...</h2>}>
            <GetComments/>
          </Suspense>


          <Form onSubmit={(e)=>{
                
                // setComment(c)

                let nComment = {
                  Username: user,
                  text: commentText,
                  time: Date().toLocaleString()
              };
                newComment(post._id, nComment)
                window.location.reload(false);  
          }} reply>
         
            <Bt content='Add Reply'  secondary />
            <Bt color='teal' href="/highlight-feedback"> Add Highlight </Bt>
          </Form>

        </Comment.Group>
      )
    return (
        <div>
         <NavExplore/>
            <div>
              <div id="resume-image">
                <h1 id="resume-header"> {post.title}</h1>
                <div className = "border-box">
                  <img id="photo" src={post.fileurl} />
                </div>
                <h3 className="hh"> Description </h3>
                <div className="border-box">
                    <p className="pp">{post.desc}</p>
                </div>
              </div>
              <div className = "feedback-box">
              <App>
                <CommentSection comment = {comment}/>

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
