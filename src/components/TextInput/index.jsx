import propTypes from 'prop-types'

import './styles.css'

export const TextInput = ({ searchValue, actionFn }) => {
  return (
    <input
      className="text-input"
      onChange={actionFn}
      value={searchValue}
      type="search"
      placeholder="Search posts..."
    />
  )
}

TextInput.propTypes = {
  searchValue: propTypes.string.isRequired,
  actionFn: propTypes.func.isRequired,
}
