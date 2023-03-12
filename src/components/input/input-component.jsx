import React from "react";
import InputMask from "react-input-mask";

const Input = ({
  type = "text",
  min = 3,
  id,
  text,
  value,
  onChange,
  max,
  pattern,
  placeholder,
  mask,
  disabled,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {text}
      </label>

      <InputMask
        mask={mask}
        type={type}
        className="form-control"
        id={id}
        min={min}
        max={max}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
        disabled={disabled}
        required
      />
    </div>
  );
};

export default Input;
