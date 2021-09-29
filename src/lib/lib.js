import { cloneDeepWith, get, set } from "lodash";
import { colorThemes, colors, textStyles } from "../config/vars";

import LogoTextBottom0 from "../assets/svg/logos/textBottom/0";
import LogoTextBottom1 from "../assets/svg/logos/textBottom/1";
import LogoTextBottom2 from "../assets/svg/logos/textBottom/2";
import LogoTextBottom3 from "../assets/svg/logos/textBottom/3";
import LogoTextBottom4 from "../assets/svg/logos/textBottom/4";
import LogoTextRight0 from "../assets/svg/logos/textRight/0";
import LogoTextRight1 from "../assets/svg/logos/textRight/1";
import LogoTextRight2 from "../assets/svg/logos/textRight/2";
import LogoTextRight3 from "../assets/svg/logos/textRight/3";
import LogoTextRight4 from "../assets/svg/logos/textRight/4";
import React from "react";
import emojiRegex from "emoji-regex";
import { toPng, toSvg } from "html-to-image";
import { saveAs } from "file-saver";

export const html2image = async (
  { state, setState, fileName = "none" },
  propertyPath,
  fileType
) => {
  if (fileType === "svg") {
    setState((prev) => ({ ...prev, templateScale: false }));

    setTimeout(() => {
      toSvg(getProperty({ state }, propertyPath).current, {
        quality: 1,
        width: 1080,
        height: 1080,
      }).then(function (blob) {
        saveAs(blob, `logo-1.svg`);
      });
    }, 500);
    setTimeout(
      () => setState((prev) => ({ ...prev, templateScale: true })),
      1500
    );
  } else {
    setState((prev) => ({ ...prev, templateScale: false }));

    setTimeout(() => {
      toPng(getProperty({ state }, propertyPath).current, {
        quality: 1,
        width: 1080,
        height: 1080,
      }).then(function (blob) {
        saveAs(blob, `logo-.png`);
      });
    }, 500);

    setTimeout(
      () => setState((prev) => ({ ...prev, templateScale: true })),
      1500
    );
  }
};

export const formatEmojis = (text = "") => {
  return text.replace(
    emojiRegex(),
    (m) => `<span class="not-italic" role="img">${m}</span>`
  );
};

export const getColor = (currentState, order) => {
  return colors.filter(
    (color) =>
      color.name ===
      colorThemes.filter(
        (colorTheme) => colorTheme.label === currentState.data.colorTheme
      )[0].colors[order]
  )[0].value;
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};

export const renderLogoTextRight = (index, height, fillColor = "#252525") => {
  switch (index) {
    case 0:
      return <LogoTextRight0 height={height} fillColor={fillColor} />;
    case 1:
      return <LogoTextRight1 height={height} fillColor={fillColor} />;
    case 2:
      return <LogoTextRight2 height={height} fillColor={fillColor} />;
    case 3:
      return <LogoTextRight3 height={height} fillColor={fillColor} />;
    case 4:
      return <LogoTextRight4 height={height} fillColor={fillColor} />;
    default:
      return <LogoTextRight0 height={height} fillColor={fillColor} />;
  }
};

export const renderLogoTextBottom = (index, height, fillColor = "#252525") => {
  switch (index) {
    case 0:
      return <LogoTextBottom0 height={height} fillColor={fillColor} />;
    case 1:
      return <LogoTextBottom1 height={height} fillColor={fillColor} />;
    case 2:
      return <LogoTextBottom2 height={height} fillColor={fillColor} />;
    case 3:
      return <LogoTextBottom3 height={height} fillColor={fillColor} />;
    case 4:
      return <LogoTextBottom4 height={height} fillColor={fillColor} />;
    default:
      return <LogoTextBottom0 height={height} fillColor={fillColor} />;
  }
};

export const getTextStyles = (state, logoOrder = 0) => {
  return textStyles[state.data.logoVariant][logoOrder];
};

export const updateProperty = ({ setState }, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, newValue);
    return prevCloned;
  });
};

export const getProperty = ({ state }, path) => {
  return get(state, path);
};
