import React, { useState } from 'react';
import './Select.scss';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Select = ({
  options = [{ value: "", label: "" }],
  label="",
  width,
  onChange,
  defaultOption = options[0],
  background
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [optionValue, setOptionValue] = useState(defaultOption);

  const handleOptionClick = (option) => {
    setShowOptions(false);
    setOptionValue(option);
    onChange(option.value);
  }

  return (
    <div className="app__select" style={{ width }}>

      <div className="app__select--input" style={{ background }}>
        <label>{label}</label>
        <input
          type="text"
          value={optionValue.label}
          onChange={() => {}}
          onFocus={() => setShowOptions(true)}
        />
        <MdOutlineKeyboardArrowDown cursor="pointer" fontSize="24px" onClick={() => setShowOptions(prev => !prev)} />
      </div>

      {showOptions &&
        <div className="app__select-options">
          {options && options.map((option) => {
            if (option.value === "" && option.label === "") return "";
            return (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      }

    </div>
  )
}

export default Select