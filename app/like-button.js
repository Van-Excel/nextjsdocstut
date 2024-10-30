"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    console.log("Hi Likes");
    setLikes((likes) => likes + 1);
  };
  return <button onClick={handleClick}>Likes{likes}</button>;
}
