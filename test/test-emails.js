var assert = require('assert');

describe('Emails', function() {
  
  describe('validate', function() {
    it('error array should contain four errors for to and from emails missing', function(){
      assert.equal(-1, 0);
    });

    it('error array should contain two errors for to and from emails being formated incorrectly', function(){
      assert.equal(-1, 0);
    });

    it('error array should contain 8 errors for all variables missing', function(){
      assert.equal(-1, 0);
    });

    it('error array should contain no errors for all variables existing', function(){
      assert.equal(-1, 0);
    });
  });

  describe('formatSendGridBody', function() {
    it('should return empty string if email is null', function(){
      assert.equal(-1, 0);
    });

    it('should return pratially complete string if email variable is empty', function(){
      assert.equal(-1, 0);
    });

    it('should return pratially complete string if email variable is missing', function(){
      assert.equal(-1, 0);
    });

    it('should return complete string if all email variable are present and not missing', function(){
      assert.equal(-1, 0);
    });
  });

  describe('sendSendGridEmail', function() {
    it('should test post somehow', function(){
      assert.equal(-1, 0);
    });

    it('should call console on error', function(){
      assert.equal(-1, 0);
    });

    it('should call callback on success', function(){
      assert.equal(-1, 0);
    });
  });

  describe('formatPostmarkBody', function() {
    it('should return empty string if email is null', function(){
      assert.equal(-1, 0);
    });

    it('should return pratially complete string if email variable is empty', function(){
      assert.equal(-1, 0);
    });

    it('should return pratially complete string if email variable is missing', function(){
      assert.equal(-1, 0);
    });

    it('should return complete string if all email variable are present and not missing', function(){
      assert.equal(-1, 0);
    });
  });

  describe('sendPostmarkEmail', function() {
    it('should test post somehow', function(){
      assert.equal(-1, 0);
    });

    it('should call console on error', function(){
      assert.equal(-1, 0);
    });

    it('should call callback on success', function(){
      assert.equal(-1, 0);
    });
  });

  describe('sendEmail', function() {
    it('should use postmark service when environment variable is set', function(){
      assert.equal(-1, 0);
    });

    it('should use postmark service when environment variable is set then use send grid when the service fails', function(){
      assert.equal(-1, 0);
    });

    it('should use send grid service by default', function(){
      assert.equal(-1, 0);
    });

    it('should use send grid service by default and then use postmark when the service fails', function(){
      assert.equal(-1, 0);
    });
  });

  describe('createEmail', function() {
    it('should send error message when response code is not in 200 range', function(){
      assert.equal(-1, 0);
    });

    it('should send success message when response code is in 200 range', function(){
      assert.equal(-1, 0);
    });
  });

});