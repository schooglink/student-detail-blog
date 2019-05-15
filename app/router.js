import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals');
  this.route('about');
  this.route('contact');
  this.route('students',{path:'/student'});
  this.route('student',{path:'/student/:student_id'});
});

export default Router;
