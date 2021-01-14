import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';

export const Main = (props) => {
  const { handleBuildTankClick } = props;
  const classes = useStyles();

  return (
    <main>
      <Box className={classes.heroBanner}>
        <Box>
          <Typography component="div" style={{ textAlign: 'center' }}>
            Hero Banner
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleBuildTankClick}
          >
            Build your tank
          </Button>
        </Box>
      </Box>
      <Box className={classes.bannerMain} mt={7}>
        <Box className={classes.banner}>Banner</Box>
        <Box className={classes.banner}>Banner</Box>
      </Box>
      <Box display="flex" mt={7}>
        <Box className={classes.secondBanner}>
          <Box>
            <Typography
              style={{
                fontSize: 24,
                letterSpacing: 0,
              }}
            >
              How to setup an aquarium
            </Typography>
            <Typography
              style={{
                fontSize: 16,
                letterSpacing: 0,
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </Typography>
            <Button
              variant="contained"
              className={`${classes.button} ${classes.marginTop}`}
              onClick={handleBuildTankClick}
            >
              Build your tank
            </Button>
          </Box>
        </Box>
        <Box className={classes.secondBannerVideoPlayer}>
          <ReactPlayer
            className={classes.videoPlayer}
            url="https://youtu.be/0vYb9TcUo0Q"
          />
        </Box>
      </Box>
    </main>
  );
};
