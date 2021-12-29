import React from "react";
import { renderLogoTextRight } from "../../lib/lib";
import useDataContext from "../../lib/useDataContext";

const LogoSelect = () => {
  const { state, setState } = useDataContext();
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
            onChange={({ target: { value } }) => {
              setState((prev) => ({
                ...prev,
                data: { ...prev.data, logoVariant: parseInt(value) },
              }));
            }}
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

export default LogoSelect;
