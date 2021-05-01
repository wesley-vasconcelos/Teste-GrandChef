import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../../componentes/navBar/navBar'
import Chart from '../../componentes/chart/lineChart';
import PieChart from '../../componentes/pieChart/PieChart';
import BestSellers from '../../componentes/bestSellers/bestSellers';
import { Products } from '../../componentes/utils/utils';
import PeopleIcon from '@material-ui/icons/People';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '50px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '20px',
    marginBottom: '20px',

  },
  paperBox: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    width:'48%',
    color: theme.palette.text.secondary,
    marginTop: '20px',
    marginBottom: '20px',
    display:'flex'

  },
  paperBoxWan: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    width:'48%',
    color: '#ffff',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#ef7a1b',
    display:'flex'
  },
  TitleCard:{
    display:'flex',
    justifyContent: 'space-between',
  },
  TitleList:{
    color:'#666666',
    fontWeigth:'bold'
  },
  paperCard:{
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom:'50px'
  },
  TextName:{
    color:'#666666',
    fontWeigth:'bold'
},
box:{
  display: 'flex',
  justifyContent: 'space-around',
},
subTitleBox:{
  fontSize:'32px',
  fontWeigth:'bold'
},
cards:{
  textAlign:'left',
  paddingLeft:'20px'
},
icon:{
  width:'60px',
  height:'60px'
},
drop:{
  textAlign:'center',
  alignItems:'center',
  display:'flex'
},
container: {
  display: 'flex',
  flexWrap: 'wrap',
},
textField: {
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 200,
},
topDrop:{
  display:'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  width:'100%',
},
});

function Home(props) {
    const { classes } = props;
    const [info, setInfo] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    useEffect(() => {
     setInfo(Products)
    }, []);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return(
    <>
    <ButtonAppBar />
    <div className={classes.root}>
      <Grid container spacing={24}>  
      <Grid item xs={12} sm={1}/>
        <Grid item xs={12} sm={5}>
        <TextField id="outlined-basic" 
        label="Procurar um cliente..."
         variant="outlined" 
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
         ></TextField>
          <div className={classes.box}>
            <Paper  className={classes.paperBoxWan }>
             <ShowChartIcon className={classes.icon }/>
              <div className={classes.cards }>
              <p>Faturamento</p>
              <p className={classes.subTitleBox }>R$ 300,00</p>
              </div>
            </Paper>
            <Paper  className={classes.paperBox }>
             <PeopleIcon  className={classes.icon }/>
              <div className={classes.cards }>
              <p>Participantes</p>
              <p className={classes.subTitleBox }>100 clientes</p>
              </div>
             </Paper>
          </div>
          <Paper className={classes.paper}><Chart /></Paper>
          <Paper className={classes.paper}><PieChart /></Paper>
        </Grid>
      <Grid item xs={12} sm={1}/>
   
        <Grid item xs={12} sm={4}>
          <div className={classes.topDrop}>
          <FormControl 
           variant="outlined"
          style={{width:'48%'}}
           className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Tipo</InputLabel>
        <Select
          native
          label="Tipo"
          inputProps={{
            name: 'Tipo',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
        <form 
          style={{width:'48%'}}
         className={classes.container}
          noValidate>
      <TextField
        id="date"
        variant="outlined" 
        style={{width:'100%'}}
        label="Data"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        />
    </form>
        </div>
          <Paper style={{paddingBottom:'150px', marginTop:'20px'}} className={classes.paper}>
          <div className={classes.TitleCard}>
               <p className={classes.TitleList}>Produtos</p>
              <div className={classes.drop}> <p>Mais vendidos</p> <ArrowDropDownIcon/></div>
             </div>
            { info.map(item =>  { 
           return(
             <>
              <BestSellers item={item} />
             </>
           )
          } )}
         
          </Paper>
      <Paper className={classes.paper }>
        <div className={classes.paperCard }>
          <p>Serviços</p>
          <div className={classes.drop}><p>Mais Utilizados</p><ArrowDropDownIcon/></div>
        </div>
        <Paper style={{textAlign:'left', marginBottom:'150px',paddingTop:'20px', paddingBottom:'20px'}} className={classes.paper }>
          <p className={classes.TextName }>Permite cobrar taxa de entrega de pedidos</p>
          <p>Quantidade 33  R$ 20,00 em média</p>
        </Paper>
     </Paper>
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
