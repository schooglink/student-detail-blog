import Route from '@ember/routing/route';
import Data from '../data/students';

export default Route.extend({

  model(params){
    return Data;
  }

});
