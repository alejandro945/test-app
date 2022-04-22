import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../themes';
import createEmotionCache from '../themes/createEmotionCache';
import { useRouter } from 'next/router';
import { authCheck } from '../utils';

// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps } = props;
	const router = useRouter();
	const [authorized, setAuthorized] = React.useState(false);

	React.useEffect(() => {
		// auth check on initial load
		if (!authCheck(router.asPath)) {
			setAuthorized(false);
			router.push('/');
			router.reload()
		} else {
			setAuthorized(true);
		}

		// set authorized to false to hide page content while changing routes
		const hideContent = () => setAuthorized(false);
		router.events.on('routeChangeStart', hideContent);

		// run auth check on route change
		router.events.on('routeChangeComplete', authCheck)

		// unsubscribe from events in useEffect return function
		return () => {
			router.events.off('routeChangeStart', hideContent);
			router.events.off('routeChangeComplete', authCheck);
		}
	}, []);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport"
					content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{authorized && <Component {...pageProps} />}
			</ThemeProvider>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};

