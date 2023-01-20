import { Component } from 'react';
import './Practic.css';

class Practic extends Component {
  state = {
    position: '',
  };

  commitInputChanges = e => {
    e.preventDefault();
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { position } = this.state;
    return (
      <>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
        <p>{position}</p>
      </>
    );
  }
}

export default Practic;
