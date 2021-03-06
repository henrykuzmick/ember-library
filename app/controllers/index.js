import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      });
    }
  }

});
