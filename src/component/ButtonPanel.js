import Button from './Button';
import React from 'react';

class ButtonPanel extends React.Component {
    handleClick = (butonName) => {
        this.props.clickHandler(butonName);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Button name="(" clickHandler={this.handleClick} className="col"/>
                    <Button name=")" clickHandler={this.handleClick} className="col"/>
                    <Button name="/" clickHandler={this.handleClick} className="col"/>
                    <Button name="AC" clickHandler={this.handleClick} className="col"/>
                </div>
                <div className="row">
                    <Button name="7" clickHandler={this.handleClick} className="col"/>
                    <Button name="8" clickHandler={this.handleClick} className="col"/>
                    <Button name="9" clickHandler={this.handleClick} className="col"/>
                    <Button name="*" clickHandler={this.handleClick} className="col"/>
                </div>
                <div className="row">
                    <Button name="4" clickHandler={this.handleClick} className="col"/>
                    <Button name="5" clickHandler={this.handleClick} className="col"/>
                    <Button name="6" clickHandler={this.handleClick} className="col"/>
                    <Button name="-" clickHandler={this.handleClick} className="col"/>
                </div>
                <div className="row">
                    <Button name="1" clickHandler={this.handleClick} className="col"/>
                    <Button name="2" clickHandler={this.handleClick} className="col"/>
                    <Button name="3" clickHandler={this.handleClick} className="col"/>
                    <Button name="+" clickHandler={this.handleClick} className="col"/>
                </div>
                <div className="row">
                    <Button name="0" clickHandler={this.handleClick} className="col"/>
                    <Button name="." clickHandler={this.handleClick} className="col"/>
                    <Button name="=" clickHandler={this.handleClick} className="col"/>
                </div>
        </div>
        )
    }
}

export default ButtonPanel;