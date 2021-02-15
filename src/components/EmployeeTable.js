export default function EmployeeTable({ employees }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={() => {
              console.log('clicked name heading')
            }}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
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
