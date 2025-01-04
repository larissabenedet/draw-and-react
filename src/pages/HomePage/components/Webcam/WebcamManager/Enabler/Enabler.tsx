import React from 'react'

type EnablerProps = {
  enableWebcam: React.MouseEventHandler<HTMLButtonElement>
}

const Enabler: React.FC<EnablerProps> = ({ enableWebcam }) => {
  return (
    <div>
      <h2>📷 Enable Webcam to Start</h2>
      <p>
        To start, activate your webcam by clicking the button below and granting
        permission in your browser.
      </p>
      <button onClick={enableWebcam}>Activate Webcam</button>
    </div>
  )
}

export default Enabler
