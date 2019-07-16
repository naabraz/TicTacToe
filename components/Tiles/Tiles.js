import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { TilesGroup, TileIcon, Tile } from './Tiles.style';

const firstColum = [[0, 0], [0, 1], [0, 2]];
const secondColum = [[1, 0], [1, 1], [1, 2]];
const thirdColum = [[2, 0], [2, 1], [2, 2]];

export const Tiles = props => (
  <Fragment>
    <TilesGroup>
      {firstColum.map(item => (
        <Tile
          key={item[1]}
          onPress={() => props.onTilePress(item[0], item[1])}
        >
          <TileIcon>{props.renderIcon(item[0], item[1])}</TileIcon>
        </Tile>
      ))}
    </TilesGroup>

    <TilesGroup>
      {secondColum.map(item => (
        <Tile
          key={item}
          onPress={() => props.onTilePress(item[0], item[1])}
        >
          <TileIcon>{props.renderIcon(item[0], item[1])}</TileIcon>
        </Tile>
      ))}
    </TilesGroup>

    <TilesGroup>
      {thirdColum.map(item => (
        <Tile
          key={item}
          onPress={() => props.onTilePress(item[0], item[1])}
        >
          <TileIcon>{props.renderIcon(item[0], item[1])}</TileIcon>
        </Tile>
      ))}
    </TilesGroup>
  </Fragment>
);

Tiles.propTypes = {
  onTilePress: PropTypes.func.isRequired,
  renderIcon: PropTypes.func.isRequired,
};
