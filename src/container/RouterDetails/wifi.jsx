import React, { Component } from 'react';
import { connect } from "react-redux";
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as S from './Styled'
import {InputField} from '../../components/Input';
import {ButtonComponent} from '../../components/Button';
import {
    Paper,
	Grid
  } from "../../includes";
import { event } from 'jquery';
  
 

class Wifi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[],
      channelSelection: ''
    }
  }

  handleChange = (event) => {
    this.setState({channelSelection: event.target.value})
  }

 

    render() {
      const {channelSelection} = this.state;
      return (
        <Grid container spacing={3} style={S.customStyles.RouterdetailsContainer}>
        <Grid item xs={12} style={S.customStyles.Nav}>
        <Grid item xs={12}> 
          <Paper variant="outlined" >
          <S.Heading>WiFi - 2.4 Ghz</S.Heading>
          </Paper>
          </Grid>
				<Grid container justify="center" spacing={2} >
        
					<Grid  item xs={12}>
							<Paper style={S.customStyles.Router} variant="outlined" >
            
								<S.RouterHead>
									<S.Table>
									<S.Tbody style={S.customStyles.Tablehead}>
                  <S.Row >SSID</S.Row>
									<S.Row>WiFi-SSID-InvosysACS</S.Row>
									<S.Row>State</S.Row>
									<S.Row>Channel</S.Row>
									
								
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
							
              
              	<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>
                  <InputField
                    id="standard-basic"
                    label="SSID"
                    changeHandler={this.changeHandler}
                    />
                  </S.Row>
									<S.Row>
                  <InputField
                    id="standard-basic"
                    label="InvosysACS123456"
                    changeHandler={this.changeHandler}
                    />
               
                
                  </S.Row>
									<S.Row> 
                    <Switch
                    // checked={false}
                    // onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    /></S.Row>
									<S.Row >
                  <FormControl style={{width: '156%'}}>
                    
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={channelSelection}
          displayEmpty
          onChange={(e)=>this.handleChange(e)}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Channel1</MenuItem>
          <MenuItem value={20}>Channel2</MenuItem>
          <MenuItem value={30}>Channel3</MenuItem>
        </Select>
      </FormControl>
                     
                  </S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
                <S.RouterHead>
									<S.Table>
									<S.Tbody>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
									<S.Row>
                  <ButtonComponent 
                     variant="contained" 
                     color="primary" 
                     name= "Update"
                     margeLeft = "223px"
                     height = "20px"
                    />
                  </S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
							
              </Paper>
					</Grid>
				
					
            </Grid>
            
        </Grid>

         
					<Grid  item xs={12}>
          <Grid item xs={12}> 
              <Paper variant="outlined" >
              <S.Heading>WiFi - 5 Ghz</S.Heading>
              </Paper>
              </Grid>
							<Paper style={S.customStyles.Router} variant="outlined" >
             
								<S.RouterHead>
									<S.Table>
									<S.Tbody style={S.customStyles.Tablehead}>
                  <S.Row >SSID</S.Row>
									<S.Row>WiFi-SSID-InvosysACS</S.Row>
									<S.Row>Band Steering</S.Row>
									<S.Row>State</S.Row>
									<S.Row>Channel</S.Row>
									
								
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
							
              
              	<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>
                  <InputField
                    id="standard-basic"
                    label="SSID"
                    changeHandler={this.handleChange}
                    />
                  </S.Row>
									<S.Row>
                  <InputField
                    id="standard-basic"
                    label="InvosysACS123456"
                    changeHandler={this.handleChange}
                    />
                  </S.Row>
                  <S.Row> 
                    <Switch
                    // checked={false}
                    onChange={this.handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    /></S.Row>
									<S.Row> 
                    <Switch
                    // checked={false}
                    onChange={this.handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    </S.Row>
									<S.Row >
                  <FormControl style={{width: '156%'}}> 
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={channelSelection}
                      displayEmpty
                      onChange={(e)=>this.handleChange(e)}
                      inputProps={{ 'aria-label': 'Without label' }}
                      >
                      <MenuItem value="">
                      <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Channel1</MenuItem>
                      <MenuItem value={20}>Channel2</MenuItem>
                      <MenuItem value={30}>Channel3</MenuItem>
                    </Select>
                  </FormControl>
                     
                  </S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
                <S.RouterHead>
									<S.Table>
									<S.Tbody>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
                  <S.Row></S.Row>
									<S.Row>
                    <ButtonComponent 
                     variant="contained" 
                     color="primary" 
                     name= "Update"
                     margeLeft = "223px"
                     height = "20px"
                    />
                  </S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
							
              </Paper>
					</Grid>


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
  )(Wifi);
