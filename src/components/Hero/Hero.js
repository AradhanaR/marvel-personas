import React from 'react';
import { Anchor, Box, Heading, Image, Text } from 'grommet';

function Hero() {
  return (
    <Box flex={false}>
      <Image src="http://placehold.it/500x325" />
      <Box>
        <Heading level={4}>Card title</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          magni sapiente, tempore debitis beatae culpa natus architecto.
        </Text>
      </Box>
      <Box>
        <Anchor href="#" color="white">
          Find Out More!
        </Anchor>
      </Box>
    </Box>
  );
}
export default Hero;
