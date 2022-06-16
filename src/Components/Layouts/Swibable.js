import * as React from 'react';

import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import PlacesCard from "./PlacesCard";
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useSelector } from 'react-redux';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {


  const glideBullets = Array.from(document.querySelectorAll('.glide__bullet'));

glideBullets.forEach((el) => {
el.addEventListener('click', (e) => {
e.stopPropagation();
});
});

    //  ********* Redux Context *************
    const dataApiPromise = useSelector((state) => state.apiReducer);




    //  ********* States  *************
    const [dataApi, setDataApi] = React.useState([]);



    //  ********* UseEffects *************

    React.useEffect(() => {
        dataApiPromise.then(function (result) {
            setDataApi(result);
        });
    });

  let dataunits = props.carddata;


  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  let cardData = dataApi.map((itm) => {
    return (
      <PlacesCard
      key={itm.unit.id}
      id={itm.unit.id}
      description={itm.unit.unit_description}
      city={itm.location.city_name}
      address={itm.unit.unit_address}
      title={itm.unit.unit_name}
      price={itm.unit.unit_price}
      category={itm.unit.main_category}
      unitCategory={itm.unit.unit_category}
      resCategory={itm.unit.res_unit_category}
      rooms={itm.props[0].rooms}
      bathrooms={itm.props[0].bathroom}
      kitchen={itm.props[0].kitchen}
      bedroom={itm.props[0].bedroom}
      living_room={itm.props[0].living_room}
      garage={itm.props[0].garage}
      garden={itm.props[0].garden}
      elevator={itm.props[0].elevator}
      floor={itm.props[0].floor}
      space={itm.props[0].surface_area}
      image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
      location={itm.location[0].city_name + ', ' + itm.location[0].region_name}
    />
    );
  });

  let cardDara = dataunits.map((itm) => {
    return (
      <PlacesCard
        key={itm.unit.id}
        id={itm.unit.id}
        description={itm.unit.unit_description}
        city={itm.location.city_name}
        address={itm.unit.unit_address}
        title={itm.unit.unit_name}
        price={itm.unit.unit_price}
        category={itm.unit.main_category}
        unitCategory={itm.unit.unit_category}
        resCategory={itm.unit.res_unit_category}
        rooms={itm.props[0].rooms}
        bathrooms={itm.props[0].bathroom}
        kitchen={itm.props[0].kitchen}
        bedroom={itm.props[0].bedroom}
        living_room={itm.props[0].living_room}
        garage={itm.props[0].garage}
        garden={itm.props[0].garden}
        elevator={itm.props[0].elevator}
        floor={itm.props[0].floor}
        space={itm.props[0].surface_area}
        image={process.env.REACT_APP_DOMAIN + itm.photos[0].unit_image_url}
        location={itm.location[0].city_name + ', ' + itm.location[0].region_name}
      />
    );
  });

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,

        }}
        
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller  />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>Show Units</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
           {dataunits[0] ?  cardDara : cardData}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;