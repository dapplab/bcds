contract('Bank', function(accounts) {
  it("should assert true", function(done) {
    var bank = Bank.at(Bank.deployed_address);
    assert.isTrue(true);
    done();
  });
});
