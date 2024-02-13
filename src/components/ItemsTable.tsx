import { Box } from "@mui/material";
import PillButton from "./PillButton";
import Search from "./Search";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ChartBarIcon, FunnelIcon } from "@heroicons/react/24/outline";

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
  {
    id: 1,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 2,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 3,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 4,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 5,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 6,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 7,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
  {
    id: 8,
    sku: "ETSY-FOREST",
    name: "Etsy Bundle Pack",
    tags: "4",
    category: "Bundles",
    inStock: 5,
    availableStock: 10,
  },
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
              Icon={<ChartBarIcon className="icon" />}
              onClick={() => {}}
              cutomClassName="bg-slate-500/80"
            />
            <PillButton
              Icon={<FunnelIcon className="icon" />}
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
