import socketIO from "socket.io-client";
import React, { useState, useEffect } from "react";

const socket = socketIO.connect("http://localhost:3001");
const Like = ({ comment }) => {
  const [likeCounts, setLikeCounts] = useState([]);
  const [comments, setComments] = useState(comment);

  const Likes = likeCounts.filter(
    (likeCount) => likeCount.commentId === comment._id
  );

  const getLikes = () => {
    socket.emit("getLikes", {});
  };
  // console.log('likes : ', Likes)

  useEffect(() => {
    getLikes();
    socket.on("receiveLikes", (like) => {
      setLikeCounts(like);
    });
    socket.on("likeResponse", (like) => setLikeCounts([like, ...likeCounts]));
  }, [socket, likeCounts]);

  const addLike = () => {
    socket.emit("likeSend", {
      commentId: comment._id,
      userId: localStorage.getItem("userId"),
    });

    if (comment.userId !== localStorage.getItem("userId")) {
      socket.emit("notificationSend", {
        description: " has liked your comment there is ",
        commentId: comment._id,
        userIdSender: localStorage.getItem("userId"),
        userIdSenderName: localStorage.getItem("userName"),
        userIdSenderImage: localStorage.getItem("imageUrl"),
        userIdReceiver: comment.userId,
      });
    }

    /* socket.emit('likeDeleted', (id) => {
         id == likeCounts._id
         console.log(id)
      }) */
  };

  return (
    <div>
      <i className="fa-solid fa-thumbs-up" onClick={addLike}></i>
      <span> {Likes.length} </span>
    </div>
  );
};

export default Like;
