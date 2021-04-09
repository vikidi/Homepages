import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Typist from 'react-typist'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6)
  },
}))

const CodeBlock = ({ lines }) => {
  const classes = useStyles()

  const cursorSettings =
  {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 200,
  }

  return (
    <div className={classes.root}>
      {lines.map((l, i) => {
        return (
          <div key={i}>
            <Typist cursor={cursorSettings} avgTypingDelay={45}>
              {l.map((w, i) => <span key={i} style={{ color: w.color, whiteSpace: 'pre' }}>{w.text}</span>)}
            </Typist>
          </div>
        )
      })}
    </div>
  )
}

export default CodeBlock