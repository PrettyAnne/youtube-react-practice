import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  // <h1>{props.video.snippet.title}</h1>
  // video가 반복되고 있기 때문에 props 대신 video를 넣어주면
  // props 반복을 줄일 수 있다. snippet도 마찬가지
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
