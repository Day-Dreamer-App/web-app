import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './Day Dreamer_about-us.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage, siteInstagramPage} = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Day Dreamer',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>We believe getting hired should be easy. Let's make it happen.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that over 80% of creatives don't price themselves correctly?</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                We want to make getting hired easier, faster, and more fun! We've created a system for you - reviews,
                rates, and a full-service hiring platform.
              </h2>

              <p>
                As a creative professional, you want to diversify your income, which starts with having a competitive
                rate, reviews, and a payment system that protects you. With Day Dreamer, get booked easily, chat
                either in the portal or mobile app, and receive your payment as soon as the gig is completed.
              </p>

              <h3 className={css.subtitle}>So you want to make more money?</h3>

              <p>
                Day Dreamer is made by and for creatives, but backed by data. We believe in empowering creative
                professionals to stay competitive in their medium and local community. You can also easily import
                your portfolio projects directly into Day Dreamer. No more uploading the same video, song, or photo
                to multiple websites!
              </p>

              <h3 id="contact" className={css.subtitle}>
                Are you looking to hire local creatives?
              </h3>
              <p>
                Day Dreamer has been helping local small businesses and other creatives hire locally since
                2019 when we created our{' '}<ExternalLink href="https://medium.com/day-dreamer-app/dreamers-doers-a-new-way-to-hire-creatives-3de26228fc7e"
                >Dreamers & Doers pilot</ExternalLink>, saving hirers 20-30% compared to a creative agency.
                If you're looking for new and local, top talent, where you can save more time + money,
                look no further - we got you!
              </p>
              <p>
                Stay in touch with us at{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink>{', '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>, and{' '}
                <ExternalLink href={siteInstagramPage}>Instagram</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
