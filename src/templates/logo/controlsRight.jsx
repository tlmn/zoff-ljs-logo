import LogoSelect from "../../components/inputs/logoSelect";
import React from "react";
import Textarea from "../../components/inputs/textarea";

export default ({ state, setState }) => (
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
  </>
);
