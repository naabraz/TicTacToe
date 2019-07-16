import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { TilesGroup, TileIcon, TileTouch } from './Tiles.style';

const firstColum = [[0, 0], [0, 1], [0, 2]];
const secondColum = [[1, 0], [1, 1], [1, 2]];
const thirdColum = [[2, 0], [2, 1], [2, 2]];

export const Tiles = props => (
  <Fragment>
    <TilesGroup>
      {firstColum.map(item => (
        <TileTouch
          disabled={props.disabled}
          key={item[1]}
          onPress={() => props.onTilePress(item[0], item[1])}
        >
          <TileIcon>{props.renderIcon(item[0], item[1])}</TileIcon>
        </TileTouch>
      ))}
    </TilesGroup>

    <TilesGroup>
      {secondColum.map(item => (
        <TileTouch
          disabled={props.disabled}
          key={item}
          onPress={() => props.onTilePress(item[0], item[1])}
        >
          <TileIcon>{props.renderIcon(item[0], item[1])}</TileIcon>
        </TileTouch>
      ))}
    </TilesGroup>

    <TilesGroup>
      {thirdColum.map(item => (
        <TileTouch
          disabled={props.disabled}
          key={item}
          onPress={() => props.onTilePress(item[0], item[1])}
        >
          <TileIcon>{props.renderIcon(item[0], item[1])}</TileIcon>
        </TileTouch>
      ))}
    </TilesGroup>
  </Fragment>
);

Tiles.propTypes = {
  onTilePress: PropTypes.func.isRequired,
  renderIcon: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
