import Route from '@ember/routing/route';
import Data from '../data/students';

export default Route.extend({
  model(params){
    console.log(params);
    console.log(Data[0]);
    for(let i=0;i<=Object.keys(Data).length;i++){
      if(params.student_id === Data[i].id){
        return Data[i];
        break;
      }
    }

  }
});
