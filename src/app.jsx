import { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
      // redirect: 리퀘스트를 할때 옵션을 전달
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAoVuULBbNqze5Jhu-ni8DEXtFV8pXTpqQ", requestOptions)
      .then(response => response.json())
      // text 보다는 json으로 변환하는게 좋음
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <VideoList videos={videos} />
  );
}

export default App;
