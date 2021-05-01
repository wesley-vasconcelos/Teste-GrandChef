import React from 'react'
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cocaImage  from '../assets/coca-cola.png'
import burguerImage from '../assets/hamburger.jpg'
import espetoImage from '../assets/espeto.png'
const styles = theme => ({
    paper:{
        padding: theme.spacing.unit * 1,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: theme.palette.text.secondary,
        marginBottom: '20px',
    },
    TextRight:{
        textAlign:'right'
    },
    TextLeft:{
        textAlign:'left'
    },
    promotion:{
        color:'#bcdfbf'
    },
    drink:{
        padding: theme.spacing.unit * 1,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: theme.palette.text.secondary,
        marginTop: '20px',
        borderLeftColor:'#b47c45',
        borderLeft: '3px solid transparent'
    },
    food:{
        padding: theme.spacing.unit * 1,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        color: theme.palette.text.secondary,
        marginTop: '20px',
        borderLeftColor:'#debea2',
        borderLeft: '3px solid transparent',

    },
    TextName:{
        color:'#666666',
        fontWeigth:'bold'
    },
  });


function BestSellers(props) {
    
    const { classes , item} = props;
    return(
            <>
     <Paper className={item.type == 'drink'? classes.drink : classes.food }>
        <div style={{display:'flex'}}>
        <img style={{width:'40px', height:'40px'}} src={item.name == 'Coca-Cola 350mL'? cocaImage : item.name == 'X-Burguer' ? burguerImage : espetoImage} />
         <div style={{paddingLeft:'10px'}} className={classes.TextLeft}>
             <p className={classes.TextName}>{item.name}</p>
             <p>{item.amount}</p>
         </div>
        </div>
         <div className={classes.TextRight}>
         <p>Preço /  Promoção</p>
         <p> R$ {item.price} / <span className={classes.promotion}>{item.promotion}</span></p>
         </div>
     </Paper>
     { item.points ?
     <Paper className={classes.paper }>
         <div className={classes.TextLeft}>
             <p>{item.points}</p>
         </div>
         <div className={classes.TextRight}>
         <p>{item.rescue}</p>
         </div>
     </Paper> : <></>
     }
     </>
    )
}

BestSellers.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(BestSellers);
