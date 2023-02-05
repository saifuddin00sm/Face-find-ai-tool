import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ImgPopup } from "../UI/ImgPopup";
import { SearchBar } from "../UI/SearchBar";
import { useGetFacesData } from "../../context/getFacesContext";

export const ResultPage = () => {
  const [open, setOpen] = useState(false);
  const [signleData, setSingleData] = useState({});
  const {allFaces, error} = useGetFacesData();


  const showPopup = (obj) => {
    setSingleData(obj);
    setOpen(true);
  };

  return (
    <>
      {open && <ImgPopup data={signleData} isOpen={setOpen} />}
      <div className="container my-4">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-sm-12 mb-4">
            <SearchBar placeholderTxt="Make a new search" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <p
              style={{
                textAlign: "right",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "22px",
                color: "#3A3A3A",
              }}
            >
              Searched{" "}
              {allFaces?.numOfFacesScanned
                ?.toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
              faces
            </p>
          </div>
        </div>
        <div className="result-box my-5">
          {error !== "" ? (
            <p className="error-msg">{error}</p>
          ) : allFaces?.error === "NO_FACE_FOUND_IN_INPUT_IMAGE" ? (
            <p className="error-msg">
              We didn’t find a face in your input photo. Please try again with a
              different photo
            </p>
          ) : allFaces?.error ? (
            <p className="error-msg">
              No similar face was found. Please try again with a different photo
            </p>
          ) : (
            <Row>
              {allFaces?.facesFound?.map(
                ({ image, pageUrl, similarity }, index) => (
                  <Col
                    key={index}
                    sm={6}
                    md={3}
                    lg={2}
                    className="my-4"
                    onClick={() => showPopup({ image, pageUrl, similarity })}
                  >
                    <div className="image-box">
                      <img src={image} alt="faces" />
                      <p className="similarity">{similarity}%</p>
                    </div>
                  </Col>
                )
              )}
            </Row>
          )}
        </div>
      </div>
    </>
  );
};
