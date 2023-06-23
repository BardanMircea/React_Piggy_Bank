import TableEntry from "../model/TableEntry";

interface FormNewEntryProps {
  table: TableEntry[];
  setTable: any;
  id: number;
  setId: any;
  calculateTotal: any;
  setInvalidPriceMessage: any;
}

export const FormNewEntry: React.FC<FormNewEntryProps> = (props) => {
  const { table, setTable, id, setId, calculateTotal, setInvalidPriceMessage } =
    props;

  function addEntry(e: any) {
    setInvalidPriceMessage("");
    e.preventDefault();

    const newEntry = {
      id: id,
      name: e.currentTarget.name.value,
      description: e.currentTarget.description.value,
      price: e.currentTarget.price.value,
    };

    let updatedTable = [...table, newEntry];
    if (!isNaN(newEntry.price)) {
      calculateTotal(updatedTable);
      setTable(updatedTable);
    } else {
      setInvalidPriceMessage("Invalid price. Nothing added");
    }

    // increment the id for the next entry
    setId((prevValue: number) => prevValue + 1);

    console.log(updatedTable);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={(e) => addEntry(e)}>
        <h2>Add New Expense</h2>
        <div className="row-container">
          <p>Name</p>
          <input type="text" name="name" />
        </div>
        <div className="row-container">
          <p>Description</p>
          <input type="text-area" name="description" />
        </div>
        <div className="row-container">
          <p>Price</p>
          <input type="text" name="price" />
        </div>

        <div className="btn-submit">
          <input type="submit" value="Add Expense" />
        </div>
      </form>
    </>
  );
};
