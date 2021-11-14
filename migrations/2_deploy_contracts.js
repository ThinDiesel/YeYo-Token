const yeyoToken = artifacts.require('yeyoToken');

module.exports = function(deployer) {
    deployer.deploy(yeyoToken);
};