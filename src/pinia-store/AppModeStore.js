import { defineStore } from 'pinia'

export const useAppMode = defineStore('appMode', {
    state(){
        return {
            appMode: true
        }
    },
    getters: {
        getAppMode: (state)=> state.appMode
    },
    actions:{
        setAppMode(mode){
            console.log(mode)
            localStorage.setItem("appMode", JSON.stringify(mode))
            this.appMode = mode
        }
    }
})