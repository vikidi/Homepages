import React from 'react'
import PropTypes from 'prop-types'

/**
 * The only true button.
 */
const TutorialButton = ({ color, size, children }) => {
  const styles = {
    color,
    fontSize: TutorialButton.sizes[size],
  }

  return <button style={styles}>{children}</button>
}
TutorialButton.propTypes = {
  /**
	 * Button label.
	 */
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /**
	 * A prop that should not be visible in the doc.
	 * @ignore
	 */
  ignoredProp: PropTypes.bool,
}
TutorialButton.defaultProps = {
  color: '#333',
  size: 'normal',
}
TutorialButton.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px',
}
export default TutorialButton