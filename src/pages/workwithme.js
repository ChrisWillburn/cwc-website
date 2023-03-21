import React from 'react';

import Layout from '../components/Layout';

const WorkPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Work With Me</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'}}>
            There is more information than ever out there on how to lose weight, as well as more diets than ever.
        </h3>

            <p className="firstParagraph">So why are there more overweight and obese people than ever?</p>

            <p>Because in our society we are looking at diets and weight loss backwards.</p>

            <p>Instead of focusing on the most "hardcore" diet with the most restrictions that makes you miserable and RUNS your life...</p>

            <hr />

            <p>What if we created you a plan that was easy, enjoyable, and MADE YOUR LIFE BETTER? </p>

            <p>Sounds crazy, right? So with that in mind I created...</p>

            <h4>The Self Care Project</h4>
            <p>A unique system to help you lose weight, get healthy, reduce stress, increase happiness and positivity, and improve your quality of life overall. No more eating foods you hate, following a cycle of restriction and binging, and constantly beating yourself up. Instead, we'll focus on:</p>

            <ul>
                <li>Creating a healthy relationship with food</li>
                <li>Long term habit change</li>
                <li>Ending food restrictions</li>
                <li>Creating a lifestyle where you enjoy the process of losing weight</li>
                <li>Mastering self care and giving yourself permission to put <i>you</i> first</li>
            </ul>

            <p>The program is based around my 4 Pillars</p>
            <ol className="four-pillars-list">
            <li>
                <b>Mindset - Reslience Thinking</b><br />
                Changing how you think when pursuing weight loss and a healthier life in general is the most important thing. I will teach you how to think differently so that you can take control of the conversation in your head and greatly reduce anxiety and depression and increase mental resilience. Mindfulness and positive psychology are stressed a lot in this pillar.
            </li>

            <li>
                <b>Nutrition Coaching Using “The happy Method"</b><br />
                This pillar uses the principles of my "happy method" that empowers you to eat foods you enjoy, get out of the "good and bad food" mentality and end food guilt forever. No foods are off limits, and I help you to incorporate foods that make you happy. So you can create a lifestyle...not a diet. Again, EAT FOODS YOU ENJOY and NO FOODS OFF LIMITS!
            </li>
 
            <li>
                <b>Stress Relief and Management</b><br />
                Let’s face it - stress is typically the biggest thing holding us back from not only the body we want but also the health we want. I have found that making stress relief a part of my coaching increases not only results, but also life satisfaction. And no, it won’t take sitting cross legged on a mountain to achieve it. A few simple tactics and strategies and you will wonder how you lived so stressed out for so long.
            </li>

            <li>
                <b>The Neuroscience of Behavior Change</b><br />
                I will help you work WITH your brain, rather than against it, to create long term sustainable habit change, AND make it more enjoyable. If you actually ENJOY the process then you will be 1,000% more likely to get to your end goal and MAINTAIN it.
            </li>
            </ol>

            <hr />
          
            <p>“You will never get what you LOVE doing things you hate"...so let’s build you a process you LOVE.</p>
 
            <p>There are several different options for joining The Self Care Project to fit your needs. All programs run for a minimum of 12 weeks.</p>
 
            <p>Ready to get started on changing your life for good?</p>
 
            <p>Fill out the form below to schedule a free consultation.</p>

          <section>
          <form name="workwithme"  method="post"   data-netlify="true"  netlify-honeypot="bot-field">
          
            <div className="row gtr-uniform">
		<div className="col-6 col-12-xsmall">
			<input type="text" name="name" id="demo-name" defaultValue="" placeholder="Name" />
		</div>
		<div className="col-6 col-12-xsmall">
			<input type="email" name="email" id="demo-email" defaultValue="" placeholder="Email" />
               	</div>
		<div className="col-12">
			<select name="How did you hear about me?" id="demo-category">
      <option value="">- How Did You Hear About Me? -</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="podcast">Podcast</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
			</select>
		</div>
		<div className="col-12">
			<textarea name="message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
		</div>
		<div className="col-12">
			<ul className="actions">
				<li><input type="submit" value="Send Message" className="primary" /></li>
				<li><input type="reset" value="Reset" /></li>
		<input type="hidden" name="form-name" value="workwithme" />
		<li><input type="hidden" name="redirect" value="https://www.chriswillburncoaching.com/thank-you/" /></li>
			</ul>
		</div>
		</div>
		</form>
	  </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default WorkPage;
