import React from 'react';
import { Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Tiles } from '../../components/Tiles';
import { getWinner } from './GameBoard.helper';
import { GameBoardView, GameBoardContainer, EmptyView } from './GameBoard.style';

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
    };
  }

  componentDidMount() {
    this.initializeGame();
  }

  renderIcon = (row, col) => {
    const { gameState } = this.state;
    const value = gameState[row][col];

    switch (value) {
      case 1:
        return <Icon name="close" size={50} color="red" />;
      case -1:
        return <Icon name="circle-o" size={50} color="green" />;
      default:
        return <EmptyView />;
    }
  };

  onTilePress = (row, col) => {
    const { gameState, currentPlayer } = this.state;
    const currentValue = gameState[row][col];
    const currentPosition = gameState.slice();

    if (currentValue !== 0) {
      return;
    }

    currentPosition[row][col] = currentPlayer;

    this.setState({ gameState: currentPosition });

    const nextPlayer = currentPlayer === 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });

    const matchWinner = getWinner(gameState);

    if (matchWinner === 1) {
      Alert.alert('Player 1 is the winner');
      this.initializeGame();
    }

    if (matchWinner === -1) {
      Alert.alert('Player 2 is the winner');
      this.initializeGame();
    }
  };

  onNewGamePress = () => {
    this.initializeGame();
  }

  initializeGame() {
    this.setState({ gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], currentPlayer: 1 });
  }

  render() {
    return (
      <GameBoardContainer>
        <GameBoardView>
          <Tiles onTilePress={this.onTilePress} renderIcon={this.renderIcon} />
          <Button title="New Game" onPress={this.onNewGamePress} />
        </GameBoardView>
      </GameBoardContainer>
    );
  }
}
