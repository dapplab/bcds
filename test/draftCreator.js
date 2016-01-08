contract('DraftCreator', function(accounts) {
  it("should assert true", function(done) {
    var draftCreator = DraftCreator.at(DraftCreator.deployed_address);
    assert.isTrue(true);
    done();
  });
});
