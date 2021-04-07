import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from 'react-router-dom';
import PdfDisplay from '../PdfDisplay'
import pdf from '../images/sampleResume.pdf'
import {getFileById} from '../actions/files'
import {updateLikes, deletePost} from '../actions/post.js';
import { Document, Page, pdfjs } from 'react-pdf';
import { get } from 'mongoose';
import "./CardComponent.css"
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 500,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    height: "100%",
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: '#71A89E',
  },
}));


function CardComponent({post, user}){
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const [isLiked, updateLike] = useState(false);
  const [count, setCount] = useState(post.likes);
  const [color, setColor] = useState('grey');
  const [open, setOpen] = React.useState(false);
  let likee;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseYes = () => {
    setOpen(false);
    deletePost(post._id);
    window.location.reload(false);
  };
  const handleCloseNo = () => {
    setOpen(false);
  };
  const handleLike = () => {
    if (!isLiked) {
      updateLike(true);
      setCount(count+1);
      setColor('red');
      likee = 1
      updateLikes(likee, post._id)

    }else{
      updateLike(false);
      setCount(count-1);
      setColor('grey');
      likee = -1
      updateLikes(likee, post._id)
    }
  };
  const handleDelete= (post) => {
    // <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) } } />
    handleClickOpen()
  };
  function add_delete(user, post, classes){
    if(user === 'admin'){
      return(
        <IconButton onClick={() => handleDelete(post)} aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
      )
    }
  }
  return (
    <div>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" className={classes.avatar}>
            {post.Username.charAt(0)}
          </Avatar>
        }
        action={
          add_delete(user.user, post, classes)
        }
        title= {post.title}
        subheader= {post.subtitle}
      />
      <Link to={{pathname: "/ResumeView", state:{user: user, data: {post}}}} >

        <CardActionArea className="preview">
   
            <PdfDisplay url={`http://localhost:5000/files/${post.file}`} width={0.3} ></PdfDisplay>
          
        </CardActionArea>
        
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className = "like" aria-label="add to favorites" 
                    onClick={() => handleLike()}>
          <FavoriteIcon style={{ color: color }}/>
        </IconButton>

      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
           {count} likes  {post.comments.length} comments
        </Typography>
      </CardContent>
    </Card>

    <Dialog
        open={open}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post!?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNo} color="primary">
            no
          </Button>
          <Button onClick={handleCloseYes} color="primary" autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
}
export default CardComponent;