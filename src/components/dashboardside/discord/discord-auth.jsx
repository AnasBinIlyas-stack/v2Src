import React, { useEffect } from "react";
import "./discord.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const loaderStyle = {
  width: '50px',
  height: '50px',
  borderWidth: '3px',
  borderRight: 'none',
  borderBottom: 'none',
  backgroundColor: 'transparent',
  borderColor: '#ad1aaf',
  margin: '30px 0 0 0'
};

const DiscordAuth = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const guild_id = searchParams.get('guild_id');
  const permissions = searchParams.get('permissions');

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discord/redirect-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        code,
      }
    }).then((res) => {
      console.log(res.data)
      localStorage.setItem('user_access_token', res.data.access_token);
      localStorage.setItem('user_expires_in', res.data.expires_in);
      localStorage.setItem('user_issued_at', res.data.issuedAt);
      localStorage.setItem('user_id', res.data.userId);
      toast.success(res?.data?.message || 'Connected to Discord');
      navigate(`/discordpage`);
    }).catch((err) => {
      toast.error(err?.response?.data?.message || 'Failed to connect to Discord');
      navigate(`/discord`);
    });


  }, [code, navigate, guild_id, permissions, token]);
  return (
    <div className="dashside-content">
      <div className="discord">
        <h2 className="secondary-text textexpansiva-bold text-center">
          Connecting Your Discord Account
        </h2>
        <div className="loader">
          <div className="spinner-border" role="status" style={loaderStyle}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="back-shadow"></div>
        <div className="back-center-shadow"></div>
      </div>
    </div>
  )
}

export default DiscordAuth;