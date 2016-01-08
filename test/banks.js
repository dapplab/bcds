contract('Banks', function(accounts) {
  it("should assert true", function(done) {
    var banks = Banks.at(Banks.deployed_address);
    assert.isTrue(true);
    done();
  });
});
