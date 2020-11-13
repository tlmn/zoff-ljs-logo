import React from "react";
import { renderLogo } from "../../lib/lib";

export default ({ state, setState }) => {
  const logos = [0, 1, 2, 3, 4];

  return (
    <div className="grid-cols-2 grid">
      {logos.map((logo, i) => (
        <>
          <input
            type="radio"
            value={i}
            name="colorTheme"
            id={i}
            onChange={(e) =>
              setState({
                ...state,
                data: { ...state.data, logoVariant: e.target.value },
              })
            }
          />
          <label htmlFor={i} className="label__radio">
            <div className="mx-2">{renderLogo(i, 90)}</div>
          </label>
        </>
      ))}
    </div>
  );
};
