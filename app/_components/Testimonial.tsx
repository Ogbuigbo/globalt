import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container10">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial-text11 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container13">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text14 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container15">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text17 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container17">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text20 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card4"
                >
                  <div className="testimonial-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image4"
                    />
                    <div className="testimonial-container19">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text23 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Testimonial.defaultProps = {
  heading1: 'Testimonials',
  review1:
    'I had an amazing vacation planned by the travel agency. Everything was well-organized and I had a stress-free trip.',
  author1Position: 'CEO, ABC Inc.',
  content1:
    'Read what our clients have to say about their experiences with our services.',
  author1Alt: 'Image of John Smith',
  review4:
    'The travel agency exceeded my expectations with their personalized service. I will definitely book my next trip with them.',
  author2Name: 'Emily Johnson',
  review2:
    'The real estate team helped me find my dream home in no time. They were professional and understood exactly what I was looking for.',
  author3Position: 'Teacher',
  author4Position: 'Freelancer',
  author2Position: 'Marketing Manager',
  author1Src:
    'https://images.unsplash.com/photo-1467010234262-77bada75a47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Emily Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1509460913899-515f1df34fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1445633883498-7f9922d37a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Adams',
  review3:
    'I improved my English skills significantly with the online learning platform. The lessons were engaging and effective.',
  author4Src:
    'https://images.unsplash.com/photo-1694705268819-80fcf37e35ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Lee',
  author3Alt: 'Image of David Lee',
  author1Name: 'John Smith',
  author4Alt: 'Image of Sarah Adams',
}

Testimonial.propTypes = {
  heading1: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  content1: PropTypes.string,
  author1Alt: PropTypes.string,
  review4: PropTypes.string,
  author2Name: PropTypes.string,
  review2: PropTypes.string,
  author3Position: PropTypes.string,
  author4Position: PropTypes.string,
  author2Position: PropTypes.string,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author4Name: PropTypes.string,
  review3: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial
