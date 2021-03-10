// Material UI Components
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer/Footer";
// Own Components
import Navigation from "../Navigation/Navigation";

const useStyles = makeStyles(() => ({
  root: { marginTop: "auto", marginBottom: "auto", height: "100%" },
}));

const ViewWrapper = ({ header, footer, fullMain, children }) => {
  const classes = useStyles();

  return (
    <>
      {header && <Navigation />}
      <Container className={fullMain ? classes.root : null} component="main">
        {children}
      </Container>
      {footer && <Footer />}{" "}
    </>
  );
};

ViewWrapper.propTypes = {
  children: PropTypes.node,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  fullMain: PropTypes.bool,
};

ViewWrapper.defaultProps = {
  header: true,
  footer: true,
  fullMain: false,
};

export default ViewWrapper;
