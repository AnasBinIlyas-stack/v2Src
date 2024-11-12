import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const AudioPlayer = ({ audioId, buttonRef, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);

    useEffect(() => {
        const fetchAudio = async () => {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/stream/stream-audio/${audioId}`;
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(url, {
                    responseType: 'blob',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                if (response.status === 200) {
                    const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
                    setAudioBlob(audioBlob);
                } else {
                    toast.error("Failed to fetch audio: " + response.statusText);
                }
            } catch (err) {
                toast.error(err?.response?.data?.message || err?.response?.data || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        if (audioId) {
            fetchAudio();
        }
    }, [audioId]);

    useEffect(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (audioRef.current) {
                audioRef.current.src = reader.result;  // Setting the result (data URL) directly to the src attribute
            }
        };

        if (audioBlob) {
            reader.readAsDataURL(audioBlob);  // Convert the blob to a data URL
        }
    }, [audioBlob]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                if (audioRef.current.ended) {
                    audioRef.current.currentTime = 0; // Start over if ended
                }
                audioRef.current.play().catch(error => {
                    console.error("Playback failed:", error);
                });
            }
            setIsPlaying(() => !isPlaying);
        }
    };

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.addEventListener('click', handlePlayPause);
        }
        return () => {
            if (buttonRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                buttonRef.current.removeEventListener('click', handlePlayPause);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonRef, isPlaying]);

    useEffect(() => {
        const handleEnded = () => {
            setIsPlaying(() => false);
            audioRef.current.currentTime = 0; // Reset audio to the beginning when it ends
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('ended', handleEnded);
        }

        return () => {
            if (audioRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('ended', handleEnded);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {loading ? (
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div className="spinner-grow text-light" role="status">
                        <span className="sr-only visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className='visually-hidden'>
                    <audio ref={audioRef} controls controlsList="nodownload" autoPlay={!!audioBlob}>
                        <p>Your browser does not support the audio element.</p>
                    </audio>
                </div>
            )}
        </>
    );
};

export default AudioPlayer;
