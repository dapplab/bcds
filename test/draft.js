contract('Draft', function(accounts) {
  it("should assert true", function(done) {
    var draft = Draft.at(Draft.deployed_address);
    assert.isTrue(true);
    done();
  });
});
