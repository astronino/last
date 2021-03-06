import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselTransaction = (props) => {
  //console.log(props.images);
  return (
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 3
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3
    }
  }}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
{ props.images.map((image, index) =>
                <div
                className="d-block w-100"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: '113px'
                }}>
                </div>
          )}

</Carousel>
  );
}

export default CarouselTransaction;