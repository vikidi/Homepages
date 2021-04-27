import { getFromLS, setToLS } from '../utils/localStorage'

const currentVersion = getFromLS('buildVersion')
if (!currentVersion) {
  setToLS('buildVersion', process.env.REACT_APP_VERSION)
}