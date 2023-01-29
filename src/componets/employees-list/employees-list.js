import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

function EmployeesList({ items, onDelete }) {
  const elements = items.map(({ id, ...itemProps }) => (
    <EmployeesListItem
      key={id}
      {...itemProps}
      onDeleteItem={() => onDelete(id)}
    />
  ));

  return <ul className="app-list list-group">{elements}</ul>;
}

export default EmployeesList;
