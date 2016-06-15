describe('advanced types', function() {
  var expect = chai.expect;

  describe('arrays', function() {

    it('variable arr should be an array', function() {
      expect(Array.isArray(arr)).to.equal(true);
    });

    it('variable arr1 should be an array', function() {
      expect(Array.isArray(arr1)).to.equal(true);
    });

    it('variale arr2 should be an array with at least 5 items in it', function() {
      expect(arr2.length >= 5).to.equal(true);
    });
  });

  describe('accessing in arrays and strings', function() {
    it('should assign val1 the first value in testArray', function() {
      expect(val1).to.equal('a');
    });

    it('should assign val2 the third value from testString', function() {
      expect(val2).to.equal('i');
    });

    it('should assign the second to last value from testArray to val3', function (){
      expect(val3).to.equal('g');
    });

    it('should assign the 13th value from testString to  val4', function() {
      expect(val4).to.equal('r');
    });
  });

});