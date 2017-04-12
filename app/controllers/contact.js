import Ember from 'ember';

export default Ember.Controller.extend({
  isValidEmail: Ember.computed.match('model.email', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('model.message.length', 5),
  isAllValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
  isDisabled: Ember.computed.not('isAllValid'),
  actions: {
    sendMessage() {
      this.model.save().then((response) => {
        this.set('responseMessage', `Thank you! We've just sent your messaeg to: ${this.get('emailAddress')}`);
        this.set('model.email', '');
        this.set('model.message', '');
      });
    }
  }
});
