import './backgroundLight.css'

const videoUrl = 'https://res.cloudinary.com/marangadev/video/upload/v1696626924/portfolio/planet-earth-rotates_dhhycs.webm';

const BackgroundLight = () => {

  return (
    <div>
      <video loop autoPlay muted id='bg-video'>
        <source src={ videoUrl } type='video/webm' />
      </video>
    </div>
  )
}

export default BackgroundLight