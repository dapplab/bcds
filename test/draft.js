contract('Draft', function(accounts) {
  it("should assert true", function(done) {
    var example = Draft.at(Draft.deployed_address);
    assert.isTrue(true);
    done();
  });
});
