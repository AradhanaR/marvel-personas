import React from 'react';
import CardList from '../../component-lib/Card';
import Hdata from './data.json';


class Hero extends React.Component {

  constructor() {
    super();
  }

  toggleFavourite = (e) => {
    console.log(e)
  }

  render() {
    return (
      <CardList
        characterList={Hdata}
        columns={5}
        markFav={true}
        handleFav={this.toggleFavourite}
      >

      </CardList>
    );
  }
}
export default Hero;
