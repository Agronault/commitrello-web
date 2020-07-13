import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default () =>
<AppBar position="static" style = {appBarStyle}>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu" style= {{marginRight: 20}}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      Commitrello
    </Typography>
  </Toolbar>
</AppBar>

const appBarStyle = {
    marginBottom: 20
}
