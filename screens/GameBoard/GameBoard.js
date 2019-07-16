import React from 'react';
import { Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Tiles } from '../../components/Tiles';
import { getWinner } from './GameBoard.helper';
import {
  GameBoardView, GameBoardContainer, EmptyView, WinnerText,
} from './GameBoard.style';

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
      gameOn: false,
      gameCount: 0,
      matchWinner: '',
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
        return <Icon name="circle-o" size={50} color="green" />;
      case -1:
        return <Icon name="close" size={50} color="red" />;
      default:
        return <EmptyView />;
    }
  };

  onTilePress = (row, col) => {
    const { gameState, currentPlayer, gameCount } = this.state;
    const currentValue = gameState[row][col];
    const currentPosition = gameState.slice();

    if (currentValue !== 0) {
      return;
    }

    currentPosition[row][col] = currentPlayer;

    this.setState({ gameState: currentPosition, gameOn: true, gameCount: gameCount + 1 });

    const nextPlayer = currentPlayer === 1 ? -1 : 1;
    this.setState({ currentPlayer: nextPlayer });

    const matchWinner = getWinner(gameState);

    if (matchWinner === 1) {
      this.setState({ matchWinner: 'Player 1 Wins!' });
      this.initializeGame();
    }

    if (matchWinner === -1) {
      this.setState({ matchWinner: 'Player 2 Wins!' });
      this.initializeGame();
    }

    if (matchWinner === 0 && gameCount === 8) {
      this.setState({ matchWinner: 'It\'s a Tie!' });
    }
  };

  onNewGamePress = () => {
    const { gameOn } = this.state;
    return gameOn
      ? Alert.alert('Restart Game', 'Do you want to restart the game?', [{ text: 'OK', onPress: () => this.restartGame() }])
      : this.setState({ gameOn: !gameOn });
  }

  initializeGame() {
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentPlayer: 1,
      gameOn: false,
      gameCount: 0,
    });
  }

  restartGame() {
    this.initializeGame();
    this.setState({ gameOn: true, gameCount: 0 });
  }

  render() {
    const { gameOn, matchWinner } = this.state;
    return (
      <GameBoardContainer>
        <GameBoardView>
          <Tiles onTilePress={this.onTilePress} renderIcon={this.renderIcon} disabled={!gameOn} />
          <WinnerText>{matchWinner}</WinnerText>
          <Button title={!gameOn ? 'Start New Game' : 'Restart Game'} onPress={this.onNewGamePress} />
        </GameBoardView>
      </GameBoardContainer>
    );
  }
}
