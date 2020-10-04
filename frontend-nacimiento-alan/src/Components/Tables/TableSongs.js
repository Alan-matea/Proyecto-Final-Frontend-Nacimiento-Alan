import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Typography,
} from "@material-ui/core";

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

function createData(name, Artista, Album, Duración) {
  return { name, Artista, Album, Duración };
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

export default function TableSongs({ songs }) {
  const classes = useStyles();

  return (
    <Box>
      <Box m="15px">
        <Typography variant="h4" color="primary">
          Lista de Canciones
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Artista</StyledTableCell>
              <StyledTableCell align="right">Album</StyledTableCell>
              <StyledTableCell align="right">Duración</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song) => (
              <StyledTableRow key={song._id}>
                <StyledTableCell component="th" scope="row">
                  {song.name}
                </StyledTableCell>
                <StyledTableCell align="right">{song.artist}</StyledTableCell>
                <StyledTableCell align="right">{song.album}</StyledTableCell>
                <StyledTableCell align="right">{song.duration}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
