import './employees-add-form.css';

function EmployeesAddForm() {
  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What's his name?"
        />
        <input
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

export default EmployeesAddForm;
