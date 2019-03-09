// Timer 

import React from 'react';
import {
  Text,
} from 'react-native';
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            timer: props.timer || 100,
        }
    }
    componentDidMount() {
        this.updateTimer(this.props);
    }
	componentWillUnmount() {
		this.clear()
    }
    clear() {
        clearTimeout(this.timer);
    }
    componentDidUpdate(nextProps) {
        if (nextProps.pause !== this.props.pause) {
            this.setState({ timer: this.props.timer });
            this.updateTimer();
        }
    }
    updateTimer() {
        if (this.props.pause) {
            this.props.pauseTimer(this.state.timer)
            clearTimeout(this.timer);
            return;
        }
        if (this.state.timer > 0 ) {
            if (!this.props.isFinish) {
                this.setState({ timer: this.state.timer - 1 });
                this.timer = setTimeout(() => {
                    this.updateTimer();
                }, 100);
            }
        } else {
            this.props.gameEnd(this.state.timer);
            this.clear()
        }
        if (this.props.isFinish) {
            this.props.gameEnd(this.state.timer);
            this.clear()
        }
    }

    render() {
        return(
            <Text>{this.state.timer}</Text>
        )
    }
}
