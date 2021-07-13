import { ref } from '@vue/reactivity';
import { projectAuth } from '@/firebase/config.js'

const user = ref();

projectAuth.onAuthStateChanged((_user) => {
    user.value = _user;
})

const getUser = () => {
    return { user };
}

export default getUser;