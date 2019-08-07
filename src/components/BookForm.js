import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions';
import CATEGORIES from '../constants/categories';

const defaultForm = {
  title: '',
  category: '',
};

class BookForm extends React.Component {
  state = {
    ...defaultForm,
  };

  handleChange = e => this.setState({ [e.target.id]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ title, category });
    this.setState({
      ...defaultForm,
    });
  };

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="title"
          onChange={this.handleChange}
          value={title}
          required
        />
        <select
          id="category"
          onChange={this.handleChange}
          value={category}
          required
        >
          <option value="" hidden disabled>
            Select category
          </option>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createBook }
)(BookForm);
