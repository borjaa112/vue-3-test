import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoguedUserStore = defineStore("loguedUser", () => {
    const user = ref("invitado")

    function setUser(username) {
        user.value = username
    }

    return { user, setUser }
})