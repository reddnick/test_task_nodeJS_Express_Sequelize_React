import React from "react";
import Table from "react-bootstrap/Table";
export default function ItemList(props) {
    return (
        <div>
            <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Type</th>
                <th>Action </th>
            </tr>
            </thead>
            <tbody>

                {props.items.map(item =>
                    <tr key={item.id}>
                        <td className="text-overlap">{item.name}</td>
                        <td>{item.type.name}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => props.deleteItemHandler(item.id)}>Delete</button>
                            <button className="btn btn-info" onClick={() => props.editItemHandler(item)}>Edit</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
        </div>
    )
}
