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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    backgroundColor: 'rgba(100,100,100,.25)',
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

const images = [
  {
    src: '/static/images/ExampleImage1_1740_900.jpg', alt: 'Filler Image 1', width: 1740, height: 900,
  },
  {
    src: '/static/images/ExampleImage2_1450_750.jpg', alt: 'Filler Image 2', width: 1740, height: 900,
  },
  {
    src: '/static/images/ExampleImage3_1000_517.jpg', alt: 'Filler Image 3', width: 1000, height: 517,
  },
];

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
