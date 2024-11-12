import React, { useEffect, useState } from "react";
import "./discordinner.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { formatDistanceToNow } from 'date-fns'
import { Icon } from "@iconify/react";

const Discordinner = () => {
  const [channelCategories, setChannelCategories] = useState([]);
  const [textChannels, setTextChannels] = useState([]);
  const [voiceChannels, setVoiceChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [channelMessages, setChannelMessages] = useState([]);
  const [dmMessages, setDmMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [discordUsers, setDiscordUsers] = useState([]);
  const [guildMembers, setGuildMembers] = useState([]);
  const [isDm, setIsDm] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isVoiceChannel, setIsVoiceChannel] = useState(false);
  const [selectedVoiceChannel, setSelectedVoiceChannel] = useState(null);
  const [voiceChannelMembers, setVoiceChannelMembers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discord/allGuildMembers`, {
      params: {
        guild_id: "1286621565433417748",
      }
    })
      .then((res) => {
        setGuildMembers(res.data.members);
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Failed to fetch users");
      });
  }, [])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discord/allUsers`)
      .then((res) => {
        setDiscordUsers(res.data.discordUsers);
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Failed to fetch users");
      });
  }, []);

  useEffect(() => {
    if (!message || message === "") {
      axios.get(`${process.env.REACT_APP_BASE_URL}/discord/guildChannels`, {
        params: {
          guild_id: "1286621565433417748",
        },
      })
        .then((res) => {
          setChannelCategories(res?.data?.channels.filter((channel) => channel.type === 4));
          setTextChannels(res?.data?.channels.filter((channel) => channel.type === 0));
          setVoiceChannels(res?.data?.channels.filter((channel) => channel.type === 2));
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Failed to fetch channels");
        });
    }
  }, [message]);

  const handleChannelMessages = (channelId) => {
    setIsVoiceChannel(false);
    setSelectedVoiceChannel(null);
    setSelectedChannel(channelId);
    axios.get(`${process.env.REACT_APP_BASE_URL}/discord/messages`, {
      params: {
        channel_id: channelId,
        guild_id: "1286621565433417748",
      },
    })
      .then((res) => {
        setChannelMessages([]);
        setIsDm(false);
        setSelectedUser(null);

        const processedMessages = res.data.map(message => {
          if (message.content.includes(" @id: ")) {
            const [userId, content] = message.content.split(" @id: ");

            const matchedUser = discordUsers.find(user => user.userId === userId);

            if (matchedUser) {
              return {
                ...message,
                content: content,
                authorId: matchedUser?.discordId,
                authorName: matchedUser?.discordDisplayName,
                authorUsername: matchedUser?.discordUsername,
                authorAvatar: matchedUser?.discordAvatar
              };
            }
          }
          return message;
        });
        setChannelMessages(processedMessages.reverse());
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Failed to fetch messages");
        setChannelMessages([]);
      });
  };

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WS_URL || 'ws://localhost:8080');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const { type, id, channelId, members } = data;

      if (type === 'textChannel' && id === selectedChannel) {
        handleChannelMessages(id);
      }

      if (type === 'dmChannel' && selectedUser === id) {
        handleDM(id);
      }

      if (type === 'voiceChannelUpdate' && channelId === selectedVoiceChannel) {
        setVoiceChannelMembers(members);
      }
    };

    return () => {
      ws.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChannel, selectedUser, selectedVoiceChannel]);

  useEffect(() => {
    if (textChannels.length > 0 && !isDm && !isVoiceChannel) {
      setSelectedChannel(selectedChannel || textChannels[0].id);
      handleChannelMessages(selectedChannel || textChannels[0].id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textChannels])

  const nftItems = [
    {
      // rank: "01",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "01",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "01",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "01",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "02",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "03",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "04",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "05",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "06",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      // rank: "07",
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
    {
      imgSrc: "/assets/images/dashboard/gamecardinner.webp",
      by: "gold smith",
      value: "4,310",
      change: "2800",
    },
  ];


  const renderDiscordRanking = () => {
    return nftItems.map((item, index) => (
      <div className="inner-content hide-border" key={index}>
        <div className="rank">
          <p className="extra-small text-white fw-semibold">{index + 1}</p>
        </div>
        <div className="player">
          <div className="left-content">
            <img src={item.imgSrc} alt="Chat" />
          </div>
          <div className="right-content">
            <p className="extra-small text-white fw-semibold">Players Plot</p>
            {/* <p className="extra-small fw-normal">Lorem ipsum.</p> */}
          </div>
        </div>
        <div className="score">
          <p className="extra-small text-white">{item.change} </p>
        </div>
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message || message === "") {
      toast.error("Please enter a message");
      return;
    }
    const accessToken = localStorage.getItem("user_access_token");
    const userId = localStorage.getItem("user_id");

    axios.post(`${process.env.REACT_APP_BASE_URL}/discord/sendMessage`, {
      channel_id: selectedChannel,
      message: userId + " @id: " + message,
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    })
      .then(() => {
        setMessage("");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Failed to send message");
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("user_access_token");

    axios.get(`${process.env.REACT_APP_BASE_URL}/discord/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
        setLoggedInUser(res.data.discordUser)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDM = (userId) => {
    setIsDm(true);
    setSelectedChannel(null);
    setIsVoiceChannel(false);
    setSelectedVoiceChannel(null);
    setSelectedUser(userId);

    axios.get(`${process.env.REACT_APP_BASE_URL}/discord/directMessageHistory`, {
      params: {
        guild_id: "1286621565433417748",
      }
    })
      .then((res) => {
        const processedMessages = Object.entries(res.data?.messages).reduce((acc, [recipientId, messages]) => {
          const recipientUser = discordUsers.find(user => user.discordId === recipientId);
          if (recipientUser) {
            messages.reverse().forEach(message => {
              let processedMessage;
              if (message.content.includes(" @id: ")) {
                const [senderId, content] = message.content.split(" @id: ");
                const senderUser = discordUsers.find(user => user.userId === senderId);
                if (senderUser) {
                  processedMessage = {
                    ...message,
                    content: content,
                    author: {
                      id: senderUser.discordId,
                      displayName: senderUser.discordDisplayName,
                      username: senderUser.discordUsername,
                      avatar: senderUser.discordAvatar
                    }
                  };
                }
              } else {
                processedMessage = message;
              }

              if (processedMessage) {
                const isMyMessage = processedMessage.author.id === loggedInUser?.discordId;
                const isRecipientMessage = processedMessage.author.id === recipientId;

                if (isMyMessage || isRecipientMessage) {
                  if (!acc[recipientId]) {
                    acc[recipientId] = [];
                  }
                  acc[recipientId].push(processedMessage);
                }
              }
            });
          }
          return acc;
        }, {});
        // Sort messages in each category by timestamp
        Object.keys(processedMessages).forEach(recipientId => {
          processedMessages[recipientId].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        });
        setDmMessages(processedMessages);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Failed to fetch messages");
      });
  }

  const handleDmSubmit = (e) => {
    e.preventDefault();
    if (!message || message === "") {
      toast.error("Please enter a message");
      return;
    }

    const senderId = localStorage.getItem("user_id");

    if (loggedInUser?.discordId === selectedUser) {
      toast.error("You cannot send message to yourself");
      return;
    }

    axios.post(`${process.env.REACT_APP_BASE_URL}/discord/sendDirectMessage`, {
      user_id: selectedUser,
      message: senderId + " @id: " + message,
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        setMessage("");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Failed to send message");
      });
  }

  const filteredMembers = guildMembers?.filter(member => !member.isBot && member.id !== loggedInUser?.discordId);


  const handleVoiceChannelMembers = (channelId) => {
    const token = localStorage.getItem("user_access_token");
    if (channelId) {
      // Fetch voice channel members when a voice channel is selected
      axios.get(`${process.env.REACT_APP_BASE_URL}/discord/voiceChannelMembers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          channel_id: channelId,
        },
      })
        .then((res) => {
          toast.success(res?.data?.message)
          setVoiceChannelMembers(res?.data?.members);
        })
        .catch((err) => {
          console.error("Failed to fetch voice channel members:", err);
          toast.error("Failed to fetch voice channel members");
        });
    }
  }

  const handleVoiceChannel = (channelId) => {
    setSelectedChannel(null);
    setIsDm(false);
    setSelectedUser(null);
    setIsVoiceChannel(true);
    setSelectedVoiceChannel(channelId);
    handleVoiceChannelMembers(channelId);
  }

  return (
    <div>
      <div className="dashside-content">
        <div className="discord-inner">
          <h3 className="text-white">Discord</h3>
          <div className="discord-inner-main">
            <div className="ai-chat">
              <div className="recent-conversations">
                <div className="recent">
                  <p className="text-white pt-4">Recent Conversations</p>
                  <hr className="text-white border-2 m-0 " />
                  {filteredMembers?.map((member, index) => (
                    <div
                      className="outer"
                      key={index}
                      onClick={() => handleDM(member.id)}
                      style={{ cursor: "pointer", scrollbarWidth: "thin", backgroundColor: selectedUser === member.id ? "#D10ED1" : "#26053B" }}
                    >
                      <div className="logo">
                        <img src={member.avatar} alt="Chat" />
                      </div>
                      <div className="text">
                        <p className="text-white p1">
                          {member.displayName}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0 4px" }}>
                          <p className="text-white p2">
                            {dmMessages?.[member.id]?.slice(-1)[0]?.content || "No messages yet"}
                          </p>
                          {dmMessages?.[member.id]?.slice(-1)[0]?.timestamp &&
                            (
                              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <svg width="8" height="8">
                                  <circle cx="4" cy="4" r="3" stroke="white" strokeWidth="1" fill="white" />
                                </svg>
                                <span className="text-white p2">
                                  {formatDistanceToNow(dmMessages?.[member.id]?.slice(-1)[0]?.timestamp, { addSuffix: false, prefix: false })}
                                </span>
                              </span>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <>
                  {channelCategories.map((category, index) => (
                    <div className="general" key={index}>
                      <p className="text-white pt-4">{category.name}</p>
                      <hr className="text-white border-2 m-0 " />
                      {textChannels
                        .filter(channel => channel.parentId === category.id)
                        .map((channel, index) => (
                          <div
                            className="outer"
                            key={index}
                            onClick={() => handleChannelMessages(channel.id)}
                            style={{ cursor: "pointer", scrollbarWidth: "thin", backgroundColor: selectedChannel === channel.id ? "#D10ED1" : "#26053B" }}
                          >
                            <div className="text">
                              <p className="text-white p1">
                                <span className="channel-icon">#</span> {channel.name}
                              </p>
                              <p className="text-white p2">{channel.description}</p>
                            </div>
                          </div>
                        ))}
                      {voiceChannels
                        .filter(channel => channel.parentId === category.id)
                        .map((channel, index) => (
                          <div
                            className="outer"
                            key={index}
                            onClick={() => handleVoiceChannel(channel.id)}
                            style={{ cursor: "pointer", scrollbarWidth: "thin", backgroundColor: selectedVoiceChannel === channel.id ? "#D10ED1" : "#26053B" }}
                          >
                            <div className="text">
                              <p className="text-white p1">
                                <span className="channel-icon">🔊</span> {channel.name}
                              </p>
                              <p className="text-white p2">{channel.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </>

                <div className="bottom justify-content-between">
                  <div className="left">
                    <div className="logo">
                      <img
                        src="/assets/icons/navbaricons/eoas.svg"
                        alt="Chat"
                      />
                    </div>
                    <div className="text">
                      <p className="text-white p1">Ozzy Osbourne</p>
                      <p className="text-white p2">#112011</p>
                    </div>
                  </div>
                  <div className="setting d-flex   gap-1">
                    <img
                      src=" /assets/icons/file.svg"
                      alt=""
                      className="file-img"
                    />
                    <img src=" /assets/icons/setting.svg" alt="" />
                  </div>
                </div>
              </div>

              {isVoiceChannel ? (
                <div className="chats">
                  <div className="chat-messages" style={{ overflowY: 'scroll', height: '90%' }}>
                    <p className="text-white" style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>Voice Channel Members</p>
                    {voiceChannelMembers && voiceChannelMembers.length > 0 ? (
                      voiceChannelMembers.map((member, index) => (
                        <div key={index} className="voice-channel-member">
                          <img
                            src={member.avatar || "https://cdn.discordapp.com/embed/avatars/3.png"}
                            alt={member.username}
                            className="member-avatar"
                          />
                          <span className="member-name text-white">{member.displayName}</span>
                          {member.nickname && <span className="member-nickname text-white">({member.nickname})</span>}
                          <div className="member-status">
                            {member.selfDeaf ? (
                              <Icon icon="mdi:headphones-off" color="#f04747" width="16" height="16" />
                            ) : (
                              <Icon icon="mdi:headphones" color="#43b581" width="16" height="16" />
                            )}
                            {member.selfMute ? (
                              <Icon icon="mdi:microphone-off" color="#f04747" width="16" height="16" />
                            ) : (
                              <Icon icon="mdi:microphone" color="#43b581" width="16" height="16" />
                            )}
                            {member.streaming ? (
                              <Icon icon="mdi:video" color="#593695" width="16" height="16" />
                            ) : (
                              <Icon icon="mdi:video-off" color="#747f8d" width="16" height="16" />
                            )}
                            {member.selfVideo ? (
                              <Icon icon="mdi:video" color="#593695" width="16" height="16" />
                            ) : (
                              <Icon icon="mdi:video-off" color="#747f8d" width="16" height="16" />
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-white">No members in this voice channel</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="chats">
                  <div className="chat-messages" style={{ overflowY: 'scroll', height: '90%' }}>
                    {isDm ? (
                      <>
                        {dmMessages?.[selectedUser]?.map((message, index) => (
                          <div className="chat-message" key={index}>
                            <div className="logo">
                              <img
                                src={message?.author?.avatar || '/assets/images/default-avatar.png'}
                                alt={`${message?.author?.displayName} logo`}
                                className="logo-img"
                              />
                              <p className="text-white">{message?.author?.displayName}</p>
                            </div>
                            <div className="msg">
                              <div className="inner-msg">
                                <p className="text-white">{message?.type === 7 ? `${message?.author?.username} just slid into the server.` : message?.content}</p>
                              </div>
                              <div className="time">
                                <p className="small text-white">{(new Date(message?.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))}, {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {channelMessages?.map((message, index) => (
                          <div className="chat-message" key={index}>
                            <div className="logo">
                              <img
                                src={message.authorAvatar || '/assets/images/default-avatar.png'}
                                alt={`${message.authorUsername} logo`}
                                className="logo-img"
                              />
                              <p className="text-white">{message.authorName}</p>
                            </div>
                            <div className="msg">
                              <div className="inner-msg">
                                <p className="text-white">{message.type === 7 ? `${message.authorUsername},  just slid into the server.` : message.content}</p>
                              </div>
                              <div className="time">
                                <p className="small text-white">{(new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))}, {formatDistanceToNow(message.createdAt, { addSuffix: true })}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <div className="start-chatting">
                    <form onSubmit={isDm ? handleDmSubmit : handleSubmit}>
                      <input type="text" placeholder="Start Chatting" onChange={(e) => setMessage(e.target.value)} value={message} />
                      <button className="send-btn" type="submit">
                        <img src="/assets/icons/send.svg" alt="Send Icon" />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="discord-ranking ">
              <div className="right-side-content">
                <p className="large text-white fw-semibold pb-2">
                  Discord Ranking{" "}
                </p>
                <div className="main">
                  <p className="large text-white ">Rank</p>
                  <p className="large text-white p2">Players</p>
                  <p className="large text-white">Score</p>
                </div>
                <div className="right-side-inner">{renderDiscordRanking()} </div>
                <div className="button pt-3 w-100 d-flex justify-content-center">
                  <button className="view-btn">See all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Discordinner;
