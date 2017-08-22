import React, { Component } from 'react';

import './CategoryBar.scss';

class CategoryBar extends Component {
  
  constructor(props) {
    
    super(props);

    this.state = {
      isDropdownOpen: false,
      selectedId: props.categories[0].id
    }
  }

  selectCategory(selectedCategory) {
    this.setState({selectedId: selectedCategory.id});
    this.props.onCategorySelected(selectedCategory);
  }

  // Lifecycle methods
  componentDidMount() {

  }

  getDropdown() {
    if (this.state.isDropdownOpen) {
      return (
        <div className="CategoryBar__Dropdown">
          <span className="CategoryBar__Dropdown__Title"></span>
          <ul className="CategoryBar__Dropdown__List">
          </ul>
        </div>
      );
    }
    return null;
  }
  
  render() {
    return (
      <div className="CategoryBar">
        <ul className="CategoryBar__List">
          {
            this.props.categories.map((category) => 
              <li className={
                this.state.selectedId === category.id ? 
                "CategoryBar__Category CategoryBar__Category--Selected" :
                "CategoryBar__Category"}
                onClick={() => {
                  this.selectCategory(category);
                }}
                key={category.id}>
                
                {category.name}
              </li>
            )
          }
        </ul>
        {this.getDropdown()}
      </div>
    );
  }
}

export default CategoryBar;