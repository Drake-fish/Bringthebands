import React from 'react';
import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Session from '../../app/scripts/models/session';

describe('session model', () => {
    let session;

    beforeEach(() => {
        Session.prototype.initialize = () => {

        };
        session = new Session();
    });

    it('should create a Backbone Model',()=>{
      expect(session).to.be.an.instanceof(Backbone.Model);
    });
    it('should be a function',()=>{
      expect(Session).to.be.a('function');
    });
    it('should have an attribute id of objectId',()=>{
      expect(session).to.have.property('idAttribute');
      expect(session.idAttribute).to.equal('objectId');
    });
    it('should have a default email value of an empty string', ()=>{
      expect(session.get('email')).to.equal('');
    });

    it('should have a default votedArtists value of [] ', () => {
        expect(session.get('votedArtists')).to.deep.equal([]);
        expect(session.get('votedArtists')).to.be.an('array');
    });

    it('should have a validatePassword method', () => {
        expect(session).to.have.property('validatePassword');
        expect(session.validatePassword).to.be.a('function');
    });


    //register testing
    it('should have a register method', () => {
        expect(session).to.have.property('userRegister');
        expect(session.userRegister).to.be.a('function');
    });



    it('should throw an error if it doesn\'t get an empty string for password and/or username', () => {
        let fn = session.userRegister.bind(session, 1);
        expect(fn).to.throw();
    });


    //login testing
    it('should have a login method', () => {
        expect(session).to.have.property('userLogin');
        expect(session.userLogin).to.be.a('function');
    });

    it('should throw an error if it doesn\'t get an string for password and/or username', () => {
        let fn = session.userLogin.bind(session, 1);
        expect(fn).to.throw();
    });


    //logout testing
    it('should have a logout method', () => {
        expect(session).to.have.property('userLogout');
        expect(session.userLogout).to.be.a('function');
    });
});
