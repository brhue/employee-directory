import {useState, useEffect} from 'react';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    async function getEmployees() {
      try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setEmployees(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getEmployees();
  }, []);

  return (
    <div>
      <h1>Hi!</h1>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
