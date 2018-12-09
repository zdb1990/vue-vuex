//辅助工具 调用同时多个getter
import {mapGetters,mapMutations} from 'vuex';
export default{
	data(){
		return{

		}
	},
	computed: {
		sum () {
			return this.$store.state.count
		},
		count(){
			return this.$store.state.item
		},
		...mapGetters({
			item: 'filters',
			odd: 'getLength',
			equal:'findEqual',
			Mapget:'getLength'
		})
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
    methods:{
		tap(){
			this.$store.commit('accumulation')
		},
		...mapMutations({
			remove:'subtraction'
		}),
		dispatch(){
			this.$store.dispatch('deletes')
		}
	}
}