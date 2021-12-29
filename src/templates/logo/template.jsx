import {
  getColor,
  getTextStyles,
  renderLogoTextBottom,
  renderLogoTextRight,
} from "../../lib/lib";

import DownloadButtons from "../../components/inputs/downloadButtons";
import LogoArrow from "../../assets/svg/logo-arrow";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import useDataContext from "../../lib/useDataContext";

const Template = () => {
  const { state } = useDataContext();
  return (
    <div className="col-span-6 relative grid-cols-2 grid gap-x-2">
      <div className="col-span-1" style={{ height: "360px" }}>
        <TextScale propertyPath="data.scales[0]" />
        <DownloadButtons propertyPath="refs[0]" />
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: "transparent",
          }}
          ref={state.refs[0]}
        >
          {renderLogoTextRight(state.data.logoVariant, 473, getColor(state, 0))}
          <span
            className="absolute top-0 left-0 text-md font-headline italic uppercase leading-none break-all"
            style={{
              color: getColor(state, 0),
              ...getTextStyles(state, 0),
              fontSize: `${state.data.scales[0].value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.localBranch.content.replace(/\n/gi, "<br/>"),
            }}
          />
        </div>
      </div>
      <div className="col-span-1" style={{ height: "360px" }}>
        <TextScale propertyPath="data.scales[1]" />
        <DownloadButtons propertyPath="refs[1]" />
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale m-auto` : `relative`
          }`}
          style={{
            backgroundColor: "transparent",
          }}
          ref={state.refs[1]}
        >
          {renderLogoTextBottom(
            state.data.logoVariant,
            473,
            getColor(state, 0)
          )}
          <span
            className="absolute text-center top-0 text-md font-headline italic uppercase leading-none"
            style={{
              color: getColor(state, 0),
              ...getTextStyles(state, 1),
              fontSize: `${state.data.scales[1].value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.localBranch.content.replace(/\n/gi, "<br/>"),
            }}
          />
        </div>
      </div>
      <div className="col-span-1">
        <TextScale propertyPath="data.scales[2]" />
        <DownloadButtons propertyPath="refs[2]" />
        <div
          className={`p-4 relative // flex flex-col items-center justify-center // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: "transparent",
          }}
          ref={state.refs[2]}
        >
          <LogoArrow fillColor={getColor(state, 0)} width={250} />
          <span
            className="absolute top-0 text-center  text-md font-headline italic uppercase leading-none"
            style={{
              color: getColor(state, 0),
              ...getTextStyles(state, 2),
              fontSize: `${state.data.scales[2].value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.localBranch.content.replace(/\n/gi, "<br/>"),
            }}
          />
        </div>
      </div>
      <div className="col-span-1">
        <DownloadButtons propertyPath="refs[3]" />
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: "transparent",
          }}
          ref={state.refs[3]}
        >
          <LogoArrow fillColor={getColor(state, 0)} width={250} />
        </div>
      </div>
    </div>
  );
};

export default Template;
