import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = {
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: 0,
  left: 0,
  background: "rgba(217, 217, 217, 0.4)",
  backdropFilter: "blur(10px)",
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: 'hidden'
};

export const ProgressBar = ({ progress }) => {
  return (
    <div style={styles}>
      <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={progress} maxValue={100} text={`${progress}%`} styles={{
          text: {
            fill: '#000',
          }
      }}/>;
      </div>
    </div>
  );
};
