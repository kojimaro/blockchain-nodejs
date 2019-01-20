import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Input from "../presentational/Input";
import Submit from "../presentational/Submit";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    }
});

class FormContainer extends Component {
    state = {
        message: ""
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.message.length > 0) return;
        if(this.state.message.match(/[\s\t]/)) return;

        this.props.postMessage();
    }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container}>
        <Input
            type="text"
            label="message"
            id="message"
            value={this.state.message}
            handleChange={this.handleChange}
            variant="filled"
        />
        <Submit
            variant="contained"
            color="primary"
            label="send"
            handleClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default withStyles(styles)(FormContainer);