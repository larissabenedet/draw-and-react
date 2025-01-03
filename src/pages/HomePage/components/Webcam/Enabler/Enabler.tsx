import React from 'react'

type EnablerProps = {
  activateWebcam: React.MouseEventHandler<HTMLButtonElement>
}

const Enabler: React.FC<EnablerProps> = ({ activateWebcam }) => {
  return (
    <div>
      <h2>📷 Enable Webcam to Start</h2>
      <p>
        To start, activate your webcam by clicking the button below and granting
        permission in your browser.
      </p>
      <button onClick={activateWebcam}>Activate Webcam</button>
    </div>
  )
}

export default Enabler
