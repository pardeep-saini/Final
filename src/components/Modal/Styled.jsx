import styled from "styled-components"

export const Title =  styled.h2`
    font-weight: bold;
    font-size: medium
`;
export const Container =  styled.div`
`;
export const RouterHead =  styled.h3`
        padding: 6%;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
}
`;
export const Row = styled.tr`
`;
export const Table = styled.table` 
        border-collapse: separate;
        border-spacing: 0 20px;
        
`;
export const Tbody = styled.tbody`
        text-align: justify
`;

export const DeviceStatistics = styled.p`
        background-color: #000000b3;
        color: white;
        padding: 1%;
        font-size: small;
        margin-left: 3%;
        margin-right: 3%;
`;

export const TitleStatistics = styled.p`
        text-align: center;
        font-weight: bold;
        font-size: 20px;
`;
export const ContainerStatistics = styled.p`
        width:595px;
        height:700px;
`;

export const StatisticsTable = styled.table`
        font-size: 16px;
        font-family: Optimum, Helvetica, sans-serif;
        border-collapse:collapse
`;
export const StatisticsTBody = styled.tbody`
`;

export const StatisticsTd = styled.td`
        padding: 4px;
        margin: 3px;
        padding-left: 20px;
        width: 200px;
        text-align: justify;
`;

export const StatisticsTr = styled.tr`
    // border-bottom: 1px solid #A9A9A9;
`;


   
 



export const customStyles = {
        saveButton: {
            color:'#e9410c'
        },
        cancelButton: {
            color:'black'
        },
        RouterdetailsContainer: {
            // padding:'8%', 
            // marginTop: '-6%',
            backgroundColor: "#e6e5df",
            paddingLeft: '10%',
            paddingRight: '10%'
    },
    Nav:{
        marginTop: '45px'
     },
     StatisticsTd:{
        fontWeight: 'bold'
     }
        
       
        
      };