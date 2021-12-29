import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import useDataContext from "../../lib/useDataContext";

const TextScale = ({ propertyPath, label = "Textgröße" }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <input
        type="range"
        id={propertyPath}
        name="bodyTextScale"
        className="w-3/4"
        min={getProperty(state, `${propertyPath}.range[0]`)}
        max={getProperty(state, `${propertyPath}.range[1]`)}
        value={getProperty(state, `${propertyPath}.value`)}
        onChange={({ target: { value } }) =>
          updateProperty(setState, `${propertyPath}.value`, value)
        }
      />
    </>
  );
};

export default TextScale;
