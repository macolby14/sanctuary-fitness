import { useState } from 'react';
import { Box, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import clsx from 'clsx';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// TODO: Investigate lazy loading images. Images are hidden, may be all loading right away
// TODO: Sizing may be all based on first image size
// TOOD: May be worth using premade library. Wanted to use Next optimized Images w/MUI

const images = [
  {
    src: '/static/images/gallery1_6240_4160_gimp_tiny.jpg', alt: 'Filler Image 3', width: 6240, height: 4160,
  },
  {
    src: '/static/images/gallery2_5862_3424_gimp_tiny.jpg', alt: 'Filler Image 1', width: 5862, height: 3424,
  },
  {
    src: '/static/images/gallery3_5768_4160_gimp_tiny.jpg', alt: 'Filler Image 2', width: 5768, height: 4160,
  },
];

// TODO: Fix hack. Always putting widest image first since sizing based on it
// Alternative: Give carousel a width/height. If too big image scales down. If small, have grey
images.sort((a, b) => b.width - a.width);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    // backgroundColor: theme.palette.common.white,
  },
  chevron: {
    position: 'absolute',
    top: '50%',
    color: theme.palette.common.white,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  chevronRight: {
    right: '10px',
  },
  chevronLeft: {
    left: '10px',
  },
  stack: {
    position: 'absolute',
    maxWidth: '100%',
    top: '50%', /* position the top  edge of the element at the middle of the parent */
    left: '50%', /* position the left edge of the element at the middle of the parent */
    transform: 'translate(-50%, -50%)',
  },
}));

type ImageCarouselProps = {
    classes?: string;
}
export default function ImageCarousel({ classes: passedClasses = '' }: ImageCarouselProps) {
  const classes = useStyles();
  const [currImage, setCurrImage] = useState(0);

  // NOTE: Need the div after Fade or Fade can not pass its style and won't work
  const fadeImages = images.map((image, ind) => (
    <Fade in={currImage === ind} key={image.src}>
      <div className={ind !== 0 ? classes.stack : ''}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </div>
    </Fade>
  ));

  const handleClickRight = (() => {
    setCurrImage((prev) => (prev + 1) % images.length);
  });

  const handleClickLeft = (() => {
    setCurrImage((prev) => {
      if (prev - 1 < 0) { return images.length - 1; }
      return prev - 1;
    });
  });

  return (
    <Box className={clsx(classes.root, passedClasses)} m={1}>
      {fadeImages}
      <ChevronLeftIcon className={clsx(classes.chevron, classes.chevronLeft)} fontSize="large" onClick={handleClickLeft} />
      <ChevronRightIcon className={clsx(classes.chevron, classes.chevronRight)} fontSize="large" onClick={handleClickRight} />
    </Box>

  );
}

ImageCarousel.defaultProps = {
  classes: '',
} as Partial<ImageCarouselProps >;
