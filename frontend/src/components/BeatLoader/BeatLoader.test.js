import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import BeatLoader from './BeatLoader'

describe('<BeatLoader />', () => {
  test('Correct text is rendered', async () => {

    render(
      <BeatLoader />
    )
  })
})