import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Post from "../components/Post";
import posts from "../../../public/data/posts";

export default class CarouselContainer extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{ marginTop: "30px" }}>
        <Slider {...settings}>
          {posts.map((post, index) => (
            <Post
              key={index}
              title={post.title}
              postDate={post.postDate}
              imagePath={post.imagePath}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
