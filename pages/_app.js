import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  // Custom logic here
  return <Component {...pageProps} />;
}

export default MyApp;