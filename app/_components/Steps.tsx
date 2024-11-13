import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props: { step1Title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step1Description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step2Title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step2Description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step3Title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step3Description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step4Title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; step4Description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }) => {
  return (
    <>
      <div className="steps-container1 thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container2 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large text-justify">
              At Glorious T&T Agency, our mission is to turn your aspirations into experiences, whether you're traveling the world, investing in property, or acquiring a new language. We are committed to providing personalized services that reflect our core values of excellence, integrity, and innovation.
              </p>
              <div className="steps-actions">
                <button className="thq-button-animated thq-button-filled steps-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps-text14 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text15 thq-heading-3">01</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps-text17 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps-text18 thq-heading-3">02</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text20 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text21 thq-heading-3">03</label>
              </div>
              <div className="steps-container7 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text23 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text24 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Steps.defaultProps = {
  step1Description:
    'Browse through our wide range of travel destinations and choose your next adventure.',
  step2Description:
    'Discover a variety of real estate listings to find the perfect home for you and your family.',
  step1Title: 'Explore Destinations',
  step2Title: 'Find Your Dream Home',
  step3Title: 'Learn English Online',
  step4Title: 'Book Your Trip',
  step4Description:
    "Once you've chosen your destination, book your trip with ease through our travel agency services.",
  step3Description:
    'Improve your English language skills with our interactive online learning platform.',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step4Description: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps
