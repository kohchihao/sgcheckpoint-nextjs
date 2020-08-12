import React, { useState, useEffect } from 'react';
import { Stack, Text, Grid } from '@kiwicom/orbit-components/lib';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(37, 42, 49, 0.16),
    0px 2px 8px 0px rgba(37, 42, 49, 0.12);
  min-width: 300px;
  min-height: 400px;
  width: 100%;
  height: 480px;

  ${media.tablet(css`
    width: 600px;
    height: 480px;
    min-width: 350px;
    min-height: 450px;
  `)}
  position: relative;
`;

const OneLineTextContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.5em;
  max-height: 1.5em;
  font-size: 14px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

const CardImageContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: calc(4 * 480px / 5);
  max-height: calc(4 * 480px / 5);
  position: relative;
  background-color: #f0f1f1;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CardDescriptionContainer = styled.div`
  margin: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
`;

const CardDescription = ({ title, description }) => {
  return (
    <Stack direction="column" spacing="tight">
      <OneLineTextContainer>
        <Text size="large" weight="bold">
          {title}
        </Text>
      </OneLineTextContainer>
      <OneLineTextContainer>{description}</OneLineTextContainer>
    </Stack>
  );
};

const DonationCard = ({ image }) => {
  return (
    <CardContainer>
      <Grid style={{ height: '100%' }} rows="4fr 0.8fr" cols="1fr">
        <CardImageContainer>
          <CardImage src={image.imageUrl} loading="lazy" />
        </CardImageContainer>

        <CardDescriptionContainer>
          <CardDescription title={image.name} description={image.dateTime} />
        </CardDescriptionContainer>
      </Grid>
    </CardContainer>
  );
};

export default DonationCard;
