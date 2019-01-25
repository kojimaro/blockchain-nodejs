import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Input from "../presentational/Input";
import FormHeader from "../presentational/FormHeader";

const styles = theme => ({
    container: {
        marginTop: theme.spacing.unit * 2,
    },
    textField: {
        width: '100%',
        marginBottom: theme.spacing.unit * 2,
    },
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
        const { classes } = this.props;
        return (
            <div className={classes.textField} key={index}>
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
        if(event.target.value.match(/[\s\t]/)) return;

        let index = Number(event.target.id);
        let messages = [...this.state.messages];
        messages[index].value = event.target.value;

        this.setState({messages});
    }

    handleSubmit = event => {
        event.preventDefault();
        let messages = this.state.messages;
        const data = messages.map(message => message.value)
        this.props.postMessage(data);
    }

  render() {
    const { classes } = this.props;

    return (
        <div>
            <FormHeader 
                addInput={this.addInput} 
                handleSubmit={this.handleSubmit}
            />
            <form className={classes.container}>
                {this.state.messages.map((obj, index)=>this.createInput(index))}
            </form>
        </div>
    );
  }
}

export default withStyles(styles)(FormContainer);