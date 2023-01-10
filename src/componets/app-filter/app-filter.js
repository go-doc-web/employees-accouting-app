import './app-filter.css';

function AppFilter() {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">
        All employees
      </button>
      <button type="button" className=" btn btn-outline-light">
        For promotion
      </button>
      <button type="button" className="btn btn-outline-light">
        salary over $1000
      </button>
    </div>
  );
}

export default AppFilter;
