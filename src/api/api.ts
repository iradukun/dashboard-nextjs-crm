
import { Person, Traffic } from '@/types/api';
import axios from 'axios';

const fetchCustomers = async ():Promise<Person[]> => {
  const { data } = await axios.get('https://my.api.mockaroo.com/users.json?key=9358ced0');
  return data;
};
const fetchTraffic = async ():Promise<Traffic[]> => {
    const {data} = await axios.get('https://my.api.mockaroo.com/website_traffic.json?key=9358ced0'); 
    return data;
};
export { fetchCustomers,fetchTraffic };



