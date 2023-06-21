import React, { useState } from "react";
import TableEntry from "../model/TableEntry";

interface FormNewEntryProps {
    table : TableEntry[],
    setTable: any
}

export const FormNewEntry : React.FC<FormNewEntryProps> = (props) => {
    
    const {table, setTable} = props

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [id, setId] = useState(3)

    function addEntry() {

        const updatedTable = [...table]
        updatedTable.push({id: id, name : name, description : description, price : price})
        setName("")
        setDescription("")
        setPrice(0)
        setId((prevValue) => {
            return prevValue + 1;
        })

        setTable(updatedTable)
        console.log(props.table)
    }
    
    return (
        <>
            <h3>Add New Expense</h3>
            <p>Name</p>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <p>Description</p>
            <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            <p>Price</p>
            <input type="text" onChange={(e) => setPrice(parseInt(e.target.value))}/>

            <input type="submit" name="Add Expense" onClick={() => addEntry()}/>
        </>
    )
}