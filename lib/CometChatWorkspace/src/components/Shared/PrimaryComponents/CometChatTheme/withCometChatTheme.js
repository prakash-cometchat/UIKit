import { h } from "@vue/runtime-core";
// import { Palette } from "./Palette";
// import { Typography } from "./Typography";
// import { Breakpoints } from "./Breakpoints";
// import { DefaultStyles } from "./DefaultStyles";

function withCometChatTheme(WrappedComponent, theme) {
  return {
    data() {
      return {
        defaultTheme: null,
      }
    },
    watch: {
      theme: {
        handler(newTheme, oldTheme) {
          if (oldTheme !== newTheme) {
            // let palette = new Palette(),
            //   typography = new Typography(),
            //   globalStyles = { ...DefaultStyles },
            //   breakpoints = new Breakpoints();
          }
        },
        deep: true
      }
    },
    created() {
      console.log('HOC component created', theme)
    },
    render() {
      return h(WrappedComponent, {
        theme: this.defaultTheme
      })
    }
  }
}

export default withCometChatTheme