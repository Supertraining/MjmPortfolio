import './backgroundLight.css'

const BackgroundLight = () => {

  return (
    <div>
      <video loop autoPlay muted id='bg-video'>
        <source src='https://res.cloudinary.com/marangadev/video/upload/v1696626924/portfolio/planet-earth-rotates_dhhycs.webm' type='video/webm' />
      </video>
    </div>
  )
}

export default BackgroundLight