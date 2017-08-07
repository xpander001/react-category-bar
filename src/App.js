import React, { Component } from 'react';
import CategoryBar from './CategoryBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [ 
      {
        id: 1,
        name: 'Category 1'
      },
      {
        id: 2,
        name: 'Category 2',
      },
      {
        id: 3,
        name: 'Category 3',
      },
      {
        id: 4,
        name: 'Category 4',
      },
      {
        id: 5,
        name: 'Category 5',
      },
      {
        id: 6,
        name: 'Category 6',
      },
      {
        id: 7,
        name: 'Category 7',
      },
      {
        id: 8,
        name: 'Category 8',
      }]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="BarContainer">
          <CategoryBar categories={this.state.categories} onCategorySelected={(category) => {
              console.log(category);
            }}/>
        </div>
      </div>
    );
  }
}

export default App;
