import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    rootCard:{
        height: '100%', 
        display: 'flex',
        flexDirection: 'column'
    },
    Detailsmedia:{
        height: '50vh !important',       // Fixed height for all images
        objectFit: 'contain !important',   // Ensures images are cropped to fill the area while maintaining aspect ratio
        width: '100% !important'
    },
    title:{
        fontSize:"1.2rem !important",
        fontWeight:"600 !important",
        lineHeight:"1.8rem !important"
    },
    pCategory:{
        fontSize:"1rem !important",
        lineHeight:"1.8rem !important"
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
        /* marginTop:"1.5% !important" */
    }
}));
export default useStyles


