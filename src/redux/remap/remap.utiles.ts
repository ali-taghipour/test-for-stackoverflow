import {
  Buffer8bitDataType,
  Buffer16bitDataType
} from "../../models/buffer-list.model";

const increaseTable = (info: any, table: any, cellsPostion: number[][]) => {
  cellsPostion.forEach((position) => {
    table[0][position[0]][position[1]][1] =
      table[0][position[0]][position[1]][1] + 1;
  });

  info[table[1]].value = table[0];
};

export const setLineChartChange = (
  tableName: string,
  buffer: Buffer8bitDataType[] | Buffer16bitDataType[],
  info: any[]
) => {
  try {
    info.forEach((row) => {
      if (row.name === tableName) {
        row.value = buffer;
      }
    });
  } finally {
    return info;
  }
};

// INCREASE_TABLE: "INCREASE_TABLE",
//     DECREASE_TABLE: "DECREASE_TABLE",
//     CHANGE_ABSOLUTE_TABLE: "CHANGE_ABSOLUTE_TABLE",
//     CHANGE_VALUE_TABLE: "CHANGE_VALUE_TABLE",
//     CHANGE_BY_EDIT_TABLE: "CHANGE_BY_EDIT_TABLE",
//     AMOUNT_DISTANCE_TABLE: "AMOUNT_DISTANCE_TABLE",
//     PERCENTAGE_DISTANCE_TABLE: "PERCENTAGE_DISTANCE_TABLE",
//     SHOW_INITIALS_VALUES_TABLE: "SHOW_INITIALS_VALUES_TABLE"

export const setActionOnTable = (
  tableName: string,
  actionType: string,
  info: any[],
  cellsPosition: number[][]
) => {
  try {
    const table = [];
    info.forEach((row, index) => {
      if (row.name === tableName) {
        table.push(row.value);
        table.push(index);
      }
    });

    switch (actionType) {
      case "INCREASE_TABLE":
        increaseTable(info, table, cellsPosition);
    }
  } finally {
    return info;
  }
};
