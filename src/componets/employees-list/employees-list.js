import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

function EmployeesList({ items }) {
  const elements = items.map(({ id, ...itemProps }) => (
    <EmployeesListItem key={id} {...itemProps} />
  ));
  console.log(items);
  return <ul className="app-list list-group">{elements}</ul>;
}

export default EmployeesList;
