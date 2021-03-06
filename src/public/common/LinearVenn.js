import React from 'react';
import withTheme from '@material-ui/core/styles/withTheme';

const WIDTH = 400;
const HEIGHT = 18;

const LinearVenn = ({ theme, aOnly, aAndB, bOnly, max }) => {
  const aOnlyStart = 0;
  const aOnlyWidth = (WIDTH * aOnly) / max;
  const aAndBStart = aOnlyStart + aOnlyWidth;
  const aAndBWidth = (WIDTH * aAndB) / max;
  const bOnlyStart = aAndBStart + aAndBWidth;
  const bOnlyWidth = (WIDTH * bOnly) / max;

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <defs>
        <pattern
          id="diagonalHatch"
          width="4"
          height="4"
          patternTransform="rotate(45 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="4"
            strokeWidth="2"
            stroke={theme.palette.primary.main}
          />
          <line
            x1="3"
            y1="0"
            x2="3"
            y2="4"
            strokeWidth="2"
            stroke={theme.palette.secondary.main}
          />
        </pattern>
      </defs>
      <g>
        <rect
          x={aOnlyStart}
          y={0}
          width={aOnlyWidth}
          height={HEIGHT}
          fill={theme.palette.primary.main}
          stroke={'white'}
        />
        <rect
          x={aAndBStart}
          y={0}
          width={aAndBWidth}
          height={HEIGHT}
          fill="url(#diagonalHatch)"
          stroke={'white'}
        />
        <rect
          x={bOnlyStart}
          y={0}
          width={bOnlyWidth}
          height={HEIGHT}
          fill={theme.palette.secondary.main}
          stroke={'white'}
        />
      </g>
    </svg>
  );
};

const LEGEND_SQUARE_SIZE = 15;
const LEGEND_PADDING = 3;
const Legend = ({ theme, a, b, aAndB }) => (
  <svg width={WIDTH} height={LEGEND_SQUARE_SIZE * 3 + LEGEND_PADDING * 2}>
    <defs>
      <pattern
        id="diagonalHatchLegend"
        width="4"
        height="4"
        patternTransform="rotate(45 0 0)"
        patternUnits="userSpaceOnUse"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="4"
          strokeWidth="2"
          stroke={theme.palette.primary.main}
        />
        <line
          x1="3"
          y1="0"
          x2="3"
          y2="4"
          strokeWidth="2"
          stroke={theme.palette.secondary.main}
        />
      </pattern>
    </defs>
    <g>
      <rect
        x={0}
        y={0}
        width={LEGEND_SQUARE_SIZE}
        height={LEGEND_SQUARE_SIZE}
        fill={theme.palette.primary.main}
        stroke={'white'}
      />
      <text
        x={LEGEND_SQUARE_SIZE + LEGEND_PADDING}
        y={LEGEND_SQUARE_SIZE / 2}
        fill={theme.palette.text.primary}
        dominantBaseline="middle"
      >
        {a}
      </text>
    </g>
    <g transform={`translate(0,${LEGEND_SQUARE_SIZE + LEGEND_PADDING})`}>
      <rect
        x={0}
        y={0}
        width={LEGEND_SQUARE_SIZE}
        height={LEGEND_SQUARE_SIZE}
        fill="url(#diagonalHatchLegend)"
        stroke={'white'}
      />
      <text
        x={LEGEND_SQUARE_SIZE + LEGEND_PADDING}
        y={LEGEND_SQUARE_SIZE / 2}
        fill={theme.palette.text.primary}
        dominantBaseline="middle"
      >
        {aAndB}
      </text>
    </g>
    <g
      transform={`translate(0,${LEGEND_SQUARE_SIZE * 2 + LEGEND_PADDING * 2})`}
    >
      <rect
        x={0}
        y={0}
        width={LEGEND_SQUARE_SIZE}
        height={LEGEND_SQUARE_SIZE}
        fill={theme.palette.secondary.main}
        stroke={'white'}
      />
      <text
        x={LEGEND_SQUARE_SIZE + LEGEND_PADDING}
        y={LEGEND_SQUARE_SIZE / 2}
        fill={theme.palette.text.primary}
        dominantBaseline="middle"
      >
        {b}
      </text>
    </g>
  </svg>
);

export const LinearVennLegend = withTheme()(Legend);

export default withTheme()(LinearVenn);
