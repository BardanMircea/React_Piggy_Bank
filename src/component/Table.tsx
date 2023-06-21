import React, { useEffect, useState } from "react"
import TableEntry from "../model/TableEntry"
import { FormNewEntry } from "./FormNewEntry"


export const Table : React.FC = () => {

    const [table, setTable] = useState<TableEntry[]>([])

    // function to delete an entry from the table, by id
    function deleteEntry(id : number) {
        let tableCopy = [...table]
        tableCopy = tableCopy.filter(entry => entry.id !== id)
        setTable(tableCopy);
    }

    // useEffect to insert 3 starting values into the table ( happens once, at component mount)
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

    return(
        <>
            <div className="table-container">
                <h2>My Piggy Bank</h2>
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
                                    <td>{entry.price}</td>
                                    <td><button onClick={() => deleteEntry(entry.id)}>X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>        
                </table>
            </div>
            <div className="form-container">
                <FormNewEntry table={table} setTable={setTable}/>
            </div>    
        </>
    )
}