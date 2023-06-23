import TableEntry from "../model/TableEntry";

interface FormNewEntryProps {
    table : TableEntry[],
    setTable: any,
    id : number, 
    setId : any,
    calculateTotal : any
}

export const FormNewEntry : React.FC<FormNewEntryProps> = (props) => {

    const {table, setTable, id, setId, calculateTotal} = props

    
    function addEntry(e :any) {
        e.preventDefault()
        setId((prevValue : number) => prevValue + 1)
        const name = e.currentTarget.name.value
        const description = e.currentTarget.description.value
        const price = e.currentTarget.price.value

        let updatedTable = [...table, {id :  id, name: name, description : description, price : price}]
 
        console.log(updatedTable)

        calculateTotal(updatedTable)
        setTable(updatedTable)
        e.target.reset()
    }
    
    return (
        <>
            <form onSubmit={e => addEntry(e)}>
                <h3>Add New Expense</h3>
                    <div className="row-container">
                        <p>Name</p>
                        <input type="text" name="name"/>
                    </div>
                    <div className="row-container">
                        <p>Description</p>
                        <input type="text" name="description" />
                    </div>
                    <div className="row-container">
                        <p>Price</p>
                        <input type="text" name="price"/>
                    </div>
                    
                <div className="btn-submit">
                    <input type="submit" value="Add Expense"/>
                </div>
                
    
            </form>
        </>
    )
}