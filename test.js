import { AppState } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { platsService } from '../services/platsService';
import { savePlats } from '../utils/storage';

export default function HomeScreen() {
  const { data, refetch } = useQuery({
    queryKey: ["plats"],
    queryFn: platsService.getAll,
  });

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "background") {
        refetch();
      }
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (data?.plats) {
      savePlats(data.plats);
    }
  }, [data]);
}