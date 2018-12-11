const publics = {};
publics.install = function(Vue) {
    Vue.directive('fouce', {
        inserted: function(el) {
            el.focus()
        }
    })
}
export default publics;