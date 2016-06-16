// const firebase = global.firebase;
import firebase from 'firebase';
import {mount} from 'react-mounter';
import page from 'page';
import qs from 'qs';
import store from './store';
import articleStore from './article-store';
import _ from 'underscore';

export const initContext = () => {

  const config = {
    apiKey: 'AIzaSyCGZzc25YOgV7iuZBkPf7IfgF1x-NbTrSQ',
    authDomain: 'project-nice.firebaseapp.com',
    databaseURL: 'https://project-nice.firebaseio.com',
    storageBucket: 'project-nice.appspot.com',
  };

  firebase.initializeApp(config);

  return {
    mount,
    firebase,
    store,
    articleStore,
    page,
    qs,
    _
  };
};
