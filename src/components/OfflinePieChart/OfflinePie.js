import React, { Component } from 'react';
import PieChart from 'wirecase-react-piechart';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import * as S from './Styled';
 
export default class MyComponent extends Component {
    constructor(props, context) {
        super(props, context);
 
        this.state = {
            expandedSector: null
        };
    }

 
    handleMouseLeaveFromSector() {
        this.setState({ expandedSector: null });
    }
 
    render() {
        const {name} = this.props;
        const data = [
            { label: 'Talk Talk', value: 100, color: '#ffbbb2' },
            { label: 'BT', value: 80, color: '#c92d3a' },
        ];
 
        return (
      
      <Grid container spacing={2}>
          <Grid item xs={6} sm={3} style={S.customStyles.content}>
          <h3 style={S.customStyles.oflineSuppler}>
              {name === 'Offline By Supplier' ? "Offline By Supplier" : "Device Type"}
          </h3>
         {data.map((d, i) => (
                
                             
                    <div>
                        <span style = {{
                             height: '25px',
                             width: '25px',
                             backgroundColor: i==0? '#ffbbb2': '#c92d3a',
                             borderRadius: '50%',
                             display: 'inline-block'
                        }}>
                            <p style={{marginLeft: '121%'}}>{d.label}
                        </p></span>
                    
                  </div>
                        
                   ))}
      
       </Grid>
        <Grid item xs={6} sm={3} style={S.customStyles.pileChart}>
         <PieChart
                    data={data}
                    expandedSector={this.state.expandedSector}
                    // onMouseEnterOnSector={this.handleMouseEnterOnSector}
                    // onMouseLeaveFromSector={this.handleMouseLeaveFromSector}
                />
        </Grid>
        
      </Grid>
           
        );
    }
}