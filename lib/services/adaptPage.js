const w = window,
  documentElement = document.documentElement,
  body = document.body;

export class AdaptPage {
  /**
   * identify in an iframe
   * see: http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
   */
  static inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  setOffsetHeight(offsetHeight) {
    this.$offsetHeight_ = offsetHeight;
  }

  getScreenHeight() {
    return (w.innerHeight || documentElement.clientHeight || body.clientHeight) - this.$offsetHeight_;
  }

  constructor() {
    this.$offsetHeight_ = 0;
    this.$isInIframe_ = AdaptPage.inIframe();
    this.$watchers = [];
    this.$adapter = () => {
      clearTimeout(this.$timer);
      this.$timer = setTimeout(() => {
        let watcher;
        let index = 0;
        while (watcher = this.$watchers[index]) {
          if (!watcher.el || watcher.el.offsetParent === null) {
            this
              .$watchers
              .splice(index, 1);
          } else {
            watcher.fn(watcher.el);
            index++;
          }
        }
      }, 200);
    }

    /**
     * + add resize
     * see: http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
     */
    window.addEventListener("resize", this.$adapter);
  }

  onAdapt(el, callback) {
    this
      .$watchers
      .push({el: el, fn: callback});
    callback(el, this.$isInIframe_);
  }

  autoAdaptDim(el, setter) {
    let callback = (el, isInIframe) => {
      setter(el.offsetHeight - this.$offsetHeight_, isInIframe, this.getScreenHeight());
    }
    this.onAdapt(el, callback);
  }

  autoAdapt(dom, action) {
    this.autoAdaptDim(dom, (size, isInIframe, screenHeight) => {
      action(size, screenHeight, isInIframe);
    });
  }

  dispose(fn) {
    this.$watchers = [];
    window.removeEventListener("resize", this.$adapter);
  }
}
