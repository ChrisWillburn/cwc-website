import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>You're All Set!</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Thank you for signing up to the newsletter.</h3>
          
          <p>I look forward to staying in touch with you.</p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
