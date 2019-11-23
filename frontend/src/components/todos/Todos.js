import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../../actions/todos";

export class Todos extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Todos</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteTodo.bind(this, item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.todos.items
});

export default connect(mapStateToProps, { getTodos, deleteTodo })(Todos);
