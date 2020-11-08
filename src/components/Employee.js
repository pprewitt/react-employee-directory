import React from 'react'

function Employee(props) {

    return (
        <tr>
            <td>{props.num}</td>
            <td><img alt={props.first} src={props.image}></img></td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
         </tr>
    )
}
export default Employee