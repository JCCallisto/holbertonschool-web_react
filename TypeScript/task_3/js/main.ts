/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert row and get the ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Update and delete operations
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
