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
        messages: [{value:""}],
    }

    addInput = (event) => {
        event.preventDefault();
        this.setState({messages: this.state.messages.concat({value:""})})
    }

    createInput = index => {
        return (
            <div key={index}>
                <Input
                    type="text"
                    label={"message-"+index}
                    id={index.toString()}
                    value={this.state.messages[index].value}
                    handleChange={this.handleChange}
                    variant="filled"
                />
            </div>
        );
    }

    handleChange = event => {
        let index = Number(event.target.id);
        let messages = [...this.state.messages];
        messages[index].value = event.target.value;

        this.setState({messages}, ()=>console.log(this.state.messages));
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
        {this.state.messages.map((obj, index)=>this.createInput(index))}
        <Submit
            variant="contained"
            color="primary"
            label="send"
            handleClick={this.addInput}
        />
      </form>
    );
  }
}

export default withStyles(styles)(FormContainer);