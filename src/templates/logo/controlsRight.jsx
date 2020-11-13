import IconDownload from "../../assets/svg/download";
import LogoSelect from "../../components/inputs/logoSelect";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <>
      <label>Logovariante</label>
      <LogoSelect state={state} setState={setState} />
      <label htmlFor="localBranch">Lokalgruppe</label>
      <input
        id="localBranch"
        onChange={(e) =>
          setState({
            ...state,
            data: {
              ...state.data,
              localBranch: { content: e.target.value },
            },
          })
        }
        value={state.data.localBranch.content}
      />
      <div className="flex" style={{ gap: "10px" }}>
        <button
          className="btn btn-download flex justify-center"
          onClick={() =>
            html2image(
              {
                state,
                setState,
              },
              state.data.localBranch,
              "svg"
            )
          }
        >
          <IconDownload height={20} className="mr-1" /> SVG
        </button>

        <button
          className="btn btn-download flex justify-center"
          onClick={() =>
            html2image(
              {
                state,
                setState,
              },
              state.data.localBranch,
              "png"
            )
          }
        >
          <IconDownload height={20} className="mr-1" /> PNG
        </button>
      </div>
    </>
  );
};
