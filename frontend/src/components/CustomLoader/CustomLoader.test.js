import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import CustomLoader from './CustomLoader'

describe('<CustomLoader />', () => {
  test.skip('Content is rendered', async () => {

    render(
      <CustomLoader />
    )
  })
})