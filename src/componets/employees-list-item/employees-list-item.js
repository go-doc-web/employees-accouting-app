import { render } from '@testing-library/react';
import { Component } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  state = {
    increase: false,
    isLabelLike: false,
  };

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  selectUser = () => {
    this.setState(({ isLabelLike }) => ({
      isLabelLike: !isLabelLike,
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase, isLabelLike } = this.state;

    let isIncrease = increase ? 'increase' : '';
    let LabelLike = isLabelLike ? 'like' : '';
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${LabelLike} ${isIncrease} `}
      >
        <span onClick={this.selectUser} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
