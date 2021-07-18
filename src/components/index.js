// Import vue component
import loader from './loader.vue';

// Declare install function executed by Vue.use()
const install = (Vue) => {
	Vue.component('loader', loader)
}


export default {
	install
}

// To allow use as module (npm/webpack/etc.) export component
export  {loader};
