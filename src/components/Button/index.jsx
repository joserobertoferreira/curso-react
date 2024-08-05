import propTypes from 'prop-types'

import './styles.css'

export const Button = ({ text, actionFn, disabled = false }) => (
  <button className="button" type="button" onClick={actionFn} disabled={disabled}>
    {text}
  </button>
)

Button.defaultProps = { disabled: false }

Button.propTypes = {
  text: propTypes.string.isRequired,
  actionFn: propTypes.func.isRequired,
  disabled: propTypes.bool,
}
