import React from 'react';

class Button extends React.Component {

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        return(
            <div className="button-container">
                <button className="button" onClick={this.handleClick} >
                    {this.props.name}
                </button>
            </div>
        )
    }
}

export default Button;