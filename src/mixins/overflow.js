export default {
    created() {
        if (this.disableScrolling) {
          document.body.classList.add("overflowHidden");
        }
      },
      deactivated() {
        if (this.disableScrolling) {
          document.body.classList.remove("overflowHidden");
        }
    }
};
