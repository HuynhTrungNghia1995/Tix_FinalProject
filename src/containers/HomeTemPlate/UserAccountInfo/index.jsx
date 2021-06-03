import React, { useEffect } from "react";
import AccountTicketsBooked from "../../../components/AccountTicketsBooked";
import Footer from "../../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { fetchUserInfo } from "./modules/action";
import { useLocation } from "react-router";

export default function UserAccountInfo() {
  const dispatch = useDispatch();
  const taiKhoan = useLocation().state;
  useEffect(() => {
    dispatch(fetchUserInfo({ taiKhoan: taiKhoan }));
  }, []);
  const userInfo = useSelector((state) => state.userInfoReducer);
  //console.log(userInfo);
  const { loading } = userInfo;
  if (loading) return <h1>Loading....</h1>;
  return (
    <div className="userAccountInfo">
      <AccountTicketsBooked userInfo={userInfo} />
      <Footer />
    </div>
  );
}
