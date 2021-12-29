import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

const Textarea = ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <textarea
        onChange={({ target: { value } }) =>
          updateProperty(setState, propertyPath, value)
        }
        id={propertyPath}
        {...props}
        value={getProperty(state, propertyPath)}
      />
    </>
  );
};

export default Textarea;
