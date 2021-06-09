<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="scss">
.lds-dual-ring {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;

  &::after,
  &::before {
    position: absolute;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 3px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: lds-dual-ring 0.6s linear reverse infinite;
    opacity: 0.7;
  }

  &::after {
    width: 100%;
    height: 100%;
    animation: lds-dual-ring 0.6s linear reverse infinite;
  }

  &::before {
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    animation: lds-dual-ring 0.6s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
