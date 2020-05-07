import React from "react";
import Form from "./Form";

const Message = ({ textMessage}) => {
  return (
    <div>
      <p>
        {textMessage.pseudo}: {textMessage.TheMessage}
      </p>
    </div>
  );
};

export default Message;
