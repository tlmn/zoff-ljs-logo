import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath, label = "Textgröße" }) => (
  <>
    <label htmlFor={propertyPath}>{label}</label>
    <input
      type="range"
      id={propertyPath}
      name="bodyTextScale"
      className="w-3/4"
      min={getProperty({state, setState}, `${propertyPath}.range[0]`)}
      max={getProperty({state, setState}, `${propertyPath}.range[1]`)}
      value={getProperty({state, setState}, `${propertyPath}.value`)}
      onChange={(e) =>
       updateProperty({state, setState}, `${propertyPath}.value`, e.target.value)
      }
    />
  </>
);
