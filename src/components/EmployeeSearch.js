export default function EmployeeSearch({ handleInput }) {
  return (
    <form>
      <input type="search" placeholder="Search" onInput={handleInput} />
    </form>
  );
}