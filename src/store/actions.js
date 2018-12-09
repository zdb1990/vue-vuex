import {accumulation,subtraction,deletes} from './mutation-type';
const actions={
   accumulation(context){
	    context.commit('accumulation')
   },
   subtraction(context){
	    context.commit('subtraction')
   },
   deletes(context){
	   context.commit('deletes')
   }
}
export default actions;