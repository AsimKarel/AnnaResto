import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../firestore/index';

interface Restaurant {
  id: string;
  title: string;
}

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    let unsubscribe: (() => void) | null | undefined = null;

    // Subscribeing to restaurants collection
    unsubscribe = getAllRestaurants()?.onSnapshot((snapshot) => {
      setRestaurants([]);
      const restaurantList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Restaurant[];
      setRestaurants(restaurantList);
    });

    // make sure to clean up and unsubscribe
    return () => {
      unsubscribe?.();
    };
  }, []);

  return restaurants;
}
