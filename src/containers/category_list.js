import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions/async_action_creators';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { id: 'dev-coding' , title: 'Development and Coding' },
        { id: 'design' , title: 'Graphical Design' },
        { id: 'sports' , title: 'Sports and Fitness' },
      ],
    };
  }

  render() {
    const { activeCategory, actions } = this.props;

    const $categories = this.state.categories.map(category => (
      <li className={'nav-item' + (activeCategory && activeCategory === category.id ? ' active' : '')}
          key={category.id}
          onClick={() => actions.fetchBooks(category)}>
        <a className="nav-link">{category.title}</a>
      </li>
    ));

    return (
      <nav id="navbar-categories" className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          {$categories}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCategory: state.activeCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchBooks }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
