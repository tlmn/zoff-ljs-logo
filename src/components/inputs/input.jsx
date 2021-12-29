import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

const Input = ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <input
        type="text"
        value={getProperty(state, propertyPath)}
        onChange={({ target: { value } }) =>
          updateProperty(setState, propertyPath, value)
        }
        id={propertyPath}
        {...props}
      />
    </>
  );
};

export default Input;
