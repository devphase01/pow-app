import React, { useRef, useState } from 'react';
import './Select.scss';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Select = ({
  options = [{ value: "", label: "" }],
  label = "",
  width,
  onChange,
  defaultOption = options[0],
  background
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [optionValue, setOptionValue] = useState(defaultOption);

  const rotateDeg = useRef(180);

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
          onChange={() => { }}
          onFocus={() => setShowOptions(true)}
        />
        <MdOutlineKeyboardArrowDown
          className="app__select--input-icon"
          style={{ transform: `rotate(${rotateDeg.current === 0 ? 180 : 0}deg)` }}
          onClick={() => {
            setShowOptions(prev => !prev);
            if(rotateDeg.current === 0) rotateDeg.current = 180;
            else rotateDeg.current = 0;
          } } />
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