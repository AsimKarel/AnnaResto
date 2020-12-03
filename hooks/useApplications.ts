import { useEffect, useState } from 'react';
import { getAllApplicantsForRestaurant } from '../firestore/index';
interface Application{
    id: String,
    name: String,
    positionId: String,
    restaurant: String,
}
export const useApplications = (restaurant:String) => {
    const [applications, setApplications] = useState<Application[]>([])
    // const [restaurantId] = useState(restaurant);
    useEffect(() => {
        const subscribe = getAllApplicantsForRestaurant()?.where('restaurant', '==', restaurant.trim())
        .get()
        .then(querySnapshot => {
            const applicants:Application[] = [];
            setApplications([])
            querySnapshot.forEach(doc => {
                const applicant:Application = {
                    id: doc.id,
                    name: doc.data().name,
                    positionId: doc.data().positionId,
                    restaurant: doc.data().restaurant,
                }
                applicants.push(applicant)
                console.log(applicant);
            });
            setApplications(applicants)
        })
        return () => {
            
        }
    }, [])
    return applications;
}