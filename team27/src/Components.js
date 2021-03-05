import React from 'react';
import {Button, styled, OutlinedInput, withStyles, TextField} from '@material-ui/core';

// ------------------------------ Buttons Start ------------------------------ //
const GreenButton = styled(Button)({
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

 function MainButton ({text, change}){ 
	return(
		<GreenButton variant="contained" onClick={change}>
			{text}
		</GreenButton>
	);
 }

// ------------------------------ Buttons Ends ------------------------------ //

// ------------------------------ Input Start ------------------------------ //
const InputBox = withStyles({
	root: {
		borderRadius: '10px',
		Textcolor: 'black',
		Height: '48px',
		minWidth: '200px',
		textTransform: 'capitalize',
		marginLeft: '50px',
		marginBottom: '15px',
		// "&.Mui-focused $notchedOutline": {
			// borderColor: '#009688',
			// borderWidth: '2px',
		// },
		// "&:hover $notchedOutline": {
			// borderColor: '#71A89E'
		// },
		// '& input:invalid + fieldset': {
			// borderColor: 'red'
			// // padding: '4px !important', // override inline-style
		// }
		'& .MuiFormLabel-root.Mui-focused': {
			color: "#009688"
		},
		'& input:valid + fieldset': {
			borderColor: '#009688',
			borderWidth: 1,
		},
		'& input:invalid + fieldset': {
			borderColor: 'red',
			borderWidth: 1,
		},
		'& input:valid:focus + fieldset': {
			borderColor: '#009688',
			borderWidth: 2,
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#009688',
			borderWidth: 2,
		},
	},
	// notchedOutline: {
		// borderColor: '#71A89E'
	// },
})(TextField);

 function MainInputBox ({textBoxName, placeholderName, inputType, change, textValue, userInput}){ 
	return(
		<InputBox
			onChange = {change}
			name={textBoxName}
			placeholder={placeholderName}
			type = {inputType}
			// value = {textValue}
			// required
			label={placeholderName}
			variant='outlined'
			helperText={userInput ? 'This Field is required!': ' '}
			error={userInput}
			autoComplete="on"
		/>
	);
 }
// ------------------------------ Input End ------------------------------ //


export {MainButton, MainInputBox};
