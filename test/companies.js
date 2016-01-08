contract('Companies', function(accounts) {
  it("should assert true", function(done) {
    var companies = Companies.at(Companies.deployed_address);
    assert.isTrue(true);
    done();
  });
});
