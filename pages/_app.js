import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  process.env.AWS_SDK_LOAD_CONFIG = true;
  const AWS = require("aws-sdk");
  console.log(process.env)

  AWS.config.update({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID_KIKA,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_KIKA,
    },
  });
  return <Component {...pageProps} />;
}

export default MyApp;
