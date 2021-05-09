import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './modules/action';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                CyberSoft
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const bg = process.env.PUBLIC_URL + "images/backapp.jpg";
const useStyles = makeStyles((theme) => ({
    bgRoot: {
        background: `url(${bg})`,
        height: "100vh"
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "100vh",
        background: "#fff",
        padding: theme.spacing(8, 2, 2, 2),

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "transparent",
        border: "solid 1px rgba(0,0,0,0.3)"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: '#82ada9',
        '&:hover': {
            background: '#fff',
            color: "#82ada9",
            border: "solid 1px #82ada9",
        }
    },
}));

export default function Register() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const registerSuccess = useSelector(state => state.registerUserReducer.data);
    const logo = process.env.PUBLIC_URL + "images/logo.png";
    const [isValid, setIsValid] = useState(false);
    const [registerUserItem, setRegisterUserItem] = useState({
        hoTen: '',
        taiKhoan: '',
        email: '',
        matKhai: '',
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        soDt: ''
    })
    const handleChangeRegister = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterUserItem({
            ...registerUserItem,
            [name]: value
        })
    }
    const handleRegisterUser = (e) => {
        e.preventDefault();
        dispatch(registerUser(registerUserItem));
    }
    return (
        <div className={classes.bgRoot}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Avatar className="p-1 mt-1" alt="Logo" src={logo} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={handleRegisterUser} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="hoTen"
                                    variant="outlined"
                                    fullWidth
                                    label="Tên Đầy Đủ"
                                    onChange={handleChangeRegister}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="taiKhoan"
                                    variant="outlined"
                                    fullWidth
                                    label="Tài Khoản"
                                    onChange={handleChangeRegister}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    label="Email"
                                    onChange={handleChangeRegister}
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
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="soDt"
                                    variant="outlined"
                                    fullWidth
                                    label="Số Điện Thoại"
                                    onChange={handleChangeRegister}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={isValid}
                        >
                            Sign Up
          </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <NavLink to="/login" variant="body2" style={{ color: "#82ada9" }}>
                                    Already have an account? Sign in
              </NavLink>
                            </Grid>
                        </Grid>
                    </form>
                    <Box>
                        <Copyright />
                    </Box>
                </div>

            </Container>
        </div>
    );
}