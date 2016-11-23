import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import VotedBand from '../../app/scripts/models/VotedBand'

describe('VotedBand model', () => {
  let votedBand;

  beforeEach(() => {
    votedBand = new VotedBand();
  });

  it('should create a Backbone Model', () => {
      expect(votedBand).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(VotedBand).to.be.a('function');
  });

  it('should have an attribute id of objectId', () => {
      expect(votedBand).to.have.property('idAttribute');
      expect(votedBand.idAttribute).to.equal('objectId');
  });

  it('should have a default name value of an empty string', () => {
          expect(votedBand.get('name')).to.equal('');
      });

  it('should have a default picture value of an empty string', () => {
          expect(votedBand.get('picture')).to.equal('');
      });

});
