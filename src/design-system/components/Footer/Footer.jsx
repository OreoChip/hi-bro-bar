import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';
import '@fortawesome/fontawesome-free/css/all.css';

import footerStyle from 'design-system/assets/jss/material-kit-react/components/footerStyle.jsx';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {(props.icons || []).map(({ icon, url }, i) => (
              <ListItem className={classes.inlineBlock}>
                <a
                  href={url}
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={icon} style={{ fontSize: 20 }} />
                </a>
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.right}>
          <div className={classes.rightFlex}>
            <div>{props.rightText}</div>
            <div className={classes.rightBottom}>Designed By <a className={classes.rightLink} href={props.rightLink.url} target={'_blank'}>{props.rightLink.text}</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
