//辅助工具 调用同时多个getter
import { mapGetters, mapMutations } from 'vuex';
// import Data from './../../common/select-tree/data';
// import the component
// import Treeselect from '@riophae/vue-treeselect'
// // import the styles
// import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
    data() {
        return {}
    },
    computed: {
        sum() {
            return this.$store.state.Mconsole.count
        },
        count() {
            return this.$store.state.Mconsole.item
        },
        storageItem() {
            return this.$store.state.Mstorage.count
        },
        ...mapGetters({
            item: 'Mconsole/filters',
            odd: 'Mconsole/getLength',
            equal: 'Mconsole/findEqual',
            Mapget: 'Mconsole/getLength'
        }),
        ...mapGetters({
            show: 'Mstorage/oddShow'
        }),
        // sum () {
        // 	return this.$store.state.count
        // },
        // item (){
        // 	return this.$store.getters.filters
        // },
        // odd (){
        // 	return this.$store.getters.getLength
        // },
        // equal (){
        // 	return this.$store.getters.findEqual(1);
        // },
        // Mapget (){
        //    return console.log(mapGetters)
        // }
    },
    methods: {
        // tap() {
        //     this.$store.commit('Mconsole/accumulation')
        // },
        // ...mapMutations({
        //     remove: 'Mconsole/deletes'
        // }),
        // dispatch() {
        //     this.$store.dispatch('Mconsole/subtraction')
        // },
        // showOdd() {
        //     this.$store.dispatch('Mstorage/accumulation')
        // },
        // submit() {
        //     console.log(this.selected.id);
        // },
        // setSelectedId(val) {
        //     console.log(val);
        // },
        // errorText(val) {
        //     console.log(val);
        // }
    }
}