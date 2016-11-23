import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Band from '../../app/scripts/models/band';

describe('band model', () => {
  let band;

  beforeEach(() => {
    band = new Band();
  });
  it('should create a Backbone Model',()=>{
    expect(band).to.be.an.instanceof(Backbone.Model);

  });

  it('should be a function',()=>{
    expect(Band).to.be.a('function');
  });

});
