import './backgroundDark.css'

const BackgroundDark = () => {

  return (
    <div>
      <video loop autoPlay muted id='bg-video'>
        <source src='https://res.cloudinary.com/marangadev/video/upload/v1696626926/portfolio/moon-planet_ryroi6.webm' type='video/webm' />
      </video>
    </div >
  )
}

export default BackgroundDark