import React from 'react';
import TrafficImageCard from './TrafficImageCard';
import { Stack, Grid } from '@kiwicom/orbit-components/lib';
import styled, { css } from 'styled-components';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

const Container = styled.div`
  margin-top: 0px;

  ${media.largeMobile(css`
    margin-top: 10px;
  `)}
`;
const ImageList = ({ images = [] }) => {
  return (
    <Container>
      <Stack justify="center" spaceAfter="large">
        <Grid
          largeDesktop={{
            columns: '1fr',
          }}
          rows="auto"
          gap="20px"
          inline={true}
        >
          {images.map((image) => (
            <TrafficImageCard image={image} />
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ImageList;
