import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const CardImage = ({ mainImageAnimation, mainImg, mainImgClassname }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className={`col-12 d-flex align-items-center`}>
      <img
        ref={ref}
        src={mainImg}
        alt="Project main"
        className={`${mainImgClassname} col-12  img-fluid shadow rounded ${
          inView && mainImageAnimation
        }`}
        width={430}
        height={192}
        style={{ maxHeight: "190px", minHeight: "117px" }}
      />
    </div>
  );
};

CardImage.propTypes = {
  mainImageAnimation: PropTypes.string,
  mainImg: PropTypes.string,
  mainImgClassname: PropTypes.string,
};

CardImage.defaultProps = {
  mainImageAnimation: "",
  mainImg: "",
  mainImgClassname: "",
};

export default CardImage;
