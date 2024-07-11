import { Fragment } from "react";
import Head from "next/head";
  import "./global.css";
 
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>CRM</title>
     
      </Head> 
      <div className="content">
 
         <Component {...pageProps} />
       </div>

     </Fragment>
  );
   }

export default MyApp;
