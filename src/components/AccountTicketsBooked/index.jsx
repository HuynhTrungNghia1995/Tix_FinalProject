import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import "./style.css";
import { Avatar, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useDispatch } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    //marginTop: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    border: "solid 1px rgba(0,0,0,0.3)",
  },
  submit: {
    background: "#82ada9",
    "&:hover": {
      background: "#fff",
      color: "#82ada9",
      border: "solid 1px #82ada9",
    },
  },
}));
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
<<<<<<< HEAD
  console.log(userInfo);
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRegisterUserItem({
      hoTen: userInfo?.hoTen,
      taiKhoan: userInfo?.taiKhoan,
      email: userInfo?.email,
      matKhau: userInfo?.matKhau,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      soDt: userInfo?.soDT,
    });
  };

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [emptyPasswordNotice, setEmptyPasswordNotice] = useState(false);
  const [isEmailFormatNotice, setIsEmailFormatNotice] = useState(false);
  const [emptyFullNameNotice, setEmptyFullNameNotice] = useState(false);
=======
  const { loading } = props.userInfo;
  if (loading) return <h1>Loading....</h1>;
>>>>>>> main

  const [registerUserItem, setRegisterUserItem] = useState({
    hoTen: userInfo?.hoTen,
    taiKhoan: userInfo?.taiKhoan,
    email: userInfo?.email,
    matKhau: userInfo?.matKhau,
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    soDt: userInfo?.soDT,
  });
  const handleDisableNotice = () => {
    setIsValidPhoneNumber(false);
    setEmptyPasswordNotice(false);
    setIsEmailFormatNotice(false);
    setEmptyFullNameNotice(false);
  };
  const handleChangeRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterUserItem({
      ...registerUserItem,
      [name]: value,
    });
    if (registerUserItem.matKhau !== "") {
      setEmptyPasswordNotice(false);
    }
    if (registerUserItem.hoTen !== "") {
      setEmptyFullNameNotice(false);
    }
    if (
      registerUserItem.taiKhoan !== "" &&
      registerUserItem.matKhau !== "" &&
      registerUserItem.hoTen !== "" &&
      validEmail === true &&
      validPhone === true
    ) {
      setIsDisable(false);
    }
  };
  const validationPhoneNumber = () => {
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(registerUserItem.soDt)) {
      setIsValidPhoneNumber(false);
      setValidPhone(true);
    } else {
      setIsValidPhoneNumber(true);
      setValidPhone(false);
      setIsDisable(true);
    }
  };
  const handleValidationEmptyPassword = () => {
    if (registerUserItem.matKhau === "") {
      setEmptyPasswordNotice(true);
    }
  };
  const handleValidationEmptyFullName = () => {
    if (registerUserItem.hoTen === "") {
      setEmptyFullNameNotice(true);
    }
  };
  const handleValidationEmail = () => {
    const mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (registerUserItem.email.match(mailFormat)) {
      setIsEmailFormatNotice(false);
      setValidEmail(true);
    } else {
      setIsEmailFormatNotice(true);
      setValidEmail(false);
      setIsDisable(true);
    }
  };
  useEffect(() => {
    if (
      registerUserItem.taiKhoan !== "" &&
      registerUserItem.matKhau !== "" &&
      registerUserItem.hoTen !== "" &&
      validEmail === true &&
      validPhone === true
    ) {
      setIsDisable(false);
    }
  }, [validPhone]);
  useEffect(() => {
    if (
      registerUserItem.taiKhoan !== "" &&
      registerUserItem.matKhau !== "" &&
      registerUserItem.hoTen !== "" &&
      validEmail === true &&
      validPhone === true
    ) {
      setIsDisable(false);
    }
  }, [validEmail]);
  const handleValidationNotice = () => {
    if (emptyFullNameNotice) {
      setTimeout(handleDisableNotice, 2500);
      return (
        <Alert style={{ marginBottom: 20 }} severity="error">
          Họ Tên không được để trống
        </Alert>
      );
    }
    if (isValidPhoneNumber) {
      setTimeout(handleDisableNotice, 2500);
      return (
        <Alert style={{ marginBottom: 20 }} severity="error">
          Số điện thoại không đúng
        </Alert>
      );
    }
    if (emptyPasswordNotice) {
      setTimeout(handleDisableNotice, 2500);
      return (
        <Alert style={{ marginBottom: 20 }} severity="error">
          Mật Khẩu không được để trống
        </Alert>
      );
    }
    if (isEmailFormatNotice) {
      setTimeout(handleDisableNotice, 2500);
      return (
        <Alert style={{ marginBottom: 20 }} severity="error">
          Không đúng định dạng email
        </Alert>
      );
    }
  };
  const handleRegisterUser = (e) => {
    e.preventDefault();
    dispatch();
  };
  const body = (
    <div className={classes.paper} style={modalStyle}>
      <Avatar className={classes.avatar}>
        <Avatar className="p-1 mt-1" alt="Logo" src={"/images/logo.png"} />
      </Avatar>
      <Typography style={{ marginBottom: 20 }} component="h1" variant="h5">
        Edit User Info
      </Typography>
      {handleValidationNotice()}
      <form className={classes.form} onSubmit={handleRegisterUser} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="taiKhoan"
              variant="outlined"
              fullWidth
              label="Tài Khoản"
              disabled
              value={registerUserItem.taiKhoan}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="hoTen"
              variant="outlined"
              fullWidth
              label="Họ Tên"
              value={registerUserItem.hoTen}
              onChange={handleChangeRegister}
              onBlur={handleValidationEmptyFullName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              label="Email"
              onChange={handleChangeRegister}
              onBlur={handleValidationEmail}
              value={registerUserItem.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              name="matKhau"
              label="Mật Khẩu"
              type="password"
              onChange={handleChangeRegister}
              onBlur={handleValidationEmptyPassword}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="soDt"
              variant="outlined"
              fullWidth
              label="Số Điện Thoại"
              value={registerUserItem.soDt}
              onChange={handleChangeRegister}
              onBlur={validationPhoneNumber}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isDisable}
          style={{ marginTop: 20 }}
        >
          Done
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          style={{ marginTop: 20 }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
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
            <div className="account-inf">
              <h1 class="account-label">Account Info</h1>
              <h3>Your email: {userInfo?.email}</h3>
              <h3>Your phone: {userInfo?.soDT}</h3>
              <h3>Your id: {userInfo?.taiKhoan}</h3>
            </div>
            <div className="account-edit">
              <button className="btn btn-success" onClick={handleOpen}>
                Edit
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </div>
          </div>
          <h2>Here is your booking ticket : </h2>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Movie</StyledTableCell>
                <StyledTableCell>Cinema</StyledTableCell>
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
