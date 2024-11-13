import React from 'react'

import PropTypes from 'prop-types'

const CTA = () => {
  return (
    <>
 <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta-accent2-bg">
            <div className="cta-accent1-bg">
              <div className="cta-container2">
                <div className="cta-content">
                  <span className="text-[35px] font-semibold leading-[1.5]">Start Your Journey Today</span>
                  <p className="text-lg leading-[1.5]">Explore our services and begin your adventure with us</p>
                </div>
                <div className="gap-[24px] flex items-start justify-end flex-1 cta-actions">
                  <button
                    type="button"
                    className="thq-button-filled cta-button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default CTA
