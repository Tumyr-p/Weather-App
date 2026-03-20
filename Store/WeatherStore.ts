import { create } from 'zustand'
import { persist} from 'zustand/middleware'
interface WeatherStore {
    allDays: any[];
    setAllDays: (newDays: any[]) => void;
}
export const useWeatherStore =  create<WeatherStore>()( persist(
    (set) => ({
        allDays: [],
        setAllDays: (newDays) => set({ allDays: newDays })
    }),
    {name: 'Weather-store'},
    ),
)