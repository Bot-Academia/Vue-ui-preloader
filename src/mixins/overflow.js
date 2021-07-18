export default {
    created() {
        if (this.disableScrolling) {
          document.body.classList.add("overflowHidden");
        }
      },
    destroyed() {
        if (this.disableScrolling) {
          document.body.classList.remove("overflowHidden");
        }
    }
};
