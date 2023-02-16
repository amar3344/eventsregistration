import './index.css'

const EventItem = props => {
  const {details, getRegistrationStatus} = props

  const onClickGetStatus = () => {
    getRegistrationStatus(details.id)
  }

  return (
    <>
      <li className="each-card-cont">
        <button type="button" className="button" onClick={onClickGetStatus}>
          <img src={details.imageUrl} alt={details.name} />
        </button>
        <h4>{details.name}</h4>
        <p>{details.location}</p>
      </li>
    </>
  )
}

export default EventItem
