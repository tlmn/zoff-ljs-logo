import React, { useRef, useState } from "react";

import ControlsLeft from "../templates/logo/controlsLeft";
import ControlsRight from "../templates/logo/controlsRight";
import Template from "../templates/logo/template";
import TemplateLayout from "../components/templateLayout";
import { Provider as DataContextProvider } from "../lib/useDataContext";

const IndexPage = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    data: {
      logoVariant: 0,
      localBranch: { content: "" },
      colorTheme: "turquoise_darkGray",
      scales: [
        { value: 80, range: [45, 120] },
        { value: 80, range: [67, 120] },
        { value: 80, range: [67, 120] },
      ],
    },
    refs: [useRef(null), useRef(null), useRef(null), useRef(null)],
    templateScale: true,
  });

  return (
    <DataContextProvider value={{ state, setState }}>
      <TemplateLayout>
        <div className="col-span-3">
          <ControlsLeft />
        </div>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-3">
          <ControlsRight />
        </div>
      </TemplateLayout>
    </DataContextProvider>
  );
};

export default IndexPage;
