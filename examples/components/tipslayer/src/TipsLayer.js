import Vue from 'vue';
import TipsLayerComponent from "./TipsLayer.vue";

const TipsLayerConstructor = Vue.extend(TipsLayerComponent);
let TipsLayerPool = [];
let getAnInstance = () => {
    if (TipsLayerPool.length > 0) {
        let instance = TipsLayerPool[0];
        TipsLayerPool.splice(0, 1);
        return instance;
    }
    return new TipsLayerConstructor({
        el: document.createElement('div')
    });
};

let returnAnInstance = instance => {
    if (instance) {
        TipsLayerPool.push(instance);
    }
};

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};

TipsLayerConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;
    returnAnInstance(this);
};

var TipsLayer = {};

TipsLayer.install = (VUE, options = {}) => {
    Vue.prototype.$TipsLayer = (options) => {
        console.log("---TipsLayerTipsLayerTipsLayerTipsLayer--");
        // Vue.prototype.$msg = 'Hello World';
        let duration = options.duration || 3000;
        let instance = getAnInstance();
        instance.closed = false;
        clearTimeout(instance.timer);
        instance.firstTxt = typeof options === 'string' ? options : options.firstTxt;
        instance.secondTxt = options.secondTxt || '';
        instance.btonTxt = options.btonTxt || '';
        instance.btonFun = options.btonFun || null;
        instance.hasClose = options.hasClose || false;
        document.body.appendChild(instance.$el);
        return instance;
    };
}

export default TipsLayer;
