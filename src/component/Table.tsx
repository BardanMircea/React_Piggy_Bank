import React, { useEffect, useState } from "react";
import TableEntry from "../model/TableEntry";
import { FormNewEntry } from "./FormNewEntry";

export const Table: React.FC = () => {
  const [table, setTable] = useState<TableEntry[]>([]);
  const [id, setId] = useState(3); //  variable to keep and update a unique id (an alternative to using the uuiv4 library)
  const [invalidPriceMessage, setInvalidPriceMessage] = useState("");

  // useEffect to insert 3 seed values into the table ( happens once, at component mount)
  useEffect(() => {
    const initialValues = [
      {
        id: 0,
        name: "lotto ticket",
        description: "",
        price: 20,
      },
      {
        id: 1,
        name: "Beers",
        description: "Party night",
        price: -15,
      },
      {
        id: 2,
        name: "Phone Bill",
        description: "January",
        price: -29.99,
      },
    ];
    setTable(initialValues);
  }, []);

  // function to delete an entry from the table, by id
  function deleteEntry(id: number) {
    let tableCopy = [...table];
    tableCopy = tableCopy.filter((entry) => entry.id !== id);
    setTable(tableCopy);
    setInvalidPriceMessage("");
  }

  // function to calculate the Total
  function calculateTotal(arr: TableEntry[]) {
    let total = 0;

    arr.forEach((elem) => {
      total = parseInt(total.toString()) + parseInt(elem.price.toString());
    });
    return total;
  }

  return (
    <>
      <div className="wrapper">
        <div className="table-container">
          <h1>My Piggy Bank</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {table.map((entry) => {
                return (
                  <tr key={entry.id}>
                    <td>{entry.name}</td>
                    <td>{entry.description}</td>
                    <td>{entry.price}</td>
                    <td>
                      <button onClick={() => deleteEntry(entry.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="invalid-price-error">{invalidPriceMessage}</div>
          <h3>
            <strong>Total : {calculateTotal(table)}</strong>{" "}
          </h3>
        </div>
        <div className="form-container">
          <FormNewEntry
            table={table}
            setTable={setTable}
            id={id}
            setId={setId}
            calculateTotal={calculateTotal}
            setInvalidPriceMessage={setInvalidPriceMessage}
          />
        </div>
      </div>
    </>
  );
};
