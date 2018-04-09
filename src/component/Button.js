import React from 'react';

class Button extends React.Component {

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        return(
            <button onClick={this.handleClick} className="btn btn-light" >
                {this.props.name}
            </button>
        )
    }
}

export default Button;