import { useState } from 'react';
import {
  AppBar, Container, Typography, Button, Menu, MenuItem, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Link from './link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    alignContent: 'center',
  },
  img: {
    padding: '0 20px 0 0',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Try It Now</p>
      </MenuItem>
      <MenuItem>
        <p>Classes</p>
      </MenuItem>
      <MenuItem>
        <p>About Me</p>
      </MenuItem>
      <MenuItem>
        <p>Contact Us</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.root} position="sticky">
        <Container className={classes.container}>
          <img className={classes.img} src="static/images/inner_sanct_logo_50px.png" alt="Inner Sanctuary" />
          <Typography className={classes.title} variant="h6">Inner Sanctuary Fitness</Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} href="/">Try It Now</Button>
            <Button color="inherit" component={Link} href="/">Classes</Button>
            <Button color="inherit" component={Link} href="/">About Me</Button>
            <Button color="inherit" component={Link} href="/">Contact Us</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit" onClick={handleMobileMenuOpen}>
              <MenuIcon />
            </IconButton>
          </div>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </>
  );
}
