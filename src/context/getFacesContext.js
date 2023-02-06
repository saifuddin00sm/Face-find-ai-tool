import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProgressBar } from "../components/UI/ProgressBar";
import ReactGA from 'react-ga';

const FacesContext = createContext([]);

export const useGetFacesData = () => {
  return useContext(FacesContext);
};

export function GetFacesProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [allFaces, setAllFaces] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 1
        );
      }, 30);
    } else if (!loading && progress !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [loading, progress]);

  const getFaces = async (e) => {
    const inputFile = e.target.files[0];
    // IF NO FILE IS SELECTED
    if (inputFile === undefined) return;
    // Clearing result page before making new search
    setAllFaces({});
    setProgress(0);
    try {
      if (error) {
        setError("");
      }

      setLoading(true);
      const formData = new FormData();
      formData.append("file", inputFile);
      const url =
        "https://a4o0jvc4j6.execute-api.us-east-1.amazonaws.com/facefinder";

      const response = await axios.post(url, formData);
      if (response.status === 200) {
        const faces = response.data;
        setProgress(100);
        setAllFaces(faces);
        setLoading(false);
        navigate("searchResults");
        ReactGA.event({
          category: 'Input',
          action: 'Change',
          label: inputFile
        });
      } else {
        setLoading(false);
        navigate("searchResults");
        setError("Error encountered. Please try again later");
      }
    } catch (error) {
      setLoading(false);
      navigate("searchResults");
      setError("Error encountered. Please try again later");
    }
  };

  return (
    <FacesContext.Provider
      value={{
        loading,
        error,
        allFaces,
        showNav,
        setShowNav,
        getFaces,
      }}
    >
      {loading && <ProgressBar progress={progress} />}
      {children}
    </FacesContext.Provider>
  );
}
