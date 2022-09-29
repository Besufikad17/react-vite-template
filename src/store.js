import create from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
    persist(
        (set) => {
            return {
                user: {},
                token: "",

                setUser: (newUser) => set((state) => ({ ...state, user: newUser })),
                setToken: (newToken) => set((state) => ({ ...state, token:newToken })),
                logout: () => set((state) => ({ ...state,user : {}, token: "" }))
            }
        },
        {
            name: "user-info"
        }
    )
)

export { useUser }