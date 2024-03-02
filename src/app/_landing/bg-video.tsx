const BackgroundLandingVideo = () => {
  return (
    <>
      <div className="z-[6] absolute right-0 bottom-0 h-full w-full bg-black bg-opacity-50" />
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute right-0 bottom-0 min-h-max min-w-max z-[5]"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default BackgroundLandingVideo;
