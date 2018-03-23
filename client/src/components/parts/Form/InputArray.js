import React from 'react';
import PropTypes from 'prop-types';

const InputArray = (props) => (
  <div>
    <label className = "input-label">{props.title}</lable>
    <input
      value = {props.value}
      onChange = {props.onChangeFunc}

  </div>
)


input.propTypes = {
  title : PropTypes.string,
  onChange : ,
}
