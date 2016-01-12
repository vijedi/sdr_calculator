import React, {Component, PropTypes} from 'react'

export default class LabeledTextField extends Component {
    render() {
        return (
            <div className='ui fluid labeled input'>
                <div className='ui label'>$</div>
                <input type='text' placeholder={this.props.placeholder} />
            </div>
        )
    }
}

LabeledTextField.propTypes = {
    placeholder: PropTypes.string.isRequired
};
