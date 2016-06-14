describe('scope and functions', function() {
  var expect = chai.expect;

  describe('scope', function() {

    it('should have a global variable scope1 with a value of a string', function() {
      expect(typeof scope1).to.equal('string');
    });

    it('scope1 should hold the definition of scope', function() {
      expect(scope1).to.equal('scope is the set of variables, objects, and functions you have access to.');
    });

    it('should have a global variable called scope2', function() {
      expect(window.scope2).to.not.equal(null || undefined);
    });

    it('should have a global vaiable called scope3 with a value of 12', function() {
      expect(window.scope3).to.equal(12);
    });
  });

  describe('functions', function() {

    it('should assign a function to the variable add', function() {
      expect(typeof add).to.equal('function');
    });
  });
});