import React, {Component, PropTypes} from 'react'

export default class TotalCompField extends Component {
    render() {
        return (
            <div>
                <label>Total SDR Comp</label>
                <div class='ui labeled input'>
                    <div class='ui label'>$</div>
                    <input type='text' placeholder='Total comp, including benefits'
                    >
                </div>
            </div>
        )
    }
}
