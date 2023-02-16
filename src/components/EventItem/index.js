import './index.css'

const EventItem = props => {
  const {details, getEventDetails} = props

  const onClickGetStatus = () => {
    getEventDetails(details.id)
  }

  return (
    <>
      <li className="each-card-cont">
        <button type="button" className="button" onClick={onClickGetStatus}>
          <img src={details.imageUrl} alt="event" />
        </button>
        <p>{details.name}</p>
        <p>{details.location}</p>
      </li>
    </>
  )
}

export default EventItem
