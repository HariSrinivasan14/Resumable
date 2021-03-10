import React, { useState } from 'react';
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



function CardComponent({post}){
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const [isLiked, updateLike] = useState(false);
  const [count, setCount] = useState(post.likes);
  const [color, setColor] = useState('grey');

  const handleLike = () => {
    if (!isLiked) {
      updateLike(true);
      setCount(count+1);
      setColor('red');
    }else{
      updateLike(false);
      setCount(count-1);
      setColor('grey');
    }
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" className={classes.avatar}>
            {post.username.charAt(0)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title= {post.title}
        subheader= {post.subtitle}
      />
      <Link to={{pathname: "/ResumeView", state:{test: "sending data over", data: {post}}}} >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image = {post.image}
            title="resume"
          />
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
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
           {count} likes
        </Typography>
      </CardContent>
    </Card>
    
  );
}
export default CardComponent;