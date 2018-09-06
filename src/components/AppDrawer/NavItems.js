import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';

import './nav-items.css';

class NavItems extends React.Component {
  render() {
    return (
      <div>
        <NavLink exact={true} to="/" className="menuLink">
          <ListItem button className="menuItem">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/products" className="menuLink">
          <ListItem button className="menuItem">
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>

            <ListItemText primary="Products" />
          </ListItem>
        </NavLink>
        <NavLink to="/administration" className="menuLink">
          <ListItem button className="menuItem">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Administration" />
          </ListItem>
        </NavLink>
      </div>
    );
  }
}

export default NavItems;
