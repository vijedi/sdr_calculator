import React, {Component, PropTypes} from 'react'

export default class LabeledTextField extends Component {
    render() {
        return (
            <div className='ui fluid labeled input'>
                <div className='ui label'>$</div>
                <input type='text' placeholder={this.props.placeholder} 
                    onChange={(e) => this.handleChange(e)}
                    ref='input'
                />
            </div>
        )
    }

    handleChange(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        const cleanedValue = text.replace(/\D+/, '');
        this.props.onFieldChange(cleanedValue);
    }
}

LabeledTextField.propTypes = {
    onFieldChange: PropTypes.func, 
    fieldValue: PropTypes.object,
    placeholder: PropTypes.string.isRequired
};
