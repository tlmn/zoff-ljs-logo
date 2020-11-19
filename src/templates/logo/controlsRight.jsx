import IconDownload from "../../assets/svg/download";
import LogoSelect from "../../components/inputs/logoSelect";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <>
      <div className="font-headline italic uppercase text-white">
        Logovariante
      </div>

      <LogoSelect state={state} setState={setState} />

      <Textarea
        state={state}
        setState={setState}
        label="Lokalgruppe (optional)"
        propertyPath="data.localBranch.content"
        rows={2}
      />

      <TextScale state={state} setState={setState} propertyPath="data.scales[0]" label="Größe 1" />

      <TextScale state={state} setState={setState} propertyPath="data.scales[1]" label="Größe 2" />
      
      <TextScale state={state} setState={setState} propertyPath="data.scales[2]" label="Größe 3" />

      <div className="flex" style={{ gap: "10px" }}>
        <button
          className="btn btn-download flex justify-center"
          onClick={() =>
            html2image(
              {
                state,
                setState,
              },
              "logo",
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
              "logo",
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
