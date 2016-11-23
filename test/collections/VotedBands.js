import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VotedBands from '../../app/scripts/collections/VotedBands';

describe('votes collection',()=>{
  let votedBands;

  beforeEach(()=>{
    votedBands=new VotedBands();
  });
  it('should create a Backbone Collection', ()=>{
    expect(votedBands).to.be.instanceof(Backbone.Collection);
  });
  it('should have an addVotes method', ()=>{
    expect(votedBands).to.have.property('addVotes');
    expect(votedBands.addVotes).to.be.a('function');
  });
  it('should throw an error if it doesn\'t get an object passed in',()=>{
    let fn=votedBands.addVotes.bind(votedBands,1);
    expect(fn).to.throw();
  });
});
