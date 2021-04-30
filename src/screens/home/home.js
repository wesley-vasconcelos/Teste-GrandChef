import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../../componentes/navBar/navBar'
import Chart from '../../componentes/chart/lineChart';
import PieChart from '../../componentes/pieChart/PieChart';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '50px'
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '20px',
    marginBottom: '20px',

  },
});

function Home(props) {
    const { classes } = props;

    return(
    <>
    <ButtonAppBar />
    <div className={classes.root}>
      <Grid container spacing={24}>  
      <Grid item xs={12} sm={1}/>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper}><Chart /></Paper>
          <Paper className={classes.paper}><PieChart /></Paper>


        </Grid>
      <Grid item xs={12} sm={1}/>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>list</Paper>
        </Grid>
      <Grid item xs={12} sm={1}/>
      </Grid>
    </div>    
    </>
    )
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Home);
