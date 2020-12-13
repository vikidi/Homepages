import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TutorialButton from './TutorialButton'

describe('<TutorialButton />', () => {
  test('Correct text is rendered', async () => {

    const component = render(
      <TutorialButton>Push Me</TutorialButton>
    )

    const content = component.container.textContent
    expect(content).toBe('Push Me')
  })
})