import styles from "./backgroundLight.module.css";

// const videoUrl = 'https://res.cloudinary.com/marangadev/video/upload/v1696626924/portfolio/planet-earth-rotates_dhhycs.webm';

const BackgroundLight = () => {

  return (
    <div className={`${styles.bg_video} lightSide`	}>
      {/* <video loop autoPlay muted id='bg-video' className={`${styles.bg_video}`}>
        <source src={ videoUrl } type='video/mp4' />
      </video> */}
    </div>
  )
}

export default BackgroundLight