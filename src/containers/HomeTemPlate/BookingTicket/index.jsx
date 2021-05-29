import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Payment from "../../../components/Payment";
import SeatList from "../../../components/seatList";
import { fetchRoomList } from "./modules/action";
import "./style.css";

export default function BookingTicket() {
  const dispatch = useDispatch();

  const location = useLocation();
  const { idSchedule } = location.state;

  // console.log("idSchedule", idSchedule);

  useEffect(() => {
    dispatch(fetchRoomList(idSchedule));
  }, []);

  const roomListReducer = useSelector((state) => state.fetchRoomListReducer);

  const room = roomListReducer?.data;
  // console.log("room", room);

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const seats = [];

  if (room?.danhSachGhe && room.danhSachGhe?.length > 0) {
    for (let i = 0; i < 10; i++) {
      let seatGroup = [];
      for (let j = 0; j < 16; j++) {
        seatGroup.push(room.danhSachGhe[i * 16 + j]);
        if (j < 9)
          seatGroup[j] = {
            ...seatGroup[j],
            numChair: `${rows[i]}0${j + 1}`,
          };
        else
          seatGroup[j] = {
            ...seatGroup[j],
            numChair: `${rows[i]}${j + 1}`,
          };
      }
      seats.push({
        row: rows[i],
        seatsRow: seatGroup,
      });
    }
  }
  // console.log("seats", seats);

  const [state, setState] = useState({
    bookSeats: [],
    totalMoney: 0,
  });

  const addToBookSeats = (seat) => {
    let cloneBookSeats = [...state.bookSeats];

    let index = cloneBookSeats.findIndex(
      (item) => seat.numChair === item.numChair
    );
    if (index !== -1) return;

    cloneBookSeats.push(seat);
    let total = state.totalMoney + seat.giaVe;

    setState({
      bookSeats: cloneBookSeats,
      totalMoney: total,
    });
  };

  const removeFromBookSeats = (seat) => {
    let cloneBookSeats = [...state.bookSeats];

    let index = cloneBookSeats.findIndex(
      (item) => seat.numChair === item.numChair
    );
    if (index === -1) return;

    cloneBookSeats.splice(index, 1);
    let total = state.totalMoney - seat.giaVe;

    setState({
      bookSeats: cloneBookSeats,
      totalMoney: total,
    });
  };

  // console.log("state", state);

  return (
    <section
      className="container-fluid"
      id="book_ticket"
      // style={{
      //   backgroundImage: `url(${
      //     process.env.PUBLIC_URL + "images/backapp.jpg"
      //   })`,
      // }}
    >
      <div className="row">
        <div className="col-md-9 col-sm-12 left">
          <div className="info mb-2">
            <div className="cinema">
              <div className="py-2 pr-2">
                <img src={room?.thongTinPhim.hinhAnh} alt="" />
              </div>
              <div className="res-none">
                <p style={{ marginBottom: 5 }}>
                  {room?.thongTinPhim.tenCumRap} - {room?.thongTinPhim.tenRap}
                </p>
                <span>{room?.thongTinPhim.diaChi}</span>
              </div>
            </div>

            <div className="time">
              <span>thời gian giữ ghế</span>
              <p style={{ marginBottom: 0 }}>05:00</p>
            </div>
          </div>

          <div className="screen text-center">
            <img src="./images/screen.png" alt="" />
          </div>

          <SeatList
            addToBookSeats={addToBookSeats}
            removeFromBookSeats={removeFromBookSeats}
            seats={seats}
          />

          <div className="seat_case">
            <div className="px-3">
              <Button
                className="seat_type seat_normal"
                variant="contained"
              ></Button>
              <span>Ghế thường</span>
            </div>

            <div className="px-3">
              <Button
                className="seat_type seat_vip"
                variant="contained"
              ></Button>
              <span>Ghế VIP</span>
            </div>

            <div className="px-3">
              <Button
                className="seat_type seat_choosing"
                variant="contained"
              ></Button>
              <span>Ghế đang chọn</span>
            </div>

            <div className="px-3">
              <Button
                className="seat_type seat_choosed"
                variant="contained"
                disabled
              ></Button>
              <span>Ghế đã có người chọn</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-12 right">
          <Payment state={state} room={room} />
        </div>
      </div>
    </section>
  );
}
