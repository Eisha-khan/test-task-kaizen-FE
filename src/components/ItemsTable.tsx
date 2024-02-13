import { Box } from "@mui/material";
import PillButton from "./PillButton";
import Search from "./Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "sku", headerName: "SKU", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 350,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 150,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "number",
    width: 170,
  },
  {
    field: "availableStock",
    headerName: "Available Stock",
    type: "number",
    width: 170,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ItemsTable = () => {
  return (
    <div className="mt-14">
      {/* Header */}
      <div className="flex justify-between px-5 py-3 bg-gray-300 tracking-wider rounded-md shadow-md shadow-gray-400">
        <h3>4 Subcategories</h3>
        <h3>{">"}</h3>
      </div>

      {/* Search */}
      <div className="shadow-md shadow-gray-300 rounded-md">
        <div className="flex p-6 border-b border-gray-100 justify-between">
          <div className="flex items-center gap-5">
            <PillButton title="New Item" onClick={() => {}} />
            <PillButton title="Options" onClick={() => {}} disabled />
          </div>

          <div className="flex gap-6">
            <Search />
            <PillButton
              imageSrc="https://icons.veryicon.com/png/o/file-type/file-icon-collection/operation-item-registration.png"
              onClick={() => {}}
              cutomClassName="bg-slate-500/80"
            />
            <PillButton
              imageSrc="https://icons.veryicon.com/png/o/file-type/file-icon-collection/operation-item-registration.png"
              onClick={() => {}}
              cutomClassName="bg-gray-600"
            />
          </div>
        </div>

        {/* Table */}
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default ItemsTable;
