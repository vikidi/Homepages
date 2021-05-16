import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Typist from 'react-typist'

const useStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(6),
    [theme.breakpoints.down('lg')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    }
  },
  textrow: {
    width: 'fit-content'
  },
  typist: {
    width: 'fit-content'
  }
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
          <div key={i} className={classes.textrow}>
            <Typist cursor={cursorSettings} avgTypingDelay={45} className={classes.typist}>
              {l.map((w, i) => <span key={i} style={{ color: w.color, whiteSpace: 'pre' }}>{w.text}</span>)}
            </Typist>
          </div>
        )
      })}
    </div>
  )
}

export default CodeBlock