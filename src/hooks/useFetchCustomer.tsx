import { fetchCustomers } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchCustomer =()=> useQuery(
  {
    queryFn: fetchCustomers,
    queryKey:['Customer']
  }
)