import React, { Component } from "react";
import { Button } from 'react-bootstrap';

import { connect } from "react-redux";
import { selectBook } from "./actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map((book,index) => {
      return (
        <li key={book.title} className="list-group-item col-sm-12">
          <p className="col-sm-10"> Job {index+1}  {book.title} </p>
          <Button className="col-sm-2" onClick={() => this.props.selectBook(book)}>
            Apply Here
          </Button>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-12">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);