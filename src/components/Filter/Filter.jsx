import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Filter.css';
import {  getFilter } from '../../redux/selectors';
import { updateFilter } from '../../redux/contactsSlice';


const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      className="filter"
      type="text"
      name="filter"
      value={filter}
      onChange={(e) => dispatch(updateFilter(e.target.value))}
      placeholder="Filter contacts by name"
    />
  );
};

export default Filter;
