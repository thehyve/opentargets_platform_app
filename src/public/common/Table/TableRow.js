import React from 'react';
import classNames from 'classnames';
import { Hidden, TableCell, TableRow as MUITableRow } from '@material-ui/core';

import { getHiddenBreakpoints } from './utils';
import { tableStyles } from './tableStyles';

function TableRow({ columns, hover, isFixedRow, noWrap, row, style }) {
  const classes = tableStyles();

  return (
    <MUITableRow
      classes={{ root: classNames(isFixedRow && classes.rowFixed) }}
      hover={hover}
    >
      {columns.map((column, i) => (
        <Hidden {...getHiddenBreakpoints(column)} key={`header-${column.id}`}>
          <TableCell
            align={
              column.align ? column.align : column.numeric ? 'right' : 'left'
            }
            classes={{
              root: classNames(
                classes.cell,
                classes.cellBody,
                column.numeric && classes.tabularNums,
                column.sticky && classes.cellSticky,
                noWrap && classes.noWrap
              ),
            }}
            component={column.sticky ? 'th' : 'td'}
            key={`tablecell-${column.id}`}
            style={{ ...column.style, ...row.rowStyle, ...style }}
          >
            {column.renderCell ? column.renderCell(row) : row[column.id]}
          </TableCell>
        </Hidden>
      ))}
    </MUITableRow>
  );
}

export default TableRow;
