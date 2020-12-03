import axios from 'axios';
import { useEffect, useState } from 'react';
import { getFieldArrayFromJSON } from '../Helpers/FieldFactory';
import { Field, ShortTextField, EmailField, MultiChoiceField, LongTextField, DateField, PhoneNumberField } from '../Models/models';


interface ApplicationForm {
  id: string;
  title: string;
}

export function useApplicationForm() {
  const [data, setData] = useState<Field[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true)
    axios.post('https://us-central1-code-challenge-anna.cloudfunctions.net/giveMeThatApplicationPlease',
    {"token": "e0ab9219-e3b1-4012-932d-c62dc08d99f2"})
    .then((response:any) => {
        let fields:Field[] = [];
        const _data = response.data;
        fields = getFieldArrayFromJSON(_data);
        setData(fields);
        setLoading(false)
    })
    return () => {
      setLoading(false)
    };
  }, []);

  return [data, loading];
}
