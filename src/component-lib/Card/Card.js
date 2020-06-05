import React from 'react';
import {
  Box,
  Grid,
  Paragraph,
  Heading,
  Image
} from "grommet";
import styled from 'styled-components';

function Card({ characterList, columns, markFav, handleFav, ...rest }) {

  let colArr = Array.apply(null, Array(columns)).map(function () { return 'flex' });

  const Fav = styled.i`
    font-size:30px;
    color:#FF726F;
    position:absolute;
    top: 174px;
    right: 2px;

    .favorite {
      color:#830705;
    }
  `;

  const ImageDiv = styled.div`
    position: relative;
  `;

  const charItems = characterList.map((cdata) =>
    <Box
      background="#171E2A"
      elevation="small"
      key={cdata.id}
      responsive={true}
    >
      <Box pad="xsmall" >

        <ImageDiv>
          <Box height="small" width="small" pad="none">
            <Image src={cdata.thumbnail.path + '.' + cdata.thumbnail.extension}
              fit="cover"
            />
            {
              markFav &&
              <Fav className="fa fa-heart" onClick={handleFav}></Fav>
            }
          </Box>
        </ImageDiv>
        <Heading
          level="4"
          margin="small"
          size="small"
          truncate={true}
        >
          {cdata.name}
        </Heading>
        <Paragraph margin="xsmall"
          size="small"
          responsive={true}>
          {cdata.description}
        </Paragraph>
      </Box>
    </Box>
  );

  return (
    <Grid gap="medium"
      margin="medium"
      responsive={true}
      columns={colArr}
      justify="stretch"
      align="stretch"
    >
      {charItems}
    </Grid>

  );
}

export default Card;
