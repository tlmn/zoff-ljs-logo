import {
  getColor,
  getTextStyles,
  renderLogoTextBottom,
  renderLogoTextRight,
} from "../../lib/lib";

import LogoArrow from "../../assets/svg/logo-arrow";
import React from "react";

export default ({ state }) => {
  return (
    <div className="col-span-6 relative grid-cols-2 grid">
      <div className="col-span-1" style={{ height: "220px" }}>
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: getColor(state, 1),
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
      <div className="col-span-1" style={{ height: "220px" }}>
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: getColor(state, 1),
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
        <div
          className={`p-4 relative // flex flex-col items-center justify-center // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: getColor(state, 1),
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
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: getColor(state, 1),
          }}
          ref={state.refs[3]}
        >
          <LogoArrow fillColor={getColor(state, 0)} width={250} />
        </div>
      </div>
    </div>
  );
};
