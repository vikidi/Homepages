if (process.env.NODE_ENV === 'production') {
  // TODO
}

const info = message => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
  else if (process.env.NODE_ENV === 'production') {
    // TODO
  }
};

const error = error => {
  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  }
  else if (process.env.NODE_ENV === 'production') {
    // TODO
  }
};

module.exports = {
  info, error
};