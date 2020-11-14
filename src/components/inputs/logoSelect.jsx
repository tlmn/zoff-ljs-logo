import { getColor, renderLogo } from "../../lib/lib";

import Logo0 from "../../assets/svg/logos/0";
import Logo1 from "../../assets/svg/logos/1";
import Logo2 from "../../assets/svg/logos/2";
import Logo3 from "../../assets/svg/logos/3";
import Logo4 from "../../assets/svg/logos/4";
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
              {renderLogo(
                i,
                90,
                `${state.data.logoVariant === i ? getColor(state, 0) : `#fff`}`
              )}
            </div>
          </label>
        </>
      ))}
    </div>
  );
};
