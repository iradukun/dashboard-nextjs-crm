import { Person, Traffic } from '@/types/api';
import axios from 'axios';

const fetchCustomers = async (): Promise<Person[]> => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_USERS_API_URL!, {
    params: {
      key: process.env.NEXT_PUBLIC_MOCKAROO_API_KEY
    }
  });
  return data;
};

const fetchTraffic = async (): Promise<Traffic[]> => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_TRAFFIC_API_URL!, {
    params: {
      key: process.env.NEXT_PUBLIC_MOCKAROO_API_KEY
    }
  });
  return data;
};

export { fetchCustomers, fetchTraffic };