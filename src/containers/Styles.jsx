import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    rootCard:{
        height: '100%', 
        display: 'flex',
        flexDirection: 'column'
    },
    Detailsmedia:{
        height: '60vh',       // Fixed height for all images
        objectFit: 'contain',   // Ensures images are cropped to fill the area while maintaining aspect ratio
        width: '100%'
    },
    title:{
        fontSize:"1.2rem",
        fontWeight:"600",
        fontFamily:"Open sans",
        lineHeight:"1.8rem"
    },
    pCategory:{
        fontSize:"1rem",
        lineHeight:"1.8rem"
    },
    dataBody:{
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)',   // 4 cards per row
        gap: '20px',                             // Gap between cards
        padding: '20px',                         // Padding around the grid
    },
    logo:{
        display:"flex",
        alignItems:"center",
        marginTop:"2%"
    }
}));
export default useStyles


