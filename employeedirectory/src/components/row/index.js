import React from "react";

function Row(props) {
    let results = props.results;
    console.log(results, "row");
    return (
        <tbody>
      {results.map( (result, index) => (
            <tr>
            <th scope="row">{index}
            </th>          
            <td>
            {result.name.first}
            </td>
            <td>
            {result.location.city}
            </td>
            <td>
            {result.login.username}
            </td>
            <td>
            {result.email}
            </td>
            </tr>
      ))}
      </tbody>
    )

}

        


export default Row;