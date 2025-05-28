import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useNotices = () => {
  return useQuery({
    queryKey: ['notices'],
    queryFn: async () => {
      const res = await axios.get("https://hi-tech-backend-626g.onrender.com/api/notices", {
        withCredentials: true,
      });

      if (!res.data?.data?.notices) {
        throw new Error("No notices data found");
      }

      return res.data.data.notices;
    },
    retry: 1,
  });
};
