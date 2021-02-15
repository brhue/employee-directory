import { useState } from 'react';
import EmployeeSearch from "./EmployeeSearch";

export default function EmployeeTable({ employees, handleClick }) {
  const [filterQuery, setFilterQuery] = useState('');

  function handleInput(e) {
    const query = e.currentTarget.value;
    setFilterQuery(query);
  }

  const filteredEmployees = employees.filter(employee => {
    const fullName = `${employee.name.first} ${employee.name.last}`.toLowerCase();
    return fullName.includes(filterQuery);
  });

  return (
    <>
      <EmployeeSearch handleInput={handleInput} />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th
              data-dir={1}
              onClick={(e) => {
                const direction = e.currentTarget.getAttribute("data-dir");
                e.currentTarget.setAttribute("data-dir", -direction);
                handleClick("name", direction);
              }}
            >
              Name
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee, i) => (
            // TODO: Use a better key!
            <tr key={i}>
              <td>
                <img src={employee.picture.thumbnail} alt="Employee headshot." />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
