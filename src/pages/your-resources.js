import React from 'react';

import Layout from '../components/Layout';

// import { Helmet } from 'react-helmet';

const YourResources = () => (
  <Layout fullMenu>
    {/*<Helmet>
    <meta http-equiv="refresh" content="0;URL=https://www.chriswillburncoaching.com/your-resources/" />
</Helmet>*/}
    <article id="main">
      <header>
        <h2>Thanks so much for claiming your free resources! I'm really excited to share these with you.</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">

        <h3 style={{textAlign: 'center', marginTop: '4em', marginBottom: '2em'}}>How to Change a Habit Using The Science of How Your Brain Works - Audio Training</h3>

        <div style={{textAlign: 'center', maxWidth: '100%'}}>

            <iframe src="https://drive.google.com/file/d/1-2WL4u8R-aTbDoRtKVi4oSIh8zBdskMO/preview" allow="autoplay" title="How to Change a Habit Using The Science of How Your Brain Works "></iframe>
            <br />
            <br />
            </div>
      
            <h3 style={{textAlign: 'center', marginTop: '8em'}}>21 Day Challenge</h3>
          
            <div className='video-container' style={{marginTop: '2em', textAlign: 'center', maxWidth: '100%'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9-mPbs-t6WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
      </section>
    </article>
  </Layout>
);

export default YourResources;
