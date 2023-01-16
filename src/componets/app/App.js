import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPenel from '../search-penel/search-penel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploeyees-add-form/employees-add-form';

import emploeesItems from '../../Data/emploeesItems.json';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-penel">
        <SearchPenel />
        <AppFilter />
      </div>
      <EmployeesList items={emploeesItems} />

      <EmployeesAddForm />
    </div>
  );
}

export default App;
