 

import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';
import {InputField} from '../Input';
import * as S from './Styled';
import {TableComponent} from '../Table/index';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export const Modal = (props) => {
    const[getPingDevice, setPingDevices] = useState(false);
    const[getPingLoder, setPingLoder] = useState(true);
    const[getPingValue, setPingValue] = useState('');
    const {title, contant, buttonCancel,buttonSave,clientName,width, height, event} = props;
  console.log("getPingValue",getPingValue)
    function attributeHandle() {
        props.attributeHandle(false)
    }

    function pingDevice() {
      setPingLoder(false)
     setTimeout(() => {
        setPingLoder(true)
        setPingDevices(true)
      }, 2000);
    }
    function pingValue(data) {
     setPingValue(data.target.value)
    }
    return (

        <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={attributeHandle}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
       
      >
  

          {event=='ThreeSixtyIcon' || event=='DeviceLog' || event=='reboot' || event=='reset' || event=='log'? 
            <S.Container>
                <DialogTitle id="alert-dialog-slide-title" >
            <S.Title>{title || ''}{clientName || ''}</S.Title>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {contant || ''}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={attributeHandle} color="primary" style={S.customStyles.cancelButton}>
            {buttonCancel || ''}
          </Button>
          <Button onClick={null} color="primary" style={S.customStyles.saveButton}>
           {buttonSave || ''}
          </Button>
        </DialogActions>
            </S.Container>
          : 	
          event == 'DeviceStatistics' ?  
          <S.ContainerStatistics>
            <S.TitleStatistics>Device Statistics</S.TitleStatistics>
            <S.DeviceStatistics>Device Information</S.DeviceStatistics>
            <S.StatisticsTable>
              <S.StatisticsTBody>
              <S.StatisticsTr style={S.customStyles.StatisticsTd}>
                <S.StatisticsTd>Device Uptime</S.StatisticsTd>
                <S.StatisticsTd>IP Address</S.StatisticsTd>
                <S.StatisticsTd>Gateway</S.StatisticsTd>
              </S.StatisticsTr>
              <S.StatisticsTr>
              <S.StatisticsTd>DD:MM:HH:SS</S.StatisticsTd>
                <S.StatisticsTd>111:111:111:111</S.StatisticsTd>
                <S.StatisticsTd>111:111:111:111</S.StatisticsTd>
              </S.StatisticsTr>
              </S.StatisticsTBody>
            </S.StatisticsTable>

            <S.DeviceStatistics>Sync Speed</S.DeviceStatistics>
            <S.StatisticsTable >
              <S.StatisticsTBody>
              <S.StatisticsTr  style={S.customStyles.StatisticsTd}>
                <S.StatisticsTd>Download</S.StatisticsTd>
                <S.StatisticsTd>Upload</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              <S.StatisticsTr>
              <S.StatisticsTd>50 Mbps</S.StatisticsTd>
                <S.StatisticsTd>5 Mbps</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              </S.StatisticsTBody>
            </S.StatisticsTable>

            <S.DeviceStatistics>SNR Margin (DB)</S.DeviceStatistics>
            <S.StatisticsTable>
              <S.StatisticsTBody>
              <S.StatisticsTr  style={S.customStyles.StatisticsTd}>
                <S.StatisticsTd>Download</S.StatisticsTd>
                <S.StatisticsTd>Upload</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              <S.StatisticsTr>
              <S.StatisticsTd>76</S.StatisticsTd>
                <S.StatisticsTd>72</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              </S.StatisticsTBody>
            </S.StatisticsTable>
           
            <S.DeviceStatistics>Attenuation (DB)</S.DeviceStatistics>
            <S.StatisticsTable>
              <S.StatisticsTBody>
              <S.StatisticsTr  style={S.customStyles.StatisticsTd}>
                <S.StatisticsTd>Download</S.StatisticsTd>
                <S.StatisticsTd>Upload</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              <S.StatisticsTr>
              <S.StatisticsTd>192</S.StatisticsTd>
                <S.StatisticsTd>0</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              </S.StatisticsTBody>
            </S.StatisticsTable>

            <S.DeviceStatistics>Errors</S.DeviceStatistics>
            <S.StatisticsTable>
              <S.StatisticsTBody>
              <S.StatisticsTr  style={S.customStyles.StatisticsTd}>
                <S.StatisticsTd>CRC</S.StatisticsTd>
                <S.StatisticsTd>HEC</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              <S.StatisticsTr>
              <S.StatisticsTd>0</S.StatisticsTd>
                <S.StatisticsTd>0</S.StatisticsTd>
                <S.StatisticsTd></S.StatisticsTd>
              </S.StatisticsTr>
              </S.StatisticsTBody>
            </S.StatisticsTable>

            <S.DeviceStatistics>Traffic Usage</S.DeviceStatistics>
            <S.StatisticsTable>
              <S.StatisticsTBody>
              <S.StatisticsTr  style={S.customStyles.StatisticsTd}>
                <S.StatisticsTd >Download</S.StatisticsTd>
                <S.StatisticsTd>Upload</S.StatisticsTd>
                <S.StatisticsTd>Total</S.StatisticsTd>
              </S.StatisticsTr>
              <S.StatisticsTr>
              <S.StatisticsTd>475.27 MB</S.StatisticsTd>
                <S.StatisticsTd>25.24 MB</S.StatisticsTd>
                <S.StatisticsTd>500.51 MB</S.StatisticsTd>
              </S.StatisticsTr>
              </S.StatisticsTBody>
            </S.StatisticsTable>
            {/* <DialogActions>
          <Button onClick={attributeHandle} color="primary">
            {buttonCancel || ''}
          </Button>
        </DialogActions> */}
            </S.ContainerStatistics>:
         
          /**
           *  Ping device with IP address.
           */
          event == 'pingDivice' ? 
         
          <S.ContainerPingDevice {...getPingDevice ? "400px": "135px" }>
            {/* { loader condition} */}
            {!getPingLoder ?  <center>
          <CircularProgress style={S.customStyles.loaderSyled}/>
          </center>: null }

           {/* { End} */}

           {getPingDevice?  
           <S.ContainerPingDevice>
           <S.LabelPingResult>Ping Results</S.LabelPingResult>
           <S.PingResult>Host : {getPingValue}</S.PingResult>
           <S.PingResult>NUmber of Repititions</S.PingResult>
           <S.PingResult>Diagnostics State</S.PingResult>
           <S.PingResult>Data Block Size</S.PingResult>
           <S.PingResult>Failure Count</S.PingResult>
           <S.PingResult>Maximum Response Time</S.PingResult>
           <S.PingResult>Minimum Response Time</S.PingResult>
           <S.PingResult>Success Count</S.PingResult>
           <DialogActions>
          <Button onClick={attributeHandle} color="primary" style={S.customStyles.cancelButton}>
            {buttonCancel || ''}
          </Button>
          </DialogActions>
           </S.ContainerPingDevice>
           : 
           
          <DialogTitle id="alert-dialog-slide-title" >
            <S.LabelPingDevice>{contant || ''}</S.LabelPingDevice><S.LabelPingDevice> 
            <InputField 
           id="pingDevice" 
           label=""
           changeHandler={(data)=>pingValue(data)}
           /></S.LabelPingDevice>

         <DialogActions>
          <Button onClick={attributeHandle} color="primary" style={S.customStyles.cancelButton}>
            {buttonCancel || ''}
          </Button>
          <Button onClick={pingDevice} color="primary" style={S.customStyles.saveButton}>
           {buttonSave || ''}
          </Button>
        </DialogActions>
        </DialogTitle>
          }
          
          </S.ContainerPingDevice>:
          /**
           * End Ping....
           */
         <TableComponent />
         
         }
       
       
      
      </Dialog>
    )
  }
 