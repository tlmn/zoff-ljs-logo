import LogoSelect from "../../components/inputs/logoSelect";
import React from "react";
import Textarea from "../../components/inputs/textarea";

const ControlsRight = () => (
  <>
    <div className="font-headline italic uppercase text-white">
      Logovariante
    </div>

    <LogoSelect />

    <Textarea
      label="Lokalgruppe (optional)"
      propertyPath="data.localBranch.content"
      rows={2}
    />
  </>
);

export default ControlsRight;
