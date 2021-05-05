import React from "react";
import "./style.css";

export default function IntroFilm() {
  return (
    <section id="intro-film" className="intro-film">
      <div className="container box-ticket">
        <div className="row border rounded py-4 order-ticker">
          <div className="col-xl-4">
            <div className="nav-item dropdown city-drop border-right">
              <a
                className="nav-link dropdown-toggle"
                href="#slider"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="text-span1">Phim</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#slider">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#slider">
                  Hà Nội
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 pl-0">
            <div className="nav-item dropdown city-drop border-right">
              <a
                className="nav-link dropdown-toggle text-decoration-none"
                href="#slider"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="text-span2">Rạp</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#slider">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#slider">
                  Hà Nội
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 pl-0">
            <div className="nav-item dropdown city-drop border-right">
              <a
                className="nav-link dropdown-toggle"
                href="#slider"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="text-span">Ngày Xem</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#slider">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#slider">
                  Hà Nội
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 pl-0">
            <div className="nav-item dropdown city-drop border-right">
              <a
                className="nav-link dropdown-toggle"
                href="#slider"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="text-span">Xuất Chiếu</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#slider">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#slider">
                  Hà Nội
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <button type="button" className="btn px-3">
              Mua Vé Ngay
            </button>
          </div>
        </div>
      </div>
      <div className="list-film">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#showing"
              role="tab"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" data-toggle="tab" href="#coming" role="tab">
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="showing"
            role="tabpanel"
          >
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner pt-5 mt-5">
                <div className="carousel-item active" data-interval={10000}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/nu-than-chien-binh-1984-wonder-woman-1984-16069039499631_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <img
                            alt=""
                            src="./images/film_type_1.png"
                            className="type_film"
                          />
                          <div className="rating">
                            <p>7.1</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C13</span>
                              Nữ Thần Chiến Binh 1984 - Wonder Woman 1984 (C13)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/thanh-guom-diet-quy-chuyen-tau-vo-tan-demon-slayer-the-movie-mugen-train-p-16063888466666_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <img
                            alt=""
                            src="./images/film_type_1.png"
                            className="type_film"
                          />
                          <div className="rating">
                            <p>9.1</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C13</span>
                              Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận - Demon
                              Slayer: The Movie Mugen Train (C13)
                            </div>
                            <div className="time-film mt-1">117 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/nghe-sieu-kho-extreme-job-c18-16074190927361_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>8.9</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C18</span>
                              Nghề Siêu Khó - Extreme Job (C18)
                            </div>
                            <div className="time-film mt-1">111 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/dai-dich-cum-the-flu-p-16091268156123_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <img
                            alt=""
                            src="./images/film_type_3.png"
                            className="type_film"
                          />
                          <div className="rating">
                            <p>5.4</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="sneak-show">Suất Chiếu Sớm</div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Đại Dịch Cúm - The Flu (P)
                            </div>
                            <div className="time-film mt-1">123 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/tho-san-quai-vat-monster-hunter-c13-16091253467891_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <img
                            alt=""
                            src="./images/film_type_3.png"
                            className="type_film"
                          />
                          <div className="rating">
                            <p>5.4</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="sneak-show">Suất Chiếu Sớm</div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C13</span>
                              Thợ Săn Quái Vật - Monster Hunter (C13)
                            </div>
                            <div className="time-film mt-1">104 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/chi-muoi-ba-2-16061875740652_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>7.9</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C18</span>
                              Chị Mười Ba: 3 Ngày Sinh Tử
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/soul-16032488077578_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>9.0</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Cuộc Sống Nhiệm Màu - Soul (P)
                            </div>
                            <div className="time-film mt-1">
                              100 phút - 8 IMDb
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/nguoi-can-quen-phai-nho-16069799897482_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>6.8</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C16</span>
                              Người Cần Quên Phải Nhớ (C16)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval={2000}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/doraemon-nobita-va-nhung-ban-khung-long-moi-doraemon-the-movie-nobita-s-new-dinosaurs-p-16074846198854_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>8.2</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Doraemon: Nobita và Những Bạn Khủng Long Mới -
                              Doraemon the Movie: Nobita's New Dinosaurs (P)
                            </div>
                            <div className="time-film mt-1">110 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/josee-nang-tho-cua-toi-josee-c16-16080214147312_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>7.4</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C16</span>
                              Josée, Nàng Thơ Của Tôi - Josée (C16)
                            </div>
                            <div className="time-film mt-1">117 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/gia-dinh-croods-ky-nguyen-moi-the-croods-new-age-p-16057775991222_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>8.9</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Gia Đình Croods: Kỷ Nguyên Mới - The Croods: New
                              Age (P)
                            </div>
                            <div className="time-film mt-1">95 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/tiec-trang-mau-blood-moon-party-16016226514166_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>9.2</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C18</span>
                              Tiệc Trăng Máu - Blood Moon Party (C18)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/cuoc-chien-huy-diet-skylines-c18-16075011488312_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>7.8</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C18</span>
                              Cuộc Chiến Hủy Diệt - Skylines (C18)
                            </div>
                            <div className="time-film mt-1">114 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/toi-ac-thinh-lang-stone-skipping-c16-16075018430852_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>6</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C16</span>
                              Tội Ác Thinh Lặng - Stone Skipping (C16)
                            </div>
                            <div className="time-film mt-1">107 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/ke-san-mo-16045488462735_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>8.6</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn red-age">C16</span>
                              Kẻ Săn Mộ - Collectors (C16)
                            </div>
                            <div className="time-film mt-1">115 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/violet-garden-hoi-uc-khong-quen-violet-evergarden-the-movie-p-16061871900447_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="rating">
                            <p>8.9</p>
                            <div className="star">
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.png" />
                              <img alt="" src="./images/star1.2.png" />
                            </div>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Violet Garden: Hồi Ức Không Quên - Violet
                              Evergarden: The Movie (P)
                            </div>
                            <div className="time-film mt-1">140 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleInterval"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
                <img
                  alt=""
                  src="./images/back-session.png"
                  className="back-img"
                />
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleInterval"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
                <img
                  alt=""
                  src="./images/next-session.png"
                  className="next-img"
                />
              </a>
            </div>
          </div>
          <div className="tab-pane fade" id="coming" role="tabpanel">
            <div
              id="carouselInterval"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner pt-5 mt-5">
                <div className="carousel-item active" data-interval={10000}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/ky-si-cuoi-rong-dragon-rider-p-16091398279162_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>01/01</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                            <button className="btn">
                              <a href="#slider" className="text-white">
                                MUA VÉ
                              </a>
                            </button>
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Kỵ Sỹ Cưỡi Rồng - Dragon Rider (P)
                            </div>
                            <div className="time-film mt-1">92 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/em-la-cua-em-16091411645152_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>08/01</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              'Em' Là Của Em (P)
                            </div>
                            <div className="time-film mt-1">0 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>15/01</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn red-age">C16</span>
                              Lừa Đểu Gặp Lừa Đảo - The Con-Heartist (C16)
                            </div>
                            <div className="time-film mt-1">128 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16069789454519_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/02</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Gái Già Lắm Chiêu V - Những Cuộn Đời Vương Giả (P)
                            </div>
                            <div className="time-film mt-1">0 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/lat-mat-48h-15790616253900_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/02</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Lật Mặt:48h (P)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/trang-ti-16049105870673_215x318.png"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/02</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Trạng Tí
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/thanh-soi-15825151819587_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/02</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Thanh Sói (P)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/quai-thu-so-chieu-rumble-15827737365485_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/02</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Quái Thú So Chiêu - Rumble
                            </div>
                            <div className="time-film mt-1">0 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval={2000}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/eternals-15668741764848_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/02</p>
                          </div>
                          <div className="hidden-content">
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Eternals (P)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/tom-jerry-15742365634447_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>26/02</p>
                          </div>
                          <div className="hidden-content">
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Tom &amp; Jerry (P)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/biet-doi-san-ma-chuyen-kiep-ghostbusters-afterlife-15759470166331_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>05/03</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Biệt Đội Săn Ma Chuyển Kiếp - Ghostbusters
                              Afterlife (P)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/raya-and-the-last-dragon-15668824361223_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>12/03</p>
                          </div>
                          <div className="hidden-content">
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Raya and the Last Dragon
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/morbius-15740596121893_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>19/03</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Morbius
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/the-boss-baby-2-15742374835935_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>26/03</p>
                          </div>
                          <div className="hidden-content">
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              The Boss Baby 2
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/em-va-trinh-15813267048692_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <div className="showing-time">
                            <p>01/04</p>
                          </div>
                          <div className="hidden-content">
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Em Và Trịnh
                            </div>
                            <div className="time-film mt-1">0 phút</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3">
                        <div className="item">
                          <img
                            alt=""
                            src="./images/fast-furious-9-15803709020861_215x318.jpg"
                            className="film-poster border rounded w-full"
                          />
                          <img
                            src="./images/film_type_1.png"
                            className="type_film"
                            alt=""
                          />
                          <div className="showing-time">
                            <p>02/04</p>
                          </div>
                          <div className="hidden-content">
                            <img alt="" src="./images/play-video.png" />
                            <div className="background_hidden" />
                          </div>
                          <div className="content-text visible">
                            <div className="film-name">
                              <span className="btn green-age">P</span>
                              Fast &amp; Furious 9 (P)
                            </div>
                            <div className="time-film mt-1">100 phút</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselInterval"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
                <img
                  alt=""
                  src="./images/back-session.png"
                  className="back-img"
                />
              </a>
              <a
                className="carousel-control-next"
                href="#carouselInterval"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
                <img
                  alt=""
                  src="./images/next-session.png"
                  className="netx-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
