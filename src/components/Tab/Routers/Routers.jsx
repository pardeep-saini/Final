import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as S from '../Styled';
import { connect } from "react-redux";
import { getRoutersDetails, getRoutersActions } from '../../../actions/routerDetails/index';
import { CSVLink } from "react-csv";
import { Modal } from '../../../components/Modal';
import {
  Table,
  Box,
  TextField,
  Typography,
  TableBody,
  Grid,
  Search,
  RouterIcon,
  FileCopyIcon,
  WifiIcon,
  FindInPageIcon,
  ThreeSixtyIcon,
  Paper,
  TableRow,
  TableHead,
  TableContainerMain,
  TableCell
} from "../../../includes";
import { useHistory } from 'react-router-dom';


let routerArray = [];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Invosys Wholesale', 'INVO225588', 'Zuxel VMG 1312-T20B', 'S200Y31026593', 'Online'),
  createData('Invosys Reseller1', 'DATA012223', 'Teachnicolor TG 588v2', 'S200Z000000', 'Quarantine'),
  createData('Invosys Reseller2', 'DATA012224', 'Teachicolor DWA0120', 'S200Z000001', 'Offline'),
  createData('Invosys Reseller3', 'DATA01225', 'Zyxel VMG3925-B10C', 'S200Z000002', 'Online'),
  createData('Invosys Reseller4', 'DATA01226', 'Draytek 2762n', 'S200Z000003', 'Offline'),
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function Routers(props) {

  const [getRoutersDetails, setRoutersDetails] = useState();
  const [getOpenModal, setOpenModal] = useState(false);

  const [getTitle, setTitle] = useState('');
  const [getClientName, setClientName] = useState('');
  const [getContant, setContant] = useState();
  const [getButtonCancel, setButtonCancel] = useState('');
  const [getButtonSave, setButtonSave] = useState('');
  const [getHeight, setHeight] = useState('');
  const [getWidth, setWidth] = useState('');
  const [getEvent, setEvent] = useState('');
  const history = useHistory();
  const classes = useStyles();
  const { onopenRouterDetails } = props;

  useEffect(() => {
    (async () => {
      onopenRouterDetails()
    })();
  }, []);


  routerArray = [];
  let handleChangeSearch;

  handleChangeSearch = event => {
    setRoutersDetails({
      rows: rows.filter(i =>
        i.name.toLowerCase().includes(event.target.value.toLowerCase()) || i.carbs.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
      routerFilter: true,
    });

    if (getRoutersDetails && getRoutersDetails.routerFilter) {

      routerArray = getRoutersDetails.rows;
    } else {
      routerArray = rows
    }
  };

  function handlePopup(event, data = '') {
    if (event === 'ThreeSixtyIcon') {
      setOpenModal(true);
      setEvent('ThreeSixtyIcon')
      setTitle("Restart Device for ");
      setClientName("ABC");
      setContant("This Router will be restarted , do you want to continue ?");
      setButtonCancel("CANCEL");
      setButtonSave("RESTART");
      setHeight('');
      setWidth('')
    } else if (event === 'DeviceLog') {
      setOpenModal(true);
      setEvent('DeviceLog')
      setTitle("Device Log");
      setClientName("");
      setContant("List the device log details as pulled from the Axiros API.");
      setButtonCancel("CLOSE");
      setButtonSave("");
      setHeight('533px');
      setWidth('571px')
    } else if (event === 'DeviceStatistics') {
      setOpenModal(true);
      setEvent('DeviceStatistics')
      setTitle("Device Statistics");
      setButtonCancel("CLOSE");
      setHeight('533px');
      setWidth('571px')
    }
  }

  function redirectHandle(props) {
    props.ongetRoutersActions(true)
    history.push('/routerdetails')
  }

  function attributeHandle(event, data = '') {
    setOpenModal(false);
  }

  return (
    <>
      {getOpenModal ?
        <Modal
          open={getOpenModal}
          attributeHandle={(_event, data) => attributeHandle(data)}
          title={getTitle}
          clientName={getClientName}
          contant={getContant}
          buttonCancel={getButtonCancel}
          buttonSave={getButtonSave}
          width={getWidth}
          height={getHeight}
          event={getEvent}
        />
        : null}
      <TabPanel style={S.customStyles.serachRouters}>
        <S.MainContainer>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Search />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label={"Client Name,Serial Number"}
                style={S.customStyles.labelStyle}
                onChange={handleChangeSearch}
              />
            </Grid>
          </Grid>


        </S.MainContainer>
      </TabPanel>
      <TabPanel></TabPanel>

      <TableContainerMain component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell align="center">Customer Reference</TableCell>
              <TableCell align="center">Make&nbsp;/Modal</TableCell>
              <TableCell align="center">Serial Number</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Quick Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(!routerArray.length ? rows : routerArray).map((row) => (

              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">
                  <ThreeSixtyIcon
                    style={S.customStyles.ThreeSixtyIcon}
                    onClick={(_event, _data) => handlePopup('ThreeSixtyIcon')}
                    value=''
                  />

                  <WifiIcon onClick={(_event, _data) => redirectHandle(props)} style={S.customStyles.WifiIcon} />
                  <FileCopyIcon
                    style={S.customStyles.ThreeSixtyIcon}
                    onClick={(_event, _data) => handlePopup('DeviceLog')}
                  />
                  <FindInPageIcon style={S.customStyles.ThreeSixtyIcon} onClick={(_event, _data) => handlePopup('DeviceStatistics')} />
                  <RouterIcon
                    style={S.customStyles.ThreeSixtyIcon}
                  />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
          <TableBody><S.CSVDownload>Download <S.CSVColor><CSVLink data={rows} style={S.customStyles.CSVLink} filename={"Invosys.csv"}>CSV</CSVLink></S.CSVColor></S.CSVDownload></TableBody>
        </Table>
      </TableContainerMain>
    </>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onopenRouterDetails: getRoutersDetails,
  ongetRoutersActions: getRoutersActions
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routers);
