import { colorThemes, colors } from "../config/vars";

import Logo0 from "../assets/svg/logos/0";
import Logo1 from "../assets/svg/logos/1";
import Logo2 from "../assets/svg/logos/2";
import Logo3 from "../assets/svg/logos/3";
import Logo4 from "../assets/svg/logos/4";
import React from "react";
import emojiRegex from "emoji-regex";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export const html2image = async ({ state, setState }, fileName = "solid") => {
  setState({ ...state, templateScale: false });
  htmlToImage
    .toJpeg(state.slides[state.currentSlide].ref.current, {
      quality: 1,
      width: 1080,
      height: 1080,
    })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `sharepic-${slugify(fileName.substring(0, 20))}.jpg`;
      link.href = dataUrl;
      link.click();
      setState({ ...state, templateScale: true });
    });
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

export const renderLogo = (index, height, fillColor = "#252525") => {
  switch (index) {
    case 0:
      return <Logo0 height={height} fillColor={fillColor} />;
    case 1:
      return <Logo1 height={height} fillColor={fillColor} />;
    case 2:
      return <Logo2 height={height} fillColor={fillColor} />;
    case 3:
      return <Logo3 height={height} fillColor={fillColor} />;
    case 4:
      return <Logo4 height={height} fillColor={fillColor} />;
    default:
      return <Logo0 height={height} fillColor={fillColor} />;
  }
};
