import ItemsTable from "./ItemsTable";
import PillButton from "./PillButton";

function Items() {
  // const fetchProducts = async () => {
  //   const resProducts = await getProducts();
  //   if (resProducts) {
  //     setProducts(resProducts);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div className="flex flex-col flex-1 px-5 py-10">
      <div className="flex justify-between">
        <div className="flex flex-col flex-[0.5] gap-1">
          <h1 className="text-3xl font-bold">Item Dashboard</h1>
          <p className="font-thin text-gray-500">All Items</p>
        </div>

        <div className="flex-[0.5]">
          <div className="flex items-center p-3">
            <img
              src="https://icons.veryicon.com/png/o/file-type/file-icon-collection/operation-item-registration.png"
              width={25}
              height={25}
            />
            <h4 className="ml-32 text-gray-500">Total Categories</h4>
            <h4 className="ml-auto mr-16 text-gray-500">4</h4>
          </div>

          <div className="h-[1px] w-full bg-gray-200" />

          <div className="flex items-center p-3">
            <img
              src="https://icons.veryicon.com/png/o/file-type/file-icon-collection/operation-item-registration.png"
              width={25}
              height={25}
            />
            <h4 className="ml-32 text-gray-500">Total Items</h4>
            <h4 className="ml-auto mr-16 text-gray-500">21</h4>
          </div>
        </div>
      </div>

      <PillButton title="New Item Category" onClick={() => {}} />

      {/* Table */}
      <ItemsTable />
    </div>
  );
}

export default Items;
