import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const AWS = require("aws-sdk");

function MyApp({ Component, pageProps }) {
  AWS.config.update({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID_KIKA,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_KIKA,
    },
  });
  return <Component {...pageProps} />;
}

export default MyApp;
