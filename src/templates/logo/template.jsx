import {
  formatEmojis,
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
      <div className="col-span-1">
        <div
          className={`p-4 relative // flex flex-col items-center justify-center  // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          style={{
            backgroundColor: getColor(state, 1),
          }}
          ref={state.refs[1]}
        >
          {renderLogoTextRight(state.data.logoVariant, 200, getColor(state, 0))}
          <span
            className="absolute top-0 left-0 text-md font-headline italic uppercase leading-none break-all"
            style={{
              color: getColor(state, 0),
              ...getTextStyles(state, 0),
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
          ref={state.refs[1]}
        >
          {renderLogoTextBottom(
            state.data.logoVariant,
            200,
            getColor(state, 0)
          )}
          <span
            className="absolute text-center top-0 text-md font-headline italic uppercase leading-none"
            style={{
              color: getColor(state, 0),
              ...getTextStyles(state, 1),
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
          ref={state.refs[1]}
        >
          <LogoArrow fillColor={getColor(state, 0)} />
          <span
            className="absolute top-0 text-center  text-md font-headline italic uppercase leading-none"
            style={{
              color: getColor(state, 0),
              ...getTextStyles(state, 2),
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
          ref={state.refs[1]}
        >
          <LogoArrow fillColor={getColor(state, 0)} />
        </div>
      </div>
    </div>
  );
};
