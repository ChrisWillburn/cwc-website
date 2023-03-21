import React from 'react';

import Layout from '../components/Layout';

import contactcw from '../assets/images/contact-chris-willburn.jpg'

const ContactPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Test 3 Contact Me</h2>
        {/*<p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>*/}
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <h3 style={{fontSize: '1.5em', textAlign: 'center', fontStyle: 'italic'
          }}>Thank you for your interest in Chris Willburn Coaching.</h3>

		<img src={contactcw} className="img-shadow" style={{margin: 'auto', maxWidth: '100%', display: 'block'}} alt="Fill out the form below to contact Chris Willburn" />

          <p className="firstParagraph">
            Fill out the form below and I'll get back to you shortly.
          </p>

        <hr />

          <form
            name="contactus"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="demo-name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="demo-email"
                  defaultValue=""
                  placeholder="Email"
                />
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
                <textarea
                  name="message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                  <input type="hidden" name="form-name" value="contactus" />
                  <li>
                    <input
                      type="hidden"
                      name="redirect"
                      value="https://www.chriswillburncoaching.com/thank-you/"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>

        </div>
      </section>
    </article>
  </Layout>
);

export default ContactPage;
