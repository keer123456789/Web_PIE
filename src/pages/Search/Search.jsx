import React, { Component } from 'react';
import ComplexTabTable from './components/ComplexTabTable';

export default class Search extends Component {
  static displayName = 'Search';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-page">
        <ComplexTabTable />
      </div>
    );
  }
}
