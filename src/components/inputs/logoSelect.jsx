import { getColor, renderLogoTextRight } from "../../lib/lib";

import React from "react";

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
                data: { ...state.data, logoVariant: parseInt(e.target.value) },
              })
            }
          />
          <label htmlFor={i} className="label__radio">
            <div className="mx-2 my-1 hover:opacity-75 ease-in-out transition-all duration-200">
              {renderLogoTextRight(
                i,
                90,
                `${state.data.logoVariant === i ? `#00FFC2` : `#fff`}`
              )}
            </div>
          </label>
        </>
      ))}
    </div>
  );
};
