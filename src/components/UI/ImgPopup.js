import React from "react";
const styles = {
  background: "rgba(217, 217, 217, 0.4)",
  backdropFilter: "blur(10px)",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 100,
};
const impPopStyle = {
  width: "438px",
  height: "auto",
  padding: "10px",
  backgroundColor: "#D9D9D9",
  position: 'relative'
};

const closeBtnStyle = {
    position: 'absolute',
    top: '8px',
    right: '3px',
    background: 'none',
    border: 'none',
    outline: 'none',
    borderRadius: '100%'
}

export const ImgPopup = ({ data, isOpen }) => {
  const { pageUrl, image } = data;

  return (
    <div style={styles}>
      <div style={impPopStyle}>
      <button style={closeBtnStyle} onClick={() => isOpen(false)}>
        <img src="images/close-pop.png" alt="close-button" />
      </button>
        <img
          style={{
            width: "100%",
            height: "100%",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
          src={image}
          alt="face"
        />
        <div className="url d-flex align-items-center justify-content-center mt-2 gap-2">
          <img src="images/planet.png" alt="" />
          {pageUrl && <a style={{ fontSize: "18px" }} target='_blank' href={pageUrl}>
            Open image source website
          </a> }
        </div>
      </div>
    </div>
  );
};
