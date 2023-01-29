import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPenel from '../search-penel/search-penel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emploeyees-add-form/employees-add-form';

import emploeesItems from '../../Data/emploeesItems.json';
// import Practic from '../Practic/Practic';

import './app.css';

class App extends Component {
  state = {
    items: emploeesItems,
  };

  onDelete = idx => {
    this.setState(({ items }) => ({
      items: items.filter(item => item.id !== idx),
    }));
  };

  render() {
    const { onDelete } = this;
    const { items } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-penel">
          <SearchPenel />
          <AppFilter />
        </div>
        <EmployeesList items={items} onDelete={onDelete} />

        <EmployeesAddForm />
        {/* <Practic /> */}
      </div>
    );
  }
}

export default App;
