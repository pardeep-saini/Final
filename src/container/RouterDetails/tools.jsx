import React, { Component } from 'react';
import { connect } from "react-redux";
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
	  statistics:false
    }
  }

  handleChange = (event) => {

	this.setState({statistics: true})
	
  }
    render() {
		console.log("EventData", this.state)
		const {statistics} = this.state;
      return (
      <>
		  
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
										height = "22px"
										/>
									</S.Row>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= "Submit"
										margeLeft = "115px"
										height = "22px"
										/>
									</S.Row>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= {statistics ? "Hide Statistics": "View Statistics"}
										margeLeft = "115px"
										height = "22px"
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
										height = "22px"
										/>
									</S.Row>
									<S.Row>
									<ButtonComponent 
										variant="contained" 
										color="primary" 
										name= "Submit"
										margeLeft = "115px"
										height = "22px"
										/>
									</S.Row>
									<S.Row></S.Row>
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
              <S.Heading>Table</S.Heading>
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
