import React, {Component, PropTypes} from 'react'

export default class LabeledTextField extends Component {
    render() {
        let labelLocation = (this.props.labelPlacement == 'right') ? 'right' : '';
        return (
            <div className={'ui fluid ' + labelLocation + ' labeled input'}>
                {(() => {
                    if('' == labelLocation) {
                        return (<div className='ui label'>{this.props.label}</div>)
                    }
                })()}
                <input type='text' placeholder={this.props.placeholder} 
                    onChange={(e) => this.handleChange(e)}
                    onFocus={(e) => this.selectAll(e)}
                    defaultValue={this.props.fieldValue}
                    ref='input'
                />
                {(() => {
                    if('right' == labelLocation) {
                        return (<div className='ui label'>{this.props.label}</div>)
                    }
                })()}
            </div>
        )
    }

    handleChange(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        const cleanedValue = text.replace(/[^\d.]+/, '');
        this.props.onFieldChange(cleanedValue);
    }

    selectAll(e) {
        const node = this.refs.input;
        $(node).select();
    }
}

LabeledTextField.propTypes = {
    onFieldChange: PropTypes.func, 
    fieldValue: PropTypes.node,
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelPlacement: PropTypes.string
};
