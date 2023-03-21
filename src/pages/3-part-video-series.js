import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Tired of Struggling to Lose Weight Because Popular Diets Don’t Work? Sign up to my 3-part Video Series to Learn the Truth About Getting Healthy
</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kItWiEh4YYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

          <h3>When you sign up for my free video series, you’re going to learn:
</h3>
        
        <ul>
            <li>The #1 thing you need to know to lose weight and get healthy</li>
            <li>Why fad diets don’t work</li>
            <li>How changing ourselves internally gives us the power to take control of our health</li>
            <li>Stupid simple nutrition tactics to get you on the right path to your weight loss journey</li>
        </ul>
          <h4>Sign up below and I'll send you the first video</h4>
          <form method="post" action="https://chriswillburnfitness.us15.list-manage.com/subscribe/post?u=500bd36b7f4b0afe5f0ff162f&amp;id=240f4318e3" className="home-signup validate" target="_blank" noValidate>
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
                <input type="text" name="FNAME" id="mce-FNAME" defaultValue="" placeholder="First Name" />
							</div>
							<div className="col-6 col-12-xsmall">
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">

              <div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
		<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
	</div>


  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_500bd36b7f4b0afe5f0ff162f_5882b2c255" tabindex="-1" value="" /></div>

								<ul className="actions">
									<li><input type="submit" value="sign me up" name="sign me up" id="mc-embedded-subscribe" className="button primary" /></li>
								</ul>
							</div>
						</div>
					</form>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
