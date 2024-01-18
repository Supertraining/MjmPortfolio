import './backgroundDark.css';

const videoUrl =
  'https://res.cloudinary.com/marangadev/video/upload/v1696626926/portfolio/moon-planet_ryroi6.webm';

const BackgroundDark = () => {
  return (
    <div>
      <video
        loop
        autoPlay
        muted
        id='bg-video'>
        <source
          src={videoUrl}
          type='video/webm'
        />
      </video>
    </div>
  );
};

export default BackgroundDark;
