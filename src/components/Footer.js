import React from 'react';
import { Stack, Text, TextLink } from '@kiwicom/orbit-components/lib';

const Footer = () => {
  return (
    <footer>
      <Stack
        align="center"
        spacing="normal"
        direction="column"
        spaceAfter="largest"
      >
        <Text>
          Crafted By{' '}
          <TextLink href="https://kohchihao.com" type="secondary" external>
            Marcus Koh Chi Hao
          </TextLink>
        </Text>
        <Text>Data from www.mytransport.sg</Text>
      </Stack>
    </footer>
  );
};

export default Footer;
