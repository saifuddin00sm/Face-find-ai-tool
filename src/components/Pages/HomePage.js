import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { SearchBar } from "../UI/SearchBar";

const accordionData = [
  {
    id: 1,
    ques: "Do you save the photos that are uploaded?",
    ans: "No. We do not save the photos that users upload.",
  },
  {
    id: 2,
    ques: "Where does the engine search for photos online?",
    ans: "FaceFind's engine searches for photos only in public websites that are open to all and do not require user/password.",
  },
  {
    id: 3,
    ques: "I tried to upload a photo and i got 0 results, what should i do?",
    ans: "  Please try uploading a different photo with higher quality. Try to upload portrait images as they work best.",
  },
  {
    id: 4,
    ques: "I have an idea for a feature, can i speak with you guys?",
    ans: "Of course, contact us and lets discuss your idea.",
  },
];

export const HomePage = () => {
  const [activeKey, setActiveKey] = useState(accordionData[0].id);

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };
  return (
    <>
      <section className="hero-area" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="hero-left pe-xl-4">
                <h2>
                  Face Search <span>Engine</span>
                </h2>
                <h4>
                  Find <span>Faces</span> <span className="online">Online</span>{" "}
                  <span>by Photo</span>{" "}
                </h4>
                <p>
                  Upload a photo with a face and find out where that face is
                  online
                </p>
                <SearchBar placeholderTxt="Upload a photo"/>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="hero-right text-center">
                <img src="images/hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero-area end  */}

      {/* <!-- partner-area start --> */}
      <div className="partner-area">
        <div className="container">
          <div className="partner-main">
            <div className="partner-item">
              <img src="images/partner-1.png" alt="" />
            </div>
            <div className="partner-item">
              <img src="images/partner-2.png" alt="" />
            </div>
            <div className="partner-item">
              <img src="images/partner-3.png" alt="" />
            </div>
            <div className="partner-item">
              <img src="images/partner-4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- partner-area end -->

        <!-- verify-area start --> */}
      <section className="verify-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="verify-item text-center text-md-left">
                <img src="images/verify.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="verify-cnt ps-lg-4 ps-xl-5">
                <h2>
                  Find if <br />
                  someone is <span>using your face</span>
                </h2>
                <p>
                  Upload a photo and instantly see if someone is using your face
                  without your permission in different websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- verify-area end -->

        <!-- face-area start --> */}
      <section className="face-area" id="exclude-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="face-cnt pe-xl-5">
                <h2>
                  Exclude Your <span>Face From Search Results</span>
                </h2>
                <p>
                  If you wish to exclude your face from our search engine, you
                  can easily do it. Contact us{" "}
                </p>
                <a href="mailto:optout@facefind.ai">Opt-Out Request</a>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="face-item text-center">
                <img src="images/face.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- face-area end -->

        <!-- avoid-area start --> */}
      <section className="avoid-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="avoid-item text-center text-md-left">
                <img src="images/avoid.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="avoid-cnt ps-xl-5">
                <h2>
                  See{" "}
                  <span>
                    who <br />
                    you look like
                  </span>
                </h2>
                <p>
                  Our AI proprietary face search engine will compare the input
                  face to millions of faces online and will show people that are
                  very similar to the input face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- avoid-area end -->

        <!-- testimonial-area start --> */}
      <div className="testimonial-area">
        <div className="container">
          <div className="testimonial-upper">
            <h4>Testimonials</h4>
            <h2>What Our Users Say</h2>
          </div>
          <div className="testimonial-main">
            <div className="main-content">
              <div id="owl-csel1" className="owl-carousel owl-theme">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={2}
                  autoplay={true}
                  navigation={true}
                  modules={[Navigation]}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,

                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    }
                  }}
                >
                  <SwiperSlide>
                    <div className="testimonial-box">
                      <img src="images/testimonial-1.png" alt="" />
                      <div className="testimonial-cnt">
                        <h4>James Robert</h4>
                        <p>
                          FaceFind found faces online even when i at first
                          glance didn’t recognize that it’s the same person. Wow
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-box">
                      <img src="images/testimonial-2.png" alt="" />
                      <div className="testimonial-cnt">
                        <h4>John Smith</h4>
                        <p>
                          I use FaceFind to make sure no one is using my photos
                          without my permission. They are very helpful
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-box">
                      <img src="images/testimonial-1.png" alt="" />
                      <div className="testimonial-cnt">
                        <h4>James Robert</h4>
                        <p>
                          FaceFind found faces online even when i at first
                          glance didn’t recognize that it’s the same person. Wow
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-box">
                      <img src="images/testimonial-2.png" alt="" />
                      <div className="testimonial-cnt">
                        <h4>John Smith</h4>
                        <p>
                          I use FaceFind to make sure no one is using my photos
                          without my permission. They are very helpful
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-box">
                      <img src="images/testimonial-1.png" alt="" />
                      <div className="testimonial-cnt">
                        <h4>James Robert</h4>
                        <p>
                          FaceFind found faces online even when i at first
                          glance didn’t recognize that it’s the same person. Wow
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-box">
                      <img src="images/testimonial-2.png" alt="" />
                      <div className="testimonial-cnt">
                        <h4>John Smith</h4>
                        <p>
                          I use FaceFind to make sure no one is using my photos
                          without my permission. They are very helpful
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial-area end -->
        
        <!-- faq-area start --> */}
      <section className="faq-area" id="faq-area">
        <div className="container">
          <div className="faq-heading text-center">
            <h2>Frequency Asked Questions</h2>
          </div>
          <div className="faq-main">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              {accordionData.map(({ ques, ans, id }) => (
                <Accordion.Item eventKey={id} key={id} className="mb-2">
                  <Accordion.Header>{ques}</Accordion.Header>
                  <Accordion.Body>{ans}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
