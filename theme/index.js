import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#9C0000',
		},
		secondary: {
			main: '#9C9100',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;

