import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TOKEN_EXPIRY_TIME = localStorage.getItem("user_expires_in");
const ISSUED_AT = localStorage.getItem("user_issued_at");

export const DiscordGate = ({ children }) => {
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discord/allUsers`)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const checkTokenExpiry = () => {
        if(!ISSUED_AT) {
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        const expiryTime = parseInt(ISSUED_AT) + parseInt(TOKEN_EXPIRY_TIME);

        return currentTime > expiryTime;
    }

    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const expired = checkTokenExpiry();
        setIsExpired(expired);
    }, []);

    if (isExpired) {
        return <Link className="hero-btn" to="/discord" style={{ fontSize: '0.9em' }}>Please login to Discord to continue</Link>;
    }

    return children;
}
