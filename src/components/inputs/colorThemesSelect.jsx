import {
  colorThemes,
  corporateThemes,
  secondaryThemes,
} from "../../config/vars";

import React from "react";
import useDataContext from "../../lib/useDataContext";

const ColorThemesSelect = () => {
  const {
    state: { colorTheme: currentColorTheme },
    setState,
  } = useDataContext();
  return (
    <>
      <div className="font-headline text-white uppercase italic">
        Corporate Design
      </div>
      <div className="grid-cols-2 grid">
        {corporateThemes.map((colorTheme) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={
                colorThemes.filter(({ label }) => label === colorTheme)[0].label
              }
              name="colorTheme"
              id={
                colorThemes.filter(({ label }) => label === colorTheme)[0].name
              }
              onChange={({ target: { value } }) => {
                setState((prev) => ({
                  ...prev,
                  data: { ...prev.data, colorTheme: value },
                }));
              }}
            />
            <label
              htmlFor={
                colorThemes.filter(({ label }) => label === colorTheme)[0].name
              }
              className="label__radio"
            >
              <div className="px-2">
                <img
                  src={`/assets/images/colorThemes/${
                    colorThemes.filter(({ label }) => label === colorTheme)[0]
                      .label
                  }.png`}
                  className={`colorThumbnail ${
                    currentColorTheme ===
                      colorThemes.filter(({ label }) => label === colorTheme)[0]
                        .label && `border-lightGray`
                  }`}
                  alt="colorThumbnail"
                />
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="font-headline text-white uppercase italic">
        Geht auch ...
      </div>
      <div className="grid-cols-4 grid">
        {secondaryThemes.map((colorTheme) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={
                colorThemes.filter(({ label }) => label === colorTheme)[0].label
              }
              name="colorTheme"
              id={
                colorThemes.filter(({ label }) => label === colorTheme)[0].name
              }
              onChange={({ target: { value } }) => {
                setState((prev) => ({
                  ...prev,
                  data: { ...prev.data, colorTheme: value },
                }));
              }}
            />
            <label
              htmlFor={
                colorThemes.filter(({ label }) => label === colorTheme)[0].name
              }
              className="label__radio"
            >
              <div className="px-1">
                <img
                  src={`/assets/images/colorThemes/${
                    colorThemes.filter(({ label }) => label === colorTheme)[0]
                      .label
                  }.png`}
                  className={`colorThumbnail ${
                    currentColorTheme ===
                      colorThemes.filter(({ label }) => label === colorTheme)[0]
                        .label && `border-lightGray`
                  }`}
                  alt="colorThumbnail"
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorThemesSelect;
