// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a0319163317905560bb8060226000396000f3606060405260e060020a60003504631a6952308114602e5780632f54bf6e14603a5780638da5cb5b146054575b005b602c6004356094336040565b60656004355b600054600160a060020a0391821691161490565b6077600054600160a060020a031681565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b1560b8576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5056",
    unlinked_binary: "606060405260008054600160a060020a0319163317905560bb8060226000396000f3606060405260e060020a60003504631a6952308114602e5780632f54bf6e14603a5780638da5cb5b146054575b005b602c6004356094336040565b60656004355b600054600160a060020a0391821691161490565b6077600054600160a060020a031681565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b1560b8576000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5056",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Owned"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Owned error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Owned = Contract;
  }

})();
