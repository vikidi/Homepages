import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import BasicButton from './BasicButton'

describe('<BasicButton />', () => {
  test('Correct text is rendered', async () => {

    const component = render(
      <BasicButton>Push Me</BasicButton>
    )

    const content = component.container.textContent
    expect(content).toBe('Push Me')
  })
})