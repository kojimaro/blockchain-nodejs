import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

const Input = ({label, type, id, value, handleChange, variant}) => {
    return(
        <div className="form-group">
            <TextField
                type={type}
                label={label}
                className="form-control"
                id={id}
                value={value}
                onChange={handleChange}
                variant={variant}
                required
            />
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired
}

export default Input;