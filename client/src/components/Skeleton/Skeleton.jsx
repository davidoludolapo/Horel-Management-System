import React from "react";
import "./skeleton.css"
import CircularProgress from '@mui/material/CircularProgress';

function Skeleton({ type }) {
    const COUNTER = 3
    const COUNTER2 = 5

  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        {/* <div className="postAvatar"></div>
        <div className="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div> */}
      </div>
    </div>
  )
  const Circle = () => (
      <div className="circle">
          <CircularProgress />
      </div>
  )
 if (type === "featured") return Array(COUNTER).fill(<FeedSkeleton/>)
 if (type === "list") return Array(COUNTER2).fill(<FeedSkeleton/>)
 if (type === "circle") return <Circle/>
}

export default Skeleton;
