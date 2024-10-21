import {  fetchTraffic } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchTraffic =()=> useQuery(
  {
    queryFn: fetchTraffic,
    queryKey:['traffic']
  }
)