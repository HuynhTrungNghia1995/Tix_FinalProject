import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./style.css";

export default function Carousel() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchFilmList("GP01"));
  // }, []);

  // const state = useSelector((state) => state.fetchFilmListReducer);
  // const sliders = state.data?.slice(0, 3);
  // console.log(sliders);
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [trailer, setTrailer] = useState();
  const handleOpen = (id) => {
    setOpen(true);
    let index = sliders.findIndex((slider) => slider.maPhim === id);
    if (index !== -1) {
      setTrailer(sliders[index].trailer);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sliders = [
    {
      maPhim: "001",
      hinhAnh: "./images/carousel_1.png",
      trailer: "https://www.youtube.com/embed/sx1ROHCmY-4?autoplay=1",
    },
    {
      maPhim: "002",
      hinhAnh: "./images/carousel_2.png",
      trailer: "https://www.youtube.com/embed/UeyaR8jWl2c?autoplay=1",
    },
    {
      maPhim: "003",
      hinhAnh: "./images/carousel_3.png",
      trailer: "https://www.youtube.com/embed/uqJ9u7GSaYM?autoplay=1",
    },
  ];

  const renderSliders = () => {
    return sliders.map((slider, index) => {
      return (
        <div
          key={slider.maPhim}
          className={index === 0 ? "carousel-item active" : "carousel-item"}
        >
          <img src={slider.hinhAnh} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <button
              className="play-trailer"
              type="button"
              onClick={() => handleOpen(slider.maPhim)}
            >
              <i className="fa fa-play"></i>
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <iframe
                  width="1120"
                  height="630"
                  src={trailer}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Fade>
            </Modal>
          </div>
          <div className="carousel-caption d-none d-md-block" />
        </div>
      );
    });
  };

  return (
    <section id="slider" className="slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ul className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">{renderSliders()}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
