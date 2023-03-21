import React from 'react';
// import ScriptTag from 'react-script-tag';

import Layout from '../components/Layout';

const ResourcesPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>My Free Resources Will Show You How To Change a Habit Anytime You Want, As Well As How to Feel Less Stressed, Happier, And Have More Energy
</h2>
      </header>
        <section className="wrapper style5">
          <div className="inner">

          <h3 style={{textAlign: 'center'}}>Free Resource #1 - How to Change a Habit Using The Science of How Your Brain Works - Audio Training</h3>
          <h4 style={{marginTop: '2em'}}>This audio training will show you how to change ANY habit using the science of your bran.</h4>
          <span>You'll learn:</span>
          <ul style={{listStylePosition: 'inside'}}>
            <li>2 specific areas of the brain and how they might be helping or hurting you</li>
            <li>3 tactics to work with your brain to change any habit</li>
            <li>How to avoid working against your brain when trying to change habits</li>
          </ul>


          <h3 style={{textAlign: 'center', marginTop: '4em'}}>Free Resource #2 - 21 Day Challenge</h3>

          

            <div>
          <h4>Wanna feel...</h4>
        
          <ul>
            <li>Less stressed?</li>
            <li>Happier?</li>
            <li>Like you have a more positive outlook on things?</li>
            <li>What it's like to spend less time ruminating on negative thought spirals?</li>
            <li>How to have more energy?</li>
            <li>What happens when you train your brain to notice more positivity?</li>
           </ul>

           <p>...All using a 2 minute technique that is backed by neuroscience?</p>

           <p>I know, I know...that's a lot to promise and I wouldn't promise that if I couldn't deliver.</p>

           <h4>I've been using this exercise with clients for years and there are only 2 outcomes:</h4>
           <ol>
             <li>They don't do it and nothing changes</li>
             <li>They do it, feel amazing, and experience a huge shift</li>
           </ol>

           <p>Those are the only 2 outcomes. And it only <b>TAKES 2-3 MINUTES A DAY</b></p>

           <p>I dare you to try it and not love it!</p>
        </div>



          <h4 style={{textAlign: 'center'}}>Sign up below and you'll get instant access to these highly valuable free resources</h4>
          {/* <form method="post" action="https://chriswillburnfitness.us15.list-manage.com/subscribe/post?u=500bd36b7f4b0afe5f0ff162f&amp;id=5882b2c255" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="required home-signup validate" target="_blank" noValidate>
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
                <input type="text" name="FNAME" className="required" id="mce-FNAME" defaultValue="" placeholder="First Name" />
							</div>
							<div className="col-6 col-12-xsmall">
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" defaultValue="" placeholder="Email" />
							</div>
              <div hidden="true"><input type="hidden" name="tags" value="2298300" /></div>
							<div className="col-12">

              <div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
		<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
	</div>


  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_500bd36b7f4b0afe5f0ff162f_5882b2c255" tabindex="-1" value="" /></div>

								<ul className="actions">
									<li><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button primary" /></li>
								</ul>
							</div>
						</div>
</form>*/}



<form method="post" action="https://chriswillburnfitness.us15.list-manage.com/subscribe/post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="required home-signup validate" target="_blank" noValidate>
            <input type="hidden" name="u" value="500bd36b7f4b0afe5f0ff162f" />
            <input type="hidden" name="id" value="5882b2c255" />
            <input type="hidden" NAME="redirect" VALUE="https://www.chriswillburncoaching.com/your-resources/"></input>
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall">
                <input type="text" name="FNAME" className="required" id="mce-FNAME" defaultValue="" placeholder="First Name" />
							</div>
							<div className="col-6 col-12-xsmall">
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" defaultValue="" placeholder="Email" />
                <input type="hidden" name="RESOURCES" value="CWCRESOURCES" />
							</div>


              {/*<div className="col-12">*/}
              <div className="col-6 col-12-xsmall">
                <select name="category" id="demo-category">
                  <option value="">- How Did You Hear About Me? -</option>
                  <option value="1">Facebook</option>
                  <option value="1">Instagram</option>
                  <option value="1">TikTok</option>
                  <option value="1">Podcast</option>
                  <option value="1">Referral</option>
                  <option value="1">Other</option>
                </select>
              </div>


              <div hidden="true"><input type="hidden" name="tags" value="2298300" /></div>
							<div className="col-12">

              <div id="mce-responses" className="clear">
		<div className="response" id="mce-error-response" style={{display: 'none'}}></div>
		<div className="response" id="mce-success-response" style={{display: 'none'}}></div>
	</div>


  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_500bd36b7f4b0afe5f0ff162f_5882b2c255" tabindex="-1" value="" /></div>

								<ul className="actions">
									<li><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button primary" /></li>
								</ul>
							</div>
						</div>
</form>

       
        </div>
      </section>

      {/* <ScriptTag>
      <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) &lbrace;window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';&rbrace;(jQuery));var $mcj = jQuery.noConflict(true);</script>
</ScriptTag> */}
    </article>
  </Layout>
);

export default ResourcesPage;
