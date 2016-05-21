// const firebase = require('firebase');
const firebase = global.firebase;
// import firebase from 'firebase';
import {mount} from 'react-mounter';
import page from 'page';
import qs from 'qs';
import store from './store';
import _ from 'underscore';

export const initContext = () => {

  const config = {
    apiKey: 'AIzaSyCGZzc25YOgV7iuZBkPf7IfgF1x-NbTrSQ',
    authDomain: 'project-nice.firebaseapp.com',
    databaseURL: 'https://project-nice.firebaseio.com',
    storageBucket: 'project-nice.appspot.com',
  };

  console.log(firebase);
  firebase.initializeApp(config);
  const database = firebase.database();

  return {
    mount,
    firebase,
    database,
    store,
    page,
    qs,
    _
  };
};
