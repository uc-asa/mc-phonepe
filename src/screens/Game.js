
import React from 'react';
import {
  View,
  Image,
  TouchableNativeFeedback,
  Text
} from 'react-native';

import Header from './Heder';
import styles from '../styles';
import imageList from '../images/index';
import utils from '../utility';
import Result from '../components/Result';
import Timer from '../components/Timer';

export default class Game extends Header {
    constructor(props) {
        super(props);
        const grid = utils.getParams(props.navigation).data;
        this.state = {
            grid,
            showImage: [],
            pause: false
        }
    }
    componentDidMount() {
        this.initGame(this.state.grid.row, this.state.grid.col)

    }

    // Initializing the game
    initGame(row, col) {
        let image = [];
        for (let i = 0; i<row*col/2; i++) {
            image.push(
                imageList[`image${i+1}`],
                imageList[`image${i+1}`]
            )
        }
        this.setState({ isFinish: false, timer: 100 }) ;
        this.image = utils.shuffle(image);
        this.score = 0;
        this.arr = [];
    }
    // Save data and manage the image showing 
    saveData(index, image) {
        if (this.arr.length < 1) {
            this.arr[0] = { index, image };
            this.setState({ showImage: [index] });
        }
        else if (this.arr[0]) {
            const { showImage } = this.state;
            this.arr[1] = { index, image };
            showImage.push(index)
            this.setState({ showImage });
            this.resetGrid();
        }
    }
    // Reset Grid after 500 mili sec when second grid pressed
    resetGrid() {
        setTimeout(() => {
            if (this.arr[0] && this.arr[1]) {
                if (this.arr[0].image ===  this.arr[1].image) {
                    // Remove elemt from list
                    if (this.image.indexOf(this.arr[0].image) > -1) {
                        this.image.splice(this.image.indexOf(this.arr[0].image), 1)
                    }
                    
                    if (this.image.indexOf(this.arr[1].image) > -1) {
                        this.image.splice(this.image.indexOf(this.arr[1].image), 1)
                    }
                    
                    // Adding 10 point once choose the correct images
                    this.score += 10;

                    if (this.image.length ===0) {
                        this.setState({ isFinish: true }) ;
                    }
                }
            }
            
            this.arr = [];
            this.setState({ showImage: [], })
        }, 500)
    }
    renderGrid() {
        const { grid } = this.state;
        const images = Object.assign([], this.image);
        const row = []
        for (let i=0; i<grid.row; i++) {
            const col = [];
            const rowStyle = {
                height: `${+(100/grid.row)}%`,
            }
            for (let j=0; j<grid.col; j++) {
                const colStyle = {
                    width: `${+(100/grid.col)}%`,
                }
                const image = images.shift();
                if (image) {
                    col.push(
                        <TouchableNativeFeedback
                            onPress={() => this.saveData(`${i}_${j}`, image)}
                            key={`col_${i}_${j}`}
                        >
                            <View
                                style={[styles.grid, colStyle]}
                            >
                                {
                                    this.state.showImage.indexOf(`${i}_${j}`) > -1  ?
                                    <Image
                                        source={image}
                                        style={[styles.image]}
                                    />: null
                                }
                                
                            </View>
                        </TouchableNativeFeedback>
                    )
                }
            }
            row.push(
                <View
                    key={`row_${i}`}
                    style={[styles.row, rowStyle]}
                >
                    {col}
                </View>
            )
        }
        return row;
    }
    playMode() {
        this.setState({ pause: !this.state.pause })
    }
    gameEnd(timer) {
        this.setState({ result: timer+ this.score });
    }
    pauseTimer(timer) {
        this.setState({ timer });
    }
    render() {
        // Shwoing the result once game end 
        if (this.state.result) {
            return(<Result score={this.state.result}/>)
        }
        return(
            <View style={styles.mainContainer}>
                <Timer
                    timer={this.state.timer}
                    pause={this.state.pause}
                    gameEnd={this.gameEnd.bind(this)}
                    pauseTimer={this.pauseTimer.bind(this)}
                    isFinish={this.state.isFinish}
                />
                {this.renderGrid()}
                <Text onPress={() => this.playMode()}>{this.state.pause ? 'Resume': 'Pause'}</Text>
            </View>
        )
    }
}

