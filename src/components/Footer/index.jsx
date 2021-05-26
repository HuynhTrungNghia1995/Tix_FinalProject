import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row top">
          <div className="col__left col-md-4 col-sm-12">
            <p className="title hideOnMobile">TIX</p>
            <div className="row">
              <div className="col-lg-6 hideOnMobile">
                <a href="#slider">FAQ</a>
                <a href="#slider">Brand Guidelines</a>
              </div>
              <div className="col-lg-6 col-sm-12">
                <a href="#slider">Thỏa thuận sử dụng</a>
                <a href="#slider">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col__center col-md-4 col-sm-12 hideOnMobile">
            <p className="title">ĐỐI TÁC</p>
            <div className="col-12">
              <a href="#slider" title="CGV">
                <img src="/images/cgv.png" alt="cgv" />
              </a>
              <a href="#slider" title="BHD">
                <img src="/images/bhd.png" alt="bhd" />
              </a>
              <a href="#slider" title="Galaxy">
                <img src="/images/galaxycine.png" alt="galaxycine" />
              </a>
              <a href="#slider" title="Cinestar">
                <img src="/images/cinestar.png" alt="cinestar" />
              </a>
              <a href="#slider" title="Lotte Cinema">
                <img src="/images/lotte_cinema.png" alt="lotte_cinema" />
              </a>
            </div>
            <div className="col-12">
              <a href="#slider" title="MegaGS">
                <img src="/images/megags.png" alt="megags" />
              </a>
              <a href="#slider" title="Beta">
                <img src="/images/bt.jpg" alt="bt" />
              </a>
              <a href="#slider" title="DDC">
                <img src="/images/dongdacinema.png" alt="dongdacinema" />
              </a>
              <a href="#slider" title="Touch Cinema">
                <img src="/images/TOUCH.png" alt="TOUCH" />
              </a>
              <a href="#slider" title="Cinemax">
                <img src="/images/cnx.jpg" alt="cnx" />
              </a>
            </div>
            <div className="col-12">
              <a href="#slider" title="Starlight">
                <img src="/images/STARLIGHT.png" alt="STARLIGHT" />
              </a>
              <a href="#slider" title="Dcine">
                <img src="/images/dcine.png" alt="dcine" />
              </a>
              <a href="#slider" title="ZaloPay">
                <img src="/images/zalopay_icon.png" alt="zalopay_icon" />
              </a>
              <a href="#slider" title="Payoo">
                <img src="/images/payoo.jpg" alt="payoo" />
              </a>
              <a href="#slider" title="Vietcombank">
                <img src="/images/VCB.png" alt="VCB" />
              </a>
            </div>
            <div className="col-12">
              <a href="#slider" title="Agribank">
                <img src="/images/AGRIBANK.png" alt="AGRIBANK" />
              </a>
              <a href="#slider" title="Viettinbank">
                <img src="/images/VIETTINBANK.png" alt="VIETTINBANK" />
              </a>
              <a href="#slider" title="IVB">
                <img src="/images/IVB.png" alt="IVB" />
              </a>
              <a href="#slider" title="123Go">
                <img src="/images/123go.png" alt="123go" />
              </a>
              <a href="#slider" title="La Bàn">
                <img src="/images/laban.png" alt="laban" />
              </a>
            </div>
          </div>
          <div className="col__right col-md-4 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-12 hideOnMobile">
                <p className="title">MOBILE APP</p>
                <a href="#slider" title="Apple App">
                  <img
                    className="iconApp"
                    src="/images/apple-logo.png"
                    alt="app"
                  />
                </a>
                <a href="#slider" title="Android App">
                  <img
                    className="iconApp"
                    src="/images/android-logo.png"
                    alt="app"
                  />
                </a>
              </div>
              <div className="col-md-6 col-sm-12 textCenter">
                <p className="title hideOnMobile">SOCIAL</p>
                <a href="#slider" title="Facebook social">
                  <img
                    className="iconApp"
                    src="/images/facebook-logo.png"
                    alt="app"
                  />
                </a>
                <a href="#slider" title="Zalo social">
                  <img
                    className="iconApp"
                    src="/images/zalo-logo.png"
                    alt="app"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row bottom">
          <div className="col-12 col-md-1 imgFooter">
            <img className="zionIcon" src="/images/zion-logo.jpg" alt="zion" />
          </div>
          <div className="col-12 col-md-9 info">
            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <ul>
              <li>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </li>
              <li>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </li>
              <li>Số Điện Thoại (Hotline): 1900 545 436</li>
              <li>
                Email: <a href="#slider">support@tix.vn</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-2 imgFooter d-flex justify-content-end">
            <a href="#slider">
              <img
                className="boCongThuongIcon"
                src="/images/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="boCongThuong"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
