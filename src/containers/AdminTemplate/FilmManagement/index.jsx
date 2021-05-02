import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Button, Grid, InputBase, TableHead } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { fetchFilmList } from "./modules/action";
const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles((theme) => ({
    table: {
        minWidth: 500,
    },
    search: {
        position: 'relative',
        border: "solid 1px black",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
            border: "solid 1px rgba(0,0,0,0.4)"
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        right: 0
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '22ch',
        },
    },
    addBtn: {
        color: "#4BB543"
    }

}));

export default function FilmManagement() {
    const classes = useStyles2();
    const dispatch = useDispatch();
    const filmList = useSelector(state => state.fetchFilmListReducer.data);
    const [page, setPage] = useState(0);
    const [isDisable, setIsDisable] = useState(true);
    const [handleAddFilm, setHandleAddFilm] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    useEffect(() => {
        dispatch(fetchFilmList());
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleEmptyRow = () => {
        if (filmList) {
            const emptyRows = rowsPerPage - Math.min(rowsPerPage, filmList.length - page * rowsPerPage);
            return emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )
        }

    }
    const renderTableRow = () => {
        if (filmList) {
            return (rowsPerPage > 0
                ? filmList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : filmList
            ).map((row) => (
                <TableRow key={row.maPhim}>
                    <TableCell style={{ width: 170 }} align="center">
                        <Grid container justify="space-between">
                            <Grid item>
                                <IconButton color="inherit">
                                    <EditIcon variant="contained" color="primary" />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit">
                                    <DeleteForeverIcon color="secondary" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </TableCell>
                    <TableCell style={{ width: 40 }} align="center">
                        {row.tenPhim}
                    </TableCell>
                    <TableCell style={{ width: 50 }} align="center">
                        <a href={row.trailer}>Trailer</a>
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                        <img src={row.hinhAnh} style={{ width: "auto", height: 50 }} alt="anhPhim" />
                    </TableCell>
                    <TableCell style={{ width: 400 }} align="center">
                        {row.moTa}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="center">
                        {row.ngayKhoiChieu}
                    </TableCell>
                    <TableCell style={{ width: 120 }} align="center">
                        {row.danhGia}
                    </TableCell>
                </TableRow>

            ))
        }
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <div >
            <Grid container directions="row" alignItems="center" className="mb-3">
                <Grid item md={6} xs={12}>
                    <h4>Manage Film</h4>
                </Grid>
                <Grid item md={4} xs={12} >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <Button color="inherit" className={classes.closeIcon} disabled={isDisable}>
                            <CloseIcon color="secondary" />
                        </Button>
                    </div>

                </Grid>
                <Grid item md={2} xs={12} className="p-2" >
                    <IconButton color="inherit" onClick={() => { setHandleAddFilm(true) }}>
                        <PlaylistAddIcon className={classes.addBtn} />
                    </IconButton>
                </Grid>
            </Grid>

            <TableContainer component={Paper}>

                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Actions</TableCell>
                            <TableCell align="center">Tên Phim</TableCell>
                            <TableCell align="center">Trailer</TableCell>
                            <TableCell align="center">Hình Ảnh</TableCell>
                            <TableCell align="center">Mô Tả</TableCell>
                            <TableCell align="center">Ngày Khởi Chiếu</TableCell>
                            <TableCell align="center">Đánh Giá</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRow()}
                        {handleEmptyRow()}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={7}
                                count={filmList ? filmList.length : 0}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}