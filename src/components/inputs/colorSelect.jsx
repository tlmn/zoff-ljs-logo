import React from "react";
import { primaryColors } from "../../config/vars";
import useDataContext from "../../lib/useDataContext";

const ColorSelect = () => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label>Corporate Design</label>
      <div className="grid-cols-2 grid">
        {primaryColors.map(({ name, label }) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={label}
              name="primaryColor"
              id={name}
              onChange={({ target: { value } }) => {
                setState((prev) => ({ ...prev, primaryColor: value }));
              }}
            />
            <label htmlFor={name} className="label__radio">
              <div className="px-2">
                <img
                  src={`/assets/images/colorThemes/${label}.png`}
                  className={`colorThumbnail ${
                    state.primaryColor === label && `border-lightGray`
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorSelect;
