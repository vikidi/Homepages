import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import BeatLoader from './BeatLoader'

describe('<BeatLoader />', () => {
  test('Content is rendered', async () => {

    render(
      <BeatLoader />
    )
  })
})