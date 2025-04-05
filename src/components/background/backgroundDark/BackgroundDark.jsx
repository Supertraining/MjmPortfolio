import styles from "./backgroundDark.module.css"

const videoUrl =
  'https://res.cloudinary.com/marangadev/video/upload/v1696626926/portfolio/moon-planet_ryroi6.webm';

const BackgroundDark = () => {
  return (
    <div>
      <video
      className={`${styles.bg_video}`}
        loop
        autoPlay
        muted
        aria-label="background video"
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
