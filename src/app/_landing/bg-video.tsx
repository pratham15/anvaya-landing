const BackgroundLandingVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      className="fixed right-0 bottom-0 min-h-max max-w-max z-5"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundLandingVideo;
