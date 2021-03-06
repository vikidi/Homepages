import Check from '@material-ui/icons/Check'
import Warning from '@material-ui/icons/Warning'

const notificationReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return state.concat(action.data)
  case 'REMOVE_NOTIFICATION':
    return state.filter(n => n.id !== action.data)
  default:
    return state
  }
}

function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    ((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & (15 >> (c / 4))).toString(16)
  )
}

const getDispatch = (msg, color, icon, timeout) => {
  return async dispatch => {
    const id = uuid()
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        id,
        message: msg,
        color: color,
        icon: icon
      }
    })

    setTimeout(() => {
      dispatch(removeNotif(id))
    }, timeout)
  }
}

const DEFAULT_TIME = 10000

export const setInfo = (msg, timeout = DEFAULT_TIME) => {
  return getDispatch(msg, 'info', 'info_outline', timeout)
}

export const setSuccess = (msg, timeout = DEFAULT_TIME) => {
  return getDispatch(msg, 'success', Check, timeout)
}

export const setError = (msg, timeout = DEFAULT_TIME) => {
  return getDispatch(msg, 'danger', Warning, timeout)
}

const removeNotif = id => {
  return async dispatch => {
    dispatch({
      type: 'REMOVE_NOTIFICATION',
      data: id
    })
  }
}

export default notificationReducer