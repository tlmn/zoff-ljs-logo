import IconDownload from "../../assets/svg/download";
import React from "react";
import { html2image } from "../../lib/lib";
import useDataContext from "../../lib/useDataContext";

const DownloadButtons = ({ propertyPath }) => {
  const { state, setState } = useDataContext();
  return (
    <div className="flex mb-2" style={{ gap: "10px" }}>
      <button
        className="btn btn-download flex justify-center"
        onClick={() =>
          html2image(
            {
              state,
              setState,
            },
            propertyPath,
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
            propertyPath,
            "png"
          )
        }
      >
        <IconDownload height={20} className="mr-1" /> PNG
      </button>
    </div>
  );
};

export default DownloadButtons;
