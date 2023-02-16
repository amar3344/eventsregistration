import './index.css'

const ActiveEventRegistration = props => {
  const {gettingText, running} = props

  if (running) {
    switch (gettingText) {
      case 'YET_TO_REGISTER':
        return (
          <div className="registration-status-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="registration-image"
            />
            <p className="yet-to-register-text">
              A live performance brings so much to your relationship with
              dance.Seeing dance live can often make you fall totally love with
              this beautiful artform
            </p>
            <button type="button" className="re-button">
              Register Here
            </button>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="registration-status-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
              className="registration-image"
            />
            <h3>Registrations Are Closed Now!</h3>
            <p>Stay tuned. We will reopen</p>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="registration-status-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
              className="registration-image"
            />
            <h1 className="registered-text">
              You have already registered for the event
            </h1>
          </div>
        )
      default:
        break
    }
  }

  return (
    <div>
      {!running && (
        <p className="initial-text">
          Click on an event, to view its registration details
        </p>
      )}
    </div>
  )
}

export default ActiveEventRegistration
