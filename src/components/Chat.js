
import React, { useContext } from "react";


import Cam from "../img/Cam.png";
import Add from "../img/add-friend.png";
import More from "../img/More.png";
import Messages from "./Messages";
import Output from "./Output";
import { ChatContext } from "../context/ChatContext";
 
   

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Output/>
    </div>
  );
};

export default Chat;
