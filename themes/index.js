import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: {
		primary: {
			main: '#9C0000',
		},
		secondary: {
			main: '#4a148c',
		},
		error: {
			main: red.A400,
		},
		success:{
			main: '#1b5e20'
		},
		blender:{
			main: '#ffd600'
		},
		basic:{
			main:'#0d47a1'
		}
	},
});

export default theme;

