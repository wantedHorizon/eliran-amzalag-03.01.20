import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { degreeSwitch } from '../store/actions';
import { connect } from 'react-redux';

import { FormControlLabel, Switch as SwitchUI } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const mapStateToProps = (state) => {

    return { isCelsius: state.isCelsius }
};



const ButtonAppBar = ({ isCelsius, degreeSwitch, darkmode, setDarkState }) => {
    // const [isCel, setAlignment] = React.useState(true);

    // const handleAlignment = (event, newAlignment) => {
    //   setAlignment(newAlignment);
    // };

    const classes = useStyles();
    // const degreeChange = (e) => {
    //     console.log(e.target.value );
    //     // degreeSwitch(e.target.value)
    // }
    return (
        <div className={classes.root}>
            <AppBar position="static" color='primary' >
                <Toolbar style={{ background: 'var(--toolbar-background)' }}>

                    <Typography variant="h6" className={classes.title} >
                        Herolo Weather App

                        <FormControlLabel
                            style={{ background: 'transparent', marginLeft:'10px' }}
                            control={<SwitchUI checked={darkmode} onChange={(e, val) => setDarkState(val)} name="checkedA" />}
                            label="DarkMode"
                        />
                    </Typography>

                    <ToggleButtonGroup
                        value={isCelsius}
                        exclusive
                        style={{ background: 'white' }}
                        onChange={(e, val) => degreeSwitch(val)}
                        aria-label="text alignment"
                    >
                        <ToggleButton value={true} aria-label="left aligned">
                            Celsius &#8451;
                            </ToggleButton>
                        <ToggleButton value={false} aria-label="centered">
                            Fahrenheit &#8457;
                            </ToggleButton>

                    </ToggleButtonGroup>

                    <Button color="inherit">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }} to="/" exact>Home
                    </NavLink>
                    </Button>

                    <Button color="inherit">
                        <NavLink
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                            to="/favorites"
                        >
                            Favorites
                     </NavLink>

                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default connect(mapStateToProps, { degreeSwitch })(ButtonAppBar);
