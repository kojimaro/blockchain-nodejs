import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

const Submit = props => {
    const {
        variant,
        color,
        label,
        handleClick
    } = props;

    return(
        <Button
            type="submit"
            variant={variant}
            color={color}
            onClick={handleClick}
        >
        {label}
        </Button>
    );
}

Submit.propTypes = {
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Submit;