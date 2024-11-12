import React from "react";
import "./bookcard.scss";
import { useNavigate } from "react-router-dom";
import PaymentButton from "../transactionPayment/payment-button";

function Bookcard({
  bookId,
  imgsrc,
  detail,
  price,
  authors,
  showlayer,
  isDigital,
  isPurchased,
  setReFetch,
  isAudio,
  selectedAudio,
  setSelectedAudio,
  buttonRef,
  startCheckout,
  isPlaying,
}) {
  const type = isAudio ? "audio" : isDigital ? "ebook": "hardBook";
  const navigate = useNavigate();

  const handleClick = () => {
    if (isAudio) {
      setSelectedAudio && setSelectedAudio(bookId);
    }
  };

  const renderButton = () => {
    if (isDigital) {
      return isPurchased ? (
        <button
          className="bottom text-white textexpansiva-bold"
          onClick={() => navigate("/book-read", { state: { id: bookId } })}
        >
          Read
        </button>
      ) : (
        <PaymentButton
          amount={price}
          network="bscTestnet"
          type={type}
          itemId={bookId}
          tokenAddress={null}
          tokenDecimals={18}
          setReFetch={setReFetch}
        />
      );
    }
    if (isAudio) {
      return isPurchased ? (
        <button
          ref={buttonRef}
          className="bottom text-white textexpansiva-bold"
          onClick={() => navigate("/audio", { state: { id: bookId } })}
        >
          {(isPlaying && selectedAudio === bookId) && isPlaying ? "Pause" : "Play"}
        </button>
      ) : (
        <PaymentButton
          amount={price}
          network="bscTestnet"
          type={type}
          itemId={bookId}
          tokenAddress={null}
          tokenDecimals={18}
          setReFetch={setReFetch}
        />
      );
    }
    return (
      <button
        ref={buttonRef}
        className="bottom text-white textexpansiva-bold"
        onClick={startCheckout ? () => startCheckout(bookId): () => {}}
      >
        Buy {price} BNB
      </button>
    );
  };

  return (
    <div className="bookcard-sec" onClick={handleClick}>
      <div className="inner">
        <div className="top" style={{ height: "178px" }}>
          <img src={imgsrc} alt="..." />
        </div>
        <div className="center">
          <div className="price">
            <p
              className="text-white text-inter fw-semibold text-truncate"
              style={{ maxWidth: "60%" }}
            >
              {detail}
            </p>
            <p
              className="text-white text-inter fw-semibold fs-6 text-truncate"
              style={{ maxWidth: "36%" }}
            >
              {price} BNB
            </p>
          </div>
          <div
            className="text-white text-inter fw-normal text-uppercase owner small d-flex flex-row align-items-center"
            style={{ gap: "0px 6px" }}
          >
            <span>BY</span>
            <div
              className="d-flex align-items-center"
              style={{ gap: "0px 4px" }}
            >
              <>
                {isAudio ? (
                  <>
                    {authors.split(",").map((author, index) => (
                      <div
                        key={index}
                        className="text-xs"
                        style={{
                          backgroundColor: "#0E0026",
                          borderRadius: "5px",
                          padding: "0.125rem 0.375rem",
                        }}
                      >
                        {author}
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {authors?.slice(0, 3).map((author, index) => (
                      <div
                        key={index}
                        className="text-xs"
                        style={{
                          backgroundColor: "#0E0026",
                          borderRadius: "5px",
                          padding: "0.125rem 0.375rem",
                        }}
                      >
                        {author}
                      </div>
                    ))}
                  </>
                )}
              </>
            </div>
          </div>
        </div>

        {renderButton()}
      </div>
      {showlayer ? (
        <div className="card-layer">
          <button disabled>Expected Soon</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Bookcard;
