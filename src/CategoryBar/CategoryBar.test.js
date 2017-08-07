import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoryBar from './CategoryBar';


describe('SearchBar', () => {

  const categories = [ 
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
    }
  ];

  let onCategorySelected;

  beforeEach(() => {
    onCategorySelected = jest.fn();
  });

  test('renders without crashing', () => {
    const component = shallow(<CategoryBar categories={categories} onCategorySelected={onCategorySelected}/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should have first category selected by defaul', () => {
    const component = shallow(<CategoryBar categories={categories} onCategorySelected={onCategorySelected}/>);
    expect(component.state().selectedId).toBe(categories[0].id);
  });

  test('should mark category as selected when selecting category', () => {
    const component = shallow(<CategoryBar categories={categories} onCategorySelected={onCategorySelected}/>);
    const categoriesList = component.find('.CategoryBar__List');
    let thirdCategory = categoriesList.childAt(2);
    thirdCategory.simulate('click');
    expect(component.state().selectedId).toBe(categories[2].id);
  });
  
  test('should call onCategorySelected property when category clicked', () => {
    const component = shallow(<CategoryBar categories={categories} onCategorySelected={onCategorySelected}/>);
    const categoriesList = component.find('.CategoryBar__List');
    let thirdCategory = categoriesList.childAt(2);
    thirdCategory.simulate('click');
    expect(onCategorySelected.mock.calls.length).toBe(1);
    expect(onCategorySelected.mock.calls[0]).toEqual([categories[2]]);
  });
  
  
})
