import React, { Component } from 'react';
import { connect } from "react-redux";
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Modal} from '../../components/Modal';

import * as S from './Styled'
import {ButtonComponent} from '../../components/Button';
import {
    Paper,
	Grid
  } from "../../includes";
 


class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  getUserList:[],
	  statistics:false,
	  popupOpen:false,
	  title: '',
	  clientName:'',
	  contant:'',
	  buttonCancel:'',
	  buttonSave:'',
	  event:''

    }
  }

  handleChange = (event) => {
	this.setState(prevState => ({
		statistics: !prevState.statistics
	  }));
	
  }
  
handlePopup = (data) => {
	if(data === 'reboot') {
		this.setState({
			popupOpen: true,
			title: 'Restart Device for ',
			clientName: 'ABC',
			contant:'This Router will be restarted , do you want to continue ?',
			buttonCancel: 'CANCEL',
			buttonSave:'RESTART',
			event:'reboot'
		})
	} else if(data === 'reset') {
		this.setState({
			popupOpen: true,
			title: 'Restart Device for ',
			clientName: 'DEF',
			contant:'This Router will be reset, wiping any additional  changes that have been made since being plugged in for the first time. do yo want to continue ?',
			buttonCancel: 'CANCEL',
			buttonSave:'RESET',
			event:'reset'
		})
	} else if(data === 'log') {
		this.setState({
			popupOpen: true,
			event:'log'
		})
	}
	
	}

attributeHandle = (data) => {
	 this.setState({popupOpen: data && data})
}


    render() {
		const {statistics, popupOpen, title, clientName, contant, buttonCancel, buttonSave, event} = this.state;
      return (
      <>
	     {popupOpen ?  
		 <Modal 
		 open = {popupOpen}  
		 attributeHandle = {(data)=>this.attributeHandle(data)}
		 title= {title || ''}
		 clientName = {clientName || ''}
		 contant={contant || ''}
		 buttonCancel = {buttonCancel || ''}
		 buttonSave = {buttonSave || ''}
		 event={event||''}
		 /> : null}
		    
			<Grid item xs={12} style={S.customStyles.RouterdetailsContainer}>
			<Paper >
			<Grid  container spacing={1} >
			<Grid item xs={12} style={S.customStyles.Nav}>
				<Grid container justify="center" spacing={2} >
					<Grid item xs={6}>
							<Paper style={S.customStyles.Router} variant="outlined" >
								<S.RouterHead>
									<S.Table>
									<S.Tbody style={S.customStyles.Tablehead}>
									<S.Row>View Device Log</S.Row>
									<S.Row>Perform Reboot</S.Row>
									<S.Row>Device Statistics</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>
										<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= "View"
										margeLeft = "115px"
										height = "20px"
										handleChange = {(e)=>this.handlePopup('log')}
										/>
									</S.Row>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= "Submit"
										margeLeft = "115px"
										height = "20px"
										handleChange = {(e)=>this.handlePopup('reboot')}
										/>
									</S.Row>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= {statistics ? "Hide Statistics": "View Statistics"}
										margeLeft = "115px"
										height = "20px"
										handleChange = {(e)=>this.handleChange(e)}
										/>
									</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
							</Paper>
					</Grid>
					
                    
                    <Grid  item xs={6}>
					<Paper style={S.customStyles.RouterDetails} variant="outlined">
					<S.RouterHead>

					<S.Table>
									<S.Tbody style={S.customStyles.Tablehead}>
									<S.Row>Ping Device</S.Row>
									<S.Row>Factory Reset</S.Row>
									<S.Row>Last State</S.Row>
									</S.Tbody>
									</S.Table>

								</S.RouterHead>
								<S.RouterHead>
								<S.Table>
									<S.Tbody>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= "Submit"
										margeLeft = "115px"
										height = "20px"
										/>
									</S.Row>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= "Submit"
										margeLeft = "115px"
										height = "20px"
										handleChange = {(e)=>this.handlePopup('reset')}
										/>
									</S.Row>
									<S.Row>
											{/* <Switch
											// checked={false}
											// onChange={this.handleChange}
											color="primary"
											name="checkedB"
											
											inputProps={{ 'aria-label': 'primary checkbox' }}
											/> */}
									</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								
					</Paper>
					</Grid>
					
					
					
            </Grid>
            </Grid>
		   
		   
		    </Grid>
			
	
	</Paper>
	
      </Grid>
	  {statistics ?   <Grid item xs={12} style={S.customStyles.RouterdetailsContainer}> 
              <Paper variant="outlined" >

			  <TableContainer component={Paper}>
      <Table aria-label="simple table">
	  <TableHead style={{borderStyle: 'hidden'}}>
          <TableRow>
            <TableCell>Sync(kbps)</TableCell>
            <TableCell align="center">SNR(DB)</TableCell>
            <TableCell align="center">ATTN(DB)</TableCell>
            <TableCell align="center">Download(MB)</TableCell>
            <TableCell align="center">Error</TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Down</TableCell>
            <TableCell align="center">Up</TableCell>
            <TableCell align="center">Down</TableCell>
            <TableCell align="center">Up</TableCell>
            <TableCell align="center">Down</TableCell>
            <TableCell align="center">Up</TableCell>
            <TableCell align="center">Down</TableCell>
            <TableCell align="center">Up</TableCell>
            <TableCell align="center">CRC</TableCell>
            <TableCell align="center">HEC</TableCell>
            <TableCell align="center">Router Uptime</TableCell>
            <TableCell align="center">IP Address</TableCell>
            <TableCell align="center">Gateway</TableCell>
            <TableCell align="center">Interleaving</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
            <TableRow key={'row.name'}>
              <TableCell component="th" scope="row">
                {'1'}
              </TableCell>
            
              <TableCell align="center">{'2'}</TableCell>
              <TableCell align="center">{'3'}</TableCell>
              <TableCell align="center">{'4'}</TableCell>
              <TableCell align="center">{'5'}</TableCell>
              <TableCell align="center">{'6'}</TableCell>
              <TableCell align="center">{'7'}</TableCell>
              <TableCell align="center">{'8'}</TableCell>
              <TableCell align="center">{'9'}</TableCell>
              <TableCell align="center">{'10'}</TableCell>
              <TableCell align="center">{'11'}</TableCell>
              <TableCell align="center">{'92.19.214.210'}</TableCell>
              <TableCell align="center">{'64.24.254.204'}</TableCell>
              <TableCell align="center">{'None'}</TableCell>
             
              
            </TableRow>
          {/* ))} */}
        </TableBody>
        {/* <TableBody><S.CSVDownload>Download <S.CSVColor><CSVLink data={rows} style={S.customStyles.CSVLink} filename={"Invosys.csv"}>CSV</CSVLink></S.CSVColor></S.CSVDownload></TableBody> */}
      </Table>
    </TableContainer>
				
              </Paper>
              </Grid> : null }
	 
			  </>
	
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
  )(Tools);
