import React, { useEffect, useState } from "react"
import TableEntry from "../model/TableEntry"
import { FormNewEntry } from "./FormNewEntry"


export const Table : React.FC = () => {

    const [table, setTable] = useState<TableEntry[]>([])
    const [id, setId] = useState(3)
    
    // useEffect to insert 3 seed values into the table ( happens once, at component mount)
    useEffect(() => {
        const initialValues = [
            {
                id : 0,
                name : "lotto ticket",
                description : "",
                price : 20
            },
            {
                id : 1,
                name : "Beers",
                description : "Party night",
                price : -15
            },
            {
                id : 2,
                name : "Phone Bill",
                description : "January",
                price : -29.99
            }
        ]
        setTable(initialValues)
    }, [])


    // function to delete an entry from the table, by id
    function deleteEntry(id : number) {
        let tableCopy = [...table]
        tableCopy = tableCopy.filter(entry => entry.id !== id)
        setTable(tableCopy);
    }


    // function to calculate the Total
    function calculateTotal(arr : TableEntry[]){
        let total = 0;

        arr.forEach((elem) => {total = parseInt(total.toString()) + parseInt(elem.price.toString())})
        return total;
    }

    return(
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
                        </tr>
                    </thead>
                    <tbody>
                        {table.map(entry => { 
                            return (
                                <tr key={entry.id}>
                                    <td>{entry.name}</td>
                                    <td>{entry.description}</td>
                                    <td className="last-col">
                                        {entry.price}
                                        <button onClick={() => deleteEntry(entry.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>    
                </table>
                 <p>Total : {calculateTotal(table)} </p>
            </div>
            <div className="form-container">
                <FormNewEntry 
                    table={table} setTable={setTable} 
                    id={id} setId={setId}
                    calculateTotal={calculateTotal}
                />
            </div>
        </div>
                
        </>
    )
}