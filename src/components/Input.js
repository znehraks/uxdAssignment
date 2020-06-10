import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Input;
