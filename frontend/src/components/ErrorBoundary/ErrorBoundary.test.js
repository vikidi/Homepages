import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

describe('<ErrorBoundary />', () => {
  test('Content is rendered', async () => {

    const component = render(
      <ErrorBoundary>
        <p>Testing boundary</p>
      </ErrorBoundary>
    )

    const content = component.container.textContent
    expect(content).toBe('Testing boundary')
  })
})