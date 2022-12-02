import Employee from './components/Employees';
import './App.css';

function App() {
  console.log("We are about to list all the employees");
  const showEmployees = true;

  return (
    <div className="App">
      { console.log("inside the return")}
      {
      showEmployees ? (
        <>
          <Employee />
          <Employee />
        </>
      ) : (

        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
