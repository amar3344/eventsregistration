import './index.css'

const ActiveEventRegistration = props => {
  const {details} = props

  return (
    <div>
      <h1 className="registration-status">{details.registrationStatus}</h1>
    </div>
  )
}

export default ActiveEventRegistration
