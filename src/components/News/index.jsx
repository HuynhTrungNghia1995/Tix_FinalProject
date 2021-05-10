import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabPaneContent from "../TabPaneContent";
import "./style.css";
export default function News() {
  const data = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  console.log(data);
  const handleOnClick = (data) => {
    return () => {
      document.getElementById(
        `${data.id}-${data.listNews[data.countRow].id}`
      ).style.display = "flex";
    };
  };
  const renderTabPaneNews = () => {
    return data.map((item, index) => {
      return (
        <div
          class={index == 0 ? "tab-pane fade show active" : "tab-pane fade"}
          id={"pills-" + item.id}
          key={index}
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <TabPaneContent data={item} />

          <button onClick={handleOnClick(item)} className="btn more" id="more">
            XEM THÊM
          </button>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <section class="news">
        <div className="container">
          <div
            className="tab-nav nav-news"
            style={{ backgroundImage: 'url("/images/back-news.png")' }}
          >
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-dienAnh"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Điện Ảnh 24h
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-review"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-khuyenMai"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Khuyến Mãi
                </a>
              </li>
            </ul>
          </div>

          <div class="tab-content" id="pills-tabContent">
            {renderTabPaneNews()}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
