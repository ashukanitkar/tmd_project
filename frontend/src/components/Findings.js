import React from 'react';
import left_channels_wc from "../left_channels.png"
import right_channels_wc from "../right_channels.png"
import center_channels_wc from "../control_channels.png"

class Findings extends React.Component {
    render() {
        return (
            <div>
            <p>Left Channels</p>
            <img src={left_channels_wc}/>
            <p>Right Channels</p>
            <img src={right_channels_wc}/>
            <p> Control Channels </p>
            <img src={center_channels_wc}/>
            </div>
        )
    }
}

export default Findings