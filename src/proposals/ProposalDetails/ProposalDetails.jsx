import React from 'react'
import PropTypes from 'prop-types'

import DetailsSection from './DetailsSection'
import './ProposalDetails.css'

const ProposalDetails = ({ proposal }) => {
  const { speaker, description } = proposal
  return (
    <div className="ProposalDetails">
      <DetailsSection
        className="ProposalDetails__speaker"
        name="speaker"
      >
        <span className="ProposalDetails__speaker__value">
          {speaker}
        </span>
      </DetailsSection>
      <DetailsSection
        className="ProposalDetails__category"
        name="category"
      >
      </DetailsSection>
      <DetailsSection
        className="ProposalDetails__description"
        name="description"
      >
        <div className="ProposalDetails__description__value">
          {description}
        </div>
      </DetailsSection>
    </div>
  )
}

ProposalDetails.propTypes = {
  proposal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProposalDetails