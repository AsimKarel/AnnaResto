// https://rnfirebase.io/firestore/usage
// https://firebase.google.com/docs/firestore/quickstart

import firestore from '@react-native-firebase/firestore';
import { Collections } from './enums';

const restaurantCollectionReference = firestore().collection(
  Collections.RESTAURANTS,
);

const applicationsCollectionReference = firestore().collection(
  Collections.APPLICATIONS,
);

export function getAllRestaurants() {
  try {
    return restaurantCollectionReference;
  } catch (error) {
    console.error(error);
  }
}

export function getAllApplicantsForRestaurant() {
  try {
    return applicationsCollectionReference;
  } catch (error) {
    console.error(error);
  }
}
