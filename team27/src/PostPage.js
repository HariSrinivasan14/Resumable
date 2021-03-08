import React from 'react';
import './PostPage.css';
import {NavExplore} from "./NavBar";
import PostBox from './PostBox';
import Dropzone from './Dropzone';
import {TextField, OutlinedInput, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';


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
function PostPage() {

    const [name, setName] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    
    return (
        <div>
            
            <NavExplore />
            {/* <div className = 'postResume'>
                <Dropzone />
            </div> */}

            <div className='Title_input'>     

                <OutlinedInput
                    id="outlined-name"
                    name="Title*"
                    value={name}
                    placeholder="Title"
                    onChange={handleChange}
                    variant="outlined"
                    color="#71A89E"/>    
               

            </div>
            <div className='Subtitle_input'>
            <Box width={500}>
            <TextField
                id="outlined-textarea"
                name="Subtitle"
                placeholder="Subtitle"
                variant="outlined"
                fullWidth
            />
            </Box>

            </div>
            <div className='Desc_input'>
            <Box width={500}>
            <TextField
                id="outlined-textarea"
                name="Description"
                placeholder="Description"
                multiline
                variant="outlined"
                fullWidth
            />
            </Box>

            </div>
           <Dropzone />


        </div>
    )
}

export default PostPage
