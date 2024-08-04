import './styles.css'

export const TextInput = ({ searchValue, actionFn }) => {
  return (
    <input className="text-input" placeholder="Search posts..." onChange={actionFn} value={searchValue} type="search" />
  )
}
