import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate for navigation
import "./audiobook.scss";
import Bookcard from "../bookcard/bookcard";
import axios from "axios";
import { toast } from "react-toastify";

function Audiobook({ fromAudio, selectedAudio, setSelectedAudio, selectedButtonRef, isPlaying }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current location
  const [audioBooks, setAudioBooks] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_BASE_URL}/audio/all-FU`;
    setLoading(true); // Set loading to true before the request
    axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (fromAudio) {
        setAudioBooks(res.data.filter((audio) => audio.isPurchased));
      } else {
        setAudioBooks(res.data.filter((audio) => !audio.isPurchased));
      }
    }).catch((err) => {
      toast.error(err.response?.data?.message || err.message);
    }).finally(() => {
      setLoading(false);
    });
  }, [reFetch, fromAudio]);

  const selectedAudioBook = audioBooks?.find((item) => item?._id === selectedAudio);

  const handleButtonClick = () => {
    if (location.pathname === "/audio") {
      navigate("/audiobook");
    } else {
      navigate("/audio");
    }
  };

  return (
    <div className="dashside-content">
      <div className="audioBook-sec">
        {loading ? (
          <div className="d-flex w-100 align-items-center justify-content-center mt-6">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {!fromAudio && <>
              <h2 className="text-white textexpansiva-bold text-uppercase">
                4d Audio book
              </h2>
              {(selectedAudio && selectedAudio !== "" && audioBooks && selectedAudioBook) &&
                <>
                  <div className="center">
                    <img
                      src="/assets/images/dashboard/book/audiobook.webp"
                      alt="..."
                      className="main-img"
                    />
                    <div className="detail">
                      <div>
                        <img src="/assets/images/dashboard/book/owner.webp" alt="..." />
                        <p className="large text-white text-inter text-uppercase">
                          BY {selectedAudioBook?.artist}
                        </p>
                      </div>
                      <h2 className="text-white textexpansiva-bold text-uppercase fw-medium">
                        {selectedAudioBook?.audioName}
                      </h2>
                      <p className="small text-inter">
                        {selectedAudioBook?.description}
                      </p>
                      <button className="text-white textexpansiva-bold">Buy {selectedAudioBook.price} BNB</button>
                    </div>
                  </div>
                </>
              }
            </>}
            <div className="treaser mt-20">
              <div className="btn">
                <h5 className="textexpansiva-bold">Treaser&apos;s</h5>
                <button className="btnBg" onClick={handleButtonClick}>
                  {!fromAudio ? "View Purcahsed" : "Explore"}
                </button>
              </div>

              {audioBooks.length > 0 ?
                <div className="treaser-cards">
                  {audioBooks?.map((item, index) => (
                    <Bookcard
                      key={index}
                      bookId={item._id}
                      imgsrc={item.audioImageUrl}
                      detail={item.audioName}
                      authors={item.artist}
                      price={item.price}
                      isAudio={true}
                      isPurchased={item.isPurchased}
                      setReFetch={setReFetch}
                      selectedAudio={selectedAudio}
                      setSelectedAudio={setSelectedAudio}
                      buttonRef={selectedButtonRef}
                      isPlaying={isPlaying}
                    />
                  ))}
                </div>
                : <>
                  <div className="no-data w-100 d-flex align-items-center justify-content-center">
                    <h2 className="text-white textexpansiva-bold text-uppercase text-center fs-5 mt-4" style={{ width: "max-content" }}>
                      Nothing to show here!
                    </h2>
                  </div>
                </>}
            </div>
          </>
        )}
      </div>
    </div >
  );
}

export default Audiobook;
