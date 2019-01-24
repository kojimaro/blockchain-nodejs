import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Submit from "./Submit";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    buttonRight: {
        marginLeft: 'auto'
    }
})

const FormHeader = props => {
    const { classes, addInput } = props;

    return(
        <div className={classes.container}>
            <Submit
                variant="contained"
                color="secondary"
                label="add"
                handleClick={addInput}
            />
            <div className={classes.buttonRight}>
                <Submit
                    variant="contained"
                    color="primary"
                    label="send"
                    handleClick={addInput}
                />
            </div>
        </div>
    );
}

export default withStyles(styles)(FormHeader)