import React from 'react'
import { useTheme } from '@material-ui/styles'

import Image from 'material-ui-image'

import CustomLoader from '../CustomLoader/CustomLoader'

const CustomImage = ({ path, round }) => {
  const theme = useTheme()

  const roundStyle = {
    borderRadius: '50%',
    boxShadow: theme.shadows[6]
  }

  return (
    <Image
      src={process.env.PUBLIC_URL + path}
      loading={<CustomLoader />}
      color={theme.palette.background.default}
      imageStyle={round ? roundStyle : null}
    />
  )
}

export default CustomImage