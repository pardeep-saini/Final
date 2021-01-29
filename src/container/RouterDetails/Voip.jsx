import React, { Component } from 'react';
import { connect } from "react-redux";
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as S from './Styled'
import {
    Paper,
	Grid
  } from "../../includes";
 

class Voip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
    render() {
      return (
			<Grid item xs={12} style={S.customStyles.RouterdetailsContainer}>
			  <Paper variant="outlined" >
				  <TableContainer component={Paper}>
		  <Table aria-label="simple table">
			<TableHead>
			  <TableRow>
				<TableCell>SIP Profile Name</TableCell>
				<TableCell align="center">SIP Username</TableCell>
				<TableCell align="center">SIP Password</TableCell>
				<TableCell align="center">SIP Registrar Server</TableCell>
				<TableCell align="center">State</TableCell>
				<TableCell align="center">Enabled</TableCell>
				<TableCell align="center">Action</TableCell>
			
			  </TableRow>
			</TableHead>
			<TableBody>
				<TableRow key={'row.name'}>
				  <TableCell component="th" scope="row">{'One'}</TableCell>
				  <TableCell align="center">{"User_cgbe8ppmjd"}</TableCell>
				  <TableCell align="center">{'SIPPassword'}</TableCell>
				  <TableCell align="center">{'30300.hiya.eu'}</TableCell>
				  <TableCell align="center">{'Register'}</TableCell>
				  <TableCell align="center">{'Toggle Switch'}</TableCell>
				</TableRow>
			</TableBody>
		  </Table>
		</TableContainer>
	</Paper>
      </Grid>
      );
    }
  }
  const mapStateToProps = state => {
    return state;
  };
  
  const mapDispatchToProps = {
    
  };
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Voip);
