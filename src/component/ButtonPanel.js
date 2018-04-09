import Button from './Button';
import React from 'react';

class ButtonPanel extends React.Component {
    handleClick = (butonName) => {
        this.props.clickHandler(butonName);
    }

    render() {
        return (
            <div>
                <div>
                    <Button name="(" clickHandler={this.handleClick} />
                    <Button name=")" clickHandler={this.handleClick} />
                    <Button name="/" clickHandler={this.handleClick} />
                    <Button name="AC" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="*" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick} />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} />
                </div>
        </div>
        )
    }
}

export default ButtonPanel;