import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./style.css";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const renderSeats = (danhSachGhe) => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const numSeatInRow = 16;

  return danhSachGhe.map((item, index) => {
    let hangGhe = Math.floor(Number(item.tenGhe) / numSeatInRow);
    let viTriGhe = Number(item.tenGhe) - numSeatInRow * hangGhe;
    return (
      <p style={{ marginBottom: 5 }} key={index}>
        {rows[hangGhe]}
        {viTriGhe.toString().padStart(2, "0")}
      </p>
    );
  });
};
export default function AccountTicketsBooked(props) {
  const classes = useStyles();
  const userInfo = props.userInfo.data;
  console.log(userInfo);
  const { loading } = props.userInfo;
  if (loading) return <h1>Loading....</h1>;

  return (
    <div className="ticketInfo">
      <div className="container">
        {" "}
        <div className="info">
          <h1>
            Hi <span className="name">{userInfo?.hoTen}</span>!
          </h1>
          <h3>Your are the boss of your account </h3>
          <br></br>
          <div className="detail">
            <h3>Your email: {userInfo?.email}</h3>
            <h3>Your phone: {userInfo?.soDT}</h3>
            <h3>Your id: {userInfo?.taiKhoan}</h3>
          </div>
          <h2>Here is your booking ticket : </h2>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Movie</StyledTableCell>
                <StyledTableCell align="right">Cinema</StyledTableCell>
                <StyledTableCell align="right">Seats</StyledTableCell>
                <StyledTableCell align="right">Room</StyledTableCell>
                <StyledTableCell align="right">Ticket Code</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userInfo?.thongTinDatVe?.map((row) => {
                return (
                  <StyledTableRow key={row.maVe}>
                    <StyledTableCell component="th" scope="row">
                      {row.tenPhim}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.danhSachGhe[0].tenHeThongRap}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {renderSeats(row.danhSachGhe)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.danhSachGhe[0].tenRap}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.maVe}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
