import create from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
    persist(
        (set) => {
            return {
                user: null,
                token: null,

                setUser: (newUser) => set((state) => ({ ...state, user: newUser })),
                setToken: (newToken) => set((state) => ({ ...state, token:newToken })),
                logout: () => set((state) => ({ ...state,user : null, token: null }))
            }
        },
        {
            name: "user-info"
        }
    )
)

export { useUser }