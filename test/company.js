contract('Company', function(accounts) {
  it("should assert true", function(done) {
    var company = Company.at(Company.deployed_address);
    assert.isTrue(true);
    done();
  });
});
