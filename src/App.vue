<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    width: 90%;
    max-width: 960px;
    margin: 5em auto;
    border-radius: 2em;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.2);
    background: #fff;
  }
  .error {
    color: #ff3f80;
    font-size: 14px;
    margin-bottom: 0.5em;
  }
  button {
    text-decoration: none;
    background: #5ae4ca;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 20px;
    padding: 0.7em 2em;
    cursor: pointer;
    &:hover,
    &:active {
      background: #45b6a1;
    }
  }
}
</style>
