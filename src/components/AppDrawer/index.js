import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavItems from './NavItems';

import routes from '../../routes';

class AppDrawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = () => {
    const open = this.state.open;
    this.setState({ open: !open });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              WeboParts
            </Typography>
          </Toolbar>
        </AppBar>

        {/*Sidebar Menus*/}
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <List className={classNames(classes.navItems)}>
            <NavItems />
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {routes}
        </main>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
