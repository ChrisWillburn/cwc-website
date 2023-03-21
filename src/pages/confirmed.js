import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>You're In!</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Thank you for signing up. I really appreciate it and look forward to sharing these resources with you.</h3>
          
          <p>Please check your inbox for an email confirmation and further information (it might take a few minutes to arrive).</p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
