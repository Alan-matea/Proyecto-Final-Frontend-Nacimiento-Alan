import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from "@material-ui/core";

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

function createData(name, Apellido, Edad, Mail) {
  return { name, Apellido, Edad, Mail };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableUser({users, onClick}) {
  const classes = useStyles();

  return (
    <Box>
      <Typography>
        Lista de Usuarios
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Apellido</StyledTableCell>
              <StyledTableCell align="right">Edad</StyledTableCell>
              <StyledTableCell align="right">Mail</StyledTableCell>
              <StyledTableCell align="right">Canciones Favoritas</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.lastName}</StyledTableCell>
                <StyledTableCell align="right">{user.age}</StyledTableCell>
                <StyledTableCell align="right">{user.mail}</StyledTableCell>
                <StyledTableCell align="right"><Button onClick={(e) => onClick(e, user.likedSongs)}>Add</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
