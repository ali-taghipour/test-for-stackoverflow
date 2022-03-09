export const getTable = (tableName: string, tables: any) => {
  let returnTable = [];

  tables.forEach((table) => {
    if (table.name === tableName) {
      returnTable = table;
    }
  });

  if (returnTable.length === 0) {
    return undefined;
  }

  return returnTable;
};
