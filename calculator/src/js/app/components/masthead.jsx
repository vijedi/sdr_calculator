import React, {Component, PropTypes}  from 'react';

export default class Masthead extends Component {
    render() {
        return (
            <div className='ui inverted vertical masthead center aligned segment'>
                <div className='ui text container'>
                    <h1 className='ui inverted header'>
                        Could you use an SDR?
                    </h1>
                    <h2>Sales Development Representatives are all the rage, but will adding one bring value to your company?</h2>
                    <div className='ui huge primary button'>Find Out <i className='right arrow icon'></i></div>
                </div>
            </div>
        )
    }
}
