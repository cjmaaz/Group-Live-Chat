# Live-Chat Vue3
This web application is a group chat app that let's users to chat in a single shared space. It updates in realtime if any member online sends any message. It uses firebase firestore to store the messages and firebase auth for the authentication.

## Details
This application have route guard (beforeEnter) to have better navigation, however as skeleton loader was in exprimental phase at the time of publish, so the UI experience can feel little bit janky. Vuex is also not implemented in the project for state management as it is a small project built just after learning Vue3.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
