import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../styles/MediaCard.css';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function MediaCard({countryData}) {
  const [countryname, setCountryName] = useState([]);
  console.log("countryname",countryname)
  const [open, setOpen] = useState(false);

  // const [country, setCountryData] = useState([])
  // console.log('mil', country)

  // const fetchCountryData = async (countryname) => {
  //   const res = await CountryApi.getOneCountryData(countryname);
  //   console.log(res.data)
  //   setCountryData(res.data)
  // };
  //   useEffect(()=>{
  //     if(countryname && countryname.length) {
  //       fetchCountryData(countryname);
  //     }
  //   },[countryname])
  console.log("hi", open)
  const handleOpen = (e) => {
    console.log(e)
    setCountryName(e)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  // console.log("hi",countryData)
  return (
    countryData.map((e) => {
      return (
        <>
        <Card classNmae = 'parent' style={{padding: '2%'}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="120"
        image={e.flags.png}
        alt={e.name.common}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {e.name.common}
        </Typography>
        <p>Population: {e.population}</p>
        <p>Region: {e.region}</p>
        <p>Capital: {e.capital}</p>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button onClick={()=> handleOpen(e)}>More Details</Button>
      </CardActions>
    </Card>
    {open &&
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p>Native name:{countryname.name.official} </p> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    }
    </>)
    })
  );
}