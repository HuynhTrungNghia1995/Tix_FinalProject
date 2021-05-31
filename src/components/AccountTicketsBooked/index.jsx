import React from "react";
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

function createData(movie, cinema, seat, room, code) {
  return { movie, cinema, seat, room, code };
}
const a = (
  <div>
    E07 <br /> E08
  </div>
);
const rows = [
  createData("Kiều aaaaaaaaaaaaaa", "CNS Quốc Thanh", a, "Rạp 1", "53080"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AccountTicketsBooked() {
  const classes = useStyles();
  return (
    <div className="ticketInfo">
      <div className="container">
        {" "}
        <div className="info">
          <h1>Hi Du!</h1>
          <h3>Your are the boss of your account </h3>
          <br></br>
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
              {rows.map((row) => (
                <StyledTableRow key={row.movie}>
                  <StyledTableCell component="th" scope="row">
                    {row.movie}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.cinema}</StyledTableCell>
                  <StyledTableCell align="right">{row.seat}</StyledTableCell>
                  <StyledTableCell align="right">{row.room}</StyledTableCell>
                  <StyledTableCell align="right">{row.code}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
