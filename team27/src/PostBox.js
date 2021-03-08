import React, { useState } from 'react'
import './PostBox.css'
import { Avatar, TextField } from '@material-ui/core'
import { makeStyles, ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap'
import {Progress} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: '#71A89E',
    },
  }));
//   const theme = createMuiTheme({
//     palette: {
//       primary: green,
//     },
//   });
function PostBox({username}) {
    const [postMessage, setPostMessage] = useState("");
    const [postImage, setPostImage] = useState("");
    const classes = useStyles();

    return (
    
        <div className="postBox">
            <form>
                <div className="postBox__input">
                    <Avatar/>
                    <input placeholder="Description?" type="text"/>
                    {/* <ThemeProvider >
                        <TextField
                        className={classes.margin}
                        label="Title"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </ThemeProvider> */}
                </div>

                {/* <input type="file" name="file" id="file" class="inputfile" />
                <label for="file"><strong>Choose a file</strong></label> */}
                <div class="file-input">
                    <input type="file" id="file" class="file"/>
                    {/* <label for="file">Select file</label> */}
                    {/* <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> */}
                </div>
                
                <Button
                    type="submit"
                    className="postBox__postButton"
                >
                    Post
                </Button>
            </form>
        </div>
    );
}

export default PostBox;
