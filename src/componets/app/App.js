import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPenel from '../search-penel/search-penel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploeyees-add-form/employees-add-form';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-penel">
        <SearchPenel />
        <AppFilter />
      </div>
      <EmployeesList />

      <EmployeesAddForm />
    </div>
  );
}

export default App;
