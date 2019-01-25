import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormContainer from "./components/container/FormContainer";

import './App.css';

const styles = theme => ({
    height100: {
        height: "100%",
    },
    topArea: {
        height: "30%",
        padding: theme.spacing.unit * 2,
        //backgroundColor: "#2c2c2c",
        backgroundColor: "#FAFAFA",
    },
    bottomArea: {
        height: "100%",
        padding: theme.spacing.unit * 2,   
    }
});

class App extends Component {
    state = {
        blocks: [],
    }

    componentDidMount() {
        this.getBlocks();
    }

    getBlocks = async() => {
        const response = await fetch('/blocks');
        const result = await response.json();
        this.setState({blocks: result});
        console.log(this.state.blocks);
    }

    postMessage = async (messages) => {
        const data = {'messages': messages};
        let response = await fetch('/mine', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        let result = await response.json();
        this.setState({blocks: this.state.blocks.concat([result])});
    }

    render() {
        const { classes } = this.props;
        return(
            <Grid className={classes.height100}>
                <Grid item xs={12} className={classes.topArea}>
                    {JSON.stringify(this.state.blocks)}
                </Grid>
                <Grid className={classes.height100}>
                    <Grid item xs={4} className={classes.height100}>
                        <Paper 
                            className={classes.bottomArea}
                            elevation={4}>
                            <FormContainer postMessage={this.postMessage}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(App);