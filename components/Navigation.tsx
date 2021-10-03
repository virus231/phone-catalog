import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link'
import Grid from '@mui/material/Grid';


export const Navigation = () => {



    return <Box sx={{ flexGrow: 1 }}>
        <AppBar color="default" position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Logo
                </Typography>
                <Toolbar>
                    <Grid container spacing={1} className="menu">
                        <Grid item>
                            <li>
                                <Link href="/" passHref>
                                    <Typography variant="subtitle2" color="secondary">
                                        Home
                                    </Typography>
                                </Link>
                            </li>
                        </Grid>
                        <Grid item>
                            <li>
                                <Link href="/catalog" passHref>
                                    <Typography variant="subtitle2" color="secondary">
                                        Phones
                                    </Typography>
                                </Link>
                            </li>
                        </Grid>
                        <Grid item>
                            <li>
                                <Link href="/catalog" passHref>
                                    <Typography variant="subtitle2" color="secondary">
                                        Tablets
                                    </Typography>
                                </Link>
                            </li>
                        </Grid>
                        <Grid item>
                            <li>
                                <Link href="/catalog" passHref>
                                    <Typography variant="subtitle2" color="secondary">
                                        Accessories
                                    </Typography>
                                </Link>
                            </li>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
}