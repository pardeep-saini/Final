import React from "react";
import {
    Paper,
    Grid,
    TableHead,
    TableRow,
    TableContainer,
    TableCell,
    Table,
    TableBody
} from "../../includes";
export const TableComponent = (props) => {
    let tableHeader = [
        {
            NAME: "Id",
        }, {
            NAME: "Device Name",
        },
        {
            NAME: "Description",
        }
        , {
            NAME: "Device IP",
        }, {
            NAME: "Device Server",
        }, {
            NAME: 'Enabled',
        }, {
            NAME: 'Action'
        }
    ]

    let tableBody = [
        {
            ID: '123',
            PROFILE_NAME: "Device 1",
            DESCRIPTION: "Description1",
            DEVICE_IP: "Device IP1",
            DEVIC_SERVER: "Device Server1",
            STATE: "State",
            ENABLED: "Enabled",
            // ACTIONS: 'Action'
        }
    ]

    return (
        <Grid item xs={12}>
            <Paper variant="outlined" >
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {(tableHeader && tableHeader.length > 0) && tableHeader.map((items, index) => {
                                    return (
                                        <TableCell align="center">{items.NAME}</TableCell>
                                    )
                                })}
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {(tableBody && tableBody.length > 0) && tableBody.map((items, index) => {
                                return (
                                    <TableRow key={items.PROFILE_NAME}>
                                        <TableCell component="th" scope="row">{items.ID}</TableCell>
                                        <TableCell component="th" scope="row">{items.PROFILE_NAME}</TableCell>
                                        <TableCell align="center">{items.DESCRIPTION}</TableCell>
                                        <TableCell align="center">{items.DEVICE_IP}</TableCell>
                                        <TableCell align="center">{items.DEVIC_SERVER}</TableCell>
                                        <TableCell align="center">{items.STATE}</TableCell>
                                        <TableCell align="center">{items.ENABLED}</TableCell>
                                        <TableCell align="center">{items.ACTIONS}</TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid>

    )
}