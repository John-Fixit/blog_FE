import { create } from "zustand";

type State = {
    darkTheme: boolean;
}

type Action = {
    updateTheme: (theme: boolean)=>void;
}

const useAppTheme = create<State & Action>((set)=>{
    return({
        darkTheme: false,
        updateTheme: (theme)=>{
            set({darkTheme: theme})
        }
    })
})

export { useAppTheme }
