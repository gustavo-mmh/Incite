import * as React from 'react';
import clsx from 'clsx';
import {useStyles} from '../style';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Frequencia from '../Frequencia';
// import Tempo from '../Tempo';
import SitesVisitados from '../SitesVisitados';
import MenuLat from '../MenuLat';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  export default function Dashboard() {
     const classes = useStyles();
    // const [open, setOpen] = React.useState(true);
    // const toggleDrawer = () => {
    //   setOpen(!open);
    // };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div className={classes.root}>
            <MenuLat/>
            <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3}>
            {/* Frequencia */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Frequencia />
              </Paper>
            </Grid>
            {/* Recent Tempo */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Tempo /> */}
              </Paper>
            </Grid>
            {/* Recent SitesVisitados */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SitesVisitados />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
    </Container>    
    </main>
    </div>
    );
    };