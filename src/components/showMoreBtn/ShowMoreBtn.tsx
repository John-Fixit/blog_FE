"use client";

import { Button } from "antd";
import React from "react";

interface Props{
    eventAction : ()=>void
}

const ShowMoreBtn:React.FC<Props> = ({eventAction}) => {
  return (
    <Button type="text" size="large" className="dark:!text-white" onClick={eventAction}>
      Show more Post
    </Button>
  );
};

export default ShowMoreBtn;
