import React, { useState, useEffect } from 'react';
import {
  Stack,
  Card,
  CardSection,
  Text,
  Heading,
  Loading,
} from '@kiwicom/orbit-components/lib';
import styled, { css } from 'styled-components';
import media from '@kiwicom/orbit-components/lib/utils/mediaQuery';

const Container = styled.div`
  background: #ff9800;
  height: 200px;
  padding: 40px;

  ${media.largeMobile(css`
    height: 250px;
  `)};
`;

const MaxWidthContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Header = ({ rates }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rates) {
      setLoading(false);
    }
  }, [rates]);

  return (
    <Container>
      <MaxWidthContainer>
        <Stack direction="column">
          <Card>
            <CardSection
              title="SGCheckpoint "
              description="by Marcus.K"
            ></CardSection>
          </Card>
          <Card>
            <CardSection expanded>
              {loading ? (
                <Loading />
              ) : (
                <>
                  <Text>🇸🇬 → 🇲🇾</Text>
                  <Heading>SGD 1 → RM{rates.rates.MYR}</Heading>
                  <Text>Updated on {rates.date}</Text>
                </>
              )}
            </CardSection>
          </Card>
        </Stack>
      </MaxWidthContainer>
    </Container>
  );
};

export default Header;
