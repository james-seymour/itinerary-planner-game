import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const RestaurantCarousel = ({ children }) => {


  return (
    <Carousel showThumbs={false}>
      {children}
    </Carousel>
  )

}