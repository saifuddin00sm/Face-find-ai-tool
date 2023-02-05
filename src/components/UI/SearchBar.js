import React from "react";
import { useGetFacesData } from "../../context/getFacesContext";

export const SearchBar = ({ placeholderTxt }) => {
  const { getFaces } = useGetFacesData();
  return (
    <form action="">
      <div className="upload-bar">
        <div className="upload-btn-wrapper">
          <button className="filebtn">
            <img src="images/camera.svg" alt="" /> {placeholderTxt}{" "}
          </button>
        </div>
        <input
          style={{
            display: "block",
            width: "100%",
            left: "0",
            top: "0",
            borderRadius: "21px",
            position: "absolute",
            height: "100%",
            opacity: "0",
            cursor: "pointer",
          }}
          onChange={(e) => getFaces(e)}
          type="file"
          id="fileInput"
        />
        <div className="search-btn">
          <button type="button">
            <img src="images/search.svg" alt="" />
          </button>
        </div>
      </div>
    </form>
  );
};
