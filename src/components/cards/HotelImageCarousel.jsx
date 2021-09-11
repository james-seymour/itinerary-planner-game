import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import "./ImageCarousel.css"

const HotelImageCarousel = ({ photos }) => {

  return (
    <Carousel showThumbs={false}>
      {photos.map((photo) => (
        <div>
          <img src={photo}></img>          
        </div>

      ))} 
    </Carousel>
  )
}

export default HotelImageCarousel
