import { useLocation, Navigate } from "react-router-dom";
import "./bookRead.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PdfViewer from "../../../utils/pdfViewer";
import { toast } from "react-toastify";


const BookRead = () => {
    const { state } = useLocation();
    const id = state?.id;

    const [pdfBlob, setPdfBlob] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPdf = async () => {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/stream/stream-pdf/${id}`;
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(url, {
                    responseType: 'blob',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
                setPdfBlob(pdfBlob);
            } catch (err) {
                toast.error(err?.response?.data?.message || err?.response?.data || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPdf();
        }
    }, [id])

    if (!state || !id || id === "") {
        return <Navigate to="/book" replace={true} />
    }

    return (
        <div className="dashside-content books-show">
            {loading ?
                <div className="d-flex align-items-center justify-content-center" style={{color: "White", minHeight: "90vh"}}>
                    <div className="spinner-grow text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                <div className='d-flex' style={{ maxHeight: "90vh", overflowY: "scroll" }}>
                    {pdfBlob && <PdfViewer pdfBlob={pdfBlob} />}
                </div>
            }
        </div>
    )
}

export default BookRead
