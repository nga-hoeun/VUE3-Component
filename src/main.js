import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import formComponent from './components/formComponent.vue'
import cardComponent from './components/cardComponent.vue'


const app = createApp(App);
app.component("friend-nav",HelloWorld);
app.component("friend-form",formComponent);
app.component("friend-card",cardComponent);
app.mount('#app')
