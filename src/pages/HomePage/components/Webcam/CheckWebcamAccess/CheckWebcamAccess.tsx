import React, { lazy, Suspense, useState } from 'react'
import { AccessDenied } from './AccessDenied'
import { ErrorBoundary } from 'react-error-boundary'
import { LoadScreen } from '../../../../LoadScreen'
import ActionButton from '../../../../../components/ActionButton'
import MagnifyingGlass from '../../../../../assets/svgs/MagnifyingGlass'
import ErrorFallback from '../../../../../components/ErrorFallback'

const CheckWebcamAccess: React.FC = () => {
  const [userWantsWebcam, setUserWantsWebcam] = useState(false)

  const browserHaveAccessToWebcam: boolean = !!(
    navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  )

  if (!browserHaveAccessToWebcam) {
    return (
      <main>
        <AccessDenied />
      </main>
    )
  }

  if (!userWantsWebcam) {
    return (
      <main>
        <ActionButton
          title="Ready to try the AI shape detector?"
          description="Click below to start the webcam experience and load the AI model."
          buttonText="Start Shape Detection"
          icon={<MagnifyingGlass />}
          onClick={() => setUserWantsWebcam(true)}
        />
      </main>
    )
  }

  const WebcamWithProviders = lazy(
    () => import('../../../../../components/WebcamWithProviders')
  )

  return (
    <main>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setUserWantsWebcam(false)}
      >
        <Suspense fallback={<LoadScreen />}>
          <WebcamWithProviders />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

export default CheckWebcamAccess
