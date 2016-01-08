contract('Entity', function(accounts) {
  it("should assert true", function(done) {
    var entity = Entity.at(Entity.deployed_address);
    assert.isTrue(true);
    done();
  });
});
