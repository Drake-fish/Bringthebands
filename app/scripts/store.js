import React from 'react';
import Bands from './collections/Bands';
import VotedBands from './collections/VotedBands';
import Session from './models/Session';

export default{
  bands: new Bands(),
  session: new Session(),
  votedBands: new VotedBands()

};
