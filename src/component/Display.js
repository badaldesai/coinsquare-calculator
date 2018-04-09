import React from 'react';

class Display extends React.Component {

    handleChange = (event) => {
        const re = /[0-9,(,),+,\-,/,*,.]$/;
        const value = event.target.value;
        if(value === '' || re.test(value)) {
            this.props.changeHandler(value);
        }
    }

    handleSubmit = (event) => {
        if(event.key === 'Enter') {
            this.props.submitHandler();
        }
    }

    render() {
        return (
            <div className="display">
                <input value={this.props.value} 
                type="string"
                onChange={this.handleChange} 
                onKeyPress={this.handleSubmit} />
            </div>
        )
    }
}

export default Display;