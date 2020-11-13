import React, { useLayoutEffect } from "react";
import { formatEmojis, getColor, renderLogo } from "../../lib/lib";

import LogoText from "../../assets/svg/logo-text";

export default ({ state }) => {
  return (
    <div className="col-span-6 relative grid-cols-2 grid">
      <div className="col-span-1">
        <div
          className={`p-4 // flex flex-col# // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          ref={state.refs[0]}
        >
          {state.data.localBranch.content}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className={`p-4 // flex flex-col# // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          ref={state.refs[1]}
        >
          {renderLogo(state.data.logoVariant, 200)}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className={`p-4 // flex flex-col# // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          ref={state.refs[2]}
        >
          {state.data.localBranch.content}
        </div>
      </div>
      <div className="col-span-1">
        <div
          className={`p-4 // flex flex-col# // border-1 // template ${
            state.templateScale ? `template-scale` : `relative`
          }`}
          ref={state.refs[3]}
        >
          {state.data.localBranch.content}
        </div>
      </div>
    </div>
  );
};
