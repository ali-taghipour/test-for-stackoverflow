import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDecimalTable } from "./redux/remap-tables/remap-tables.selectors";
import { Box, Typography } from "@mui/material";
import { SelectableGroup } from "react-selectable-fast";
import { createColorPalette } from "./utils/createColorPalette";

import ActionButton from "./ActionButton/ActionButton";
import SelectableCell from "./Cell/Cell";
import BarChart from "./BarChart/BarChart";

import { setCellsPosition } from "./redux/remap-tables/remap-tables.actions";

import { styles } from "./App.style";

export default function App() {
  const classes = styles();
  const dispatch = useDispatch();

  const handleSelectionFinish = async (selectedItems) => {
    const cellsPosition = [];
    await selectedItems.forEach((item) => {
      cellsPosition.push(item.props.cellPosition);
    });

    dispatch(setCellsPosition(cellsPosition));
  };
  const getSelectableGroupRef: any = useRef((ref: SelectableGroup | null) => {
    (window as any).selectableGroup = ref;
  });

  let table: any = useSelector((state) => {
    return selectDecimalTable(state);
  });

  const colorsRange = createColorPalette(table);
  return (
    <Box>
      <ActionButton />
      <Typography
        display="flex"
        justifyContent="center"
        gutterBottom
        variant="caption"
      >
        ({table.X_Axis.description} / {table.Y_Axis.description})
      </Typography>

      <SelectableGroup
        ref={getSelectableGroupRef}
        enableDeselect={true}
        deselectOnEsc={true}
        allowClickWithoutSelected={true}
        onSelectionFinish={handleSelectionFinish}
      >
        <table cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th className={classes.unit}>
                {table.Y_Axis.unit} / {table.X_Axis.unit}
              </th>
              {table.X_Axis.value[0].map((item, index) => (
                <th
                  onContextMenu={(e) => e.preventDefault()}
                  className={classes.unit}
                  key={`hour-${item[1]}`}
                >
                  <input
                    className={classes.unitInput}
                    contentEditable
                    placeholder={item[1]}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.value.map((row, rowIndex: number) => (
              <tr key={`day-${rowIndex}`}>
                <td
                  onContextMenu={(e) => e.preventDefault()}
                  className={classes.unit}
                >
                  <input
                    className={classes.unitInput}
                    contentEditable
                    placeholder={table.Y_Axis.value[0][rowIndex][1]}
                  />
                </td>
                {row.map((cell, cellIndex) => (
                  <td key={`dayTime-${cellIndex}-${cell[1]}`}>
                    <SelectableCell
                      value={cell[1]}
                      color={colorsRange.get(cell[1])}
                      cellPosition={[rowIndex, cellIndex]}
                    />
                  </td>
                ))}
                <BarChart row={row} />
              </tr>
            ))}
          </tbody>
        </table>
      </SelectableGroup>
    </Box>
  );
}
