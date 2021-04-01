import './ResumeView.css'
import React, {useState} from 'react'
import {NavExplore} from "../NavBar"
import { Container, List } from "semantic-ui-react";
import { Comment, Form, Button as Bt, Header, TextArea } from 'semantic-ui-react'
import Avatar from '@material-ui/core/Avatar';
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




function ResumeView(props) {
    const post = props.location.state.data.post
    console.log(post.title)
    const [comment, setComment] = React.useState(comments);
    const [commentText, setCommentText] = React.useState("");
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);

    function postComment(e){
        var today = new Date()
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // console.log(e.target.children)
        // const text = document.getElementsByClassName("field");
        // console.log(text)
        
        comments.unshift(
            {
                author:"User",
                time:{date},
                text: "Perfect resume"
                
            })
        setComment(comments)
    }
    const CommentSection = ({comment}) => (
        
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>
      
          {console.log(comment)}
          {comment.map((item,index)=>{
                                          return <Comment key={index}>
                                              <Comment.Avatar src={<Avatar aria-label="user" >
                                                                  {item.author.charAt(0)}
                                                                  </Avatar>} />
                                              <Comment.Content>
                                              <Comment.Author as='a'>{item.author}</Comment.Author>
                                              <Comment.Metadata>
                                                  <div>{item.time}</div>
                                              </Comment.Metadata>
                                              <Comment.Text>{item.text}</Comment.Text>
                                              <Comment.Actions>
                                              <Comment.Action>Reply</Comment.Action>
                                              </Comment.Actions>
                                              </Comment.Content>
                                          </Comment> 
                                      })}
      
          
          <Form onSubmit={(e)=>{
                let c =   [{
                    author:"User",
                    time:"today",
                    text: commentText
                }, ...comment]
                
                setComment(c)
                console.log(c)
                    
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
                  <img id="photo" src={post.image} />
                </div>
                <h3 className="hh"> Description </h3>
                <div className="border-box">
                    <p className="pp">{post.desc}</p>
                </div>
              </div>
              <div className = "feedback-box">
              <App>
                <CommentSection comment = {comment}/>
                <textarea 
                  id="comment-text-area" 
                  value={commentText} 
                  onInput={(e)=> setCommentText(e.target.value)}/>
              </App>
              </div>
            </div>
            
        </div>
    )
}

export default ResumeView
