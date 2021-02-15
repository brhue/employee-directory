import { useState, useEffect } from "react";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [employees, setEmployees] = useState([]);

  function handleClick(sortKey, direction) {
    setEmployees((currentEmployees) => {
      const toSort = [...currentEmployees];
      if (sortKey === "name") {
        toSort.sort((first, second) => {
          if (first.name.last < second.name.last) {
            return -direction;
          } else if (first.name.last > second.name.last) {
            return direction;
          } else {
            return 0;
          }
        });
      }
      return toSort;
    });
  }

  useEffect(() => {
    async function getEmployees() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
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
      <EmployeeTable employees={employees} handleClick={handleClick} />
    </div>
  );
}

export default App;
