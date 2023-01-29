// import { nanoid } from 'nanoid';
import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  state = {
    name: '',
    salary: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleChange } = this;
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex">
          <input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
          />
          <input
            onChange={handleChange}
            name="salary"
            value={salary}
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in dollars?"
          />

          <button type="submit" className="btn btn-outline-light">
            add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
