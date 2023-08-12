addLayer("p", {
    name: "prestige",
    symbol: "P",
    position: 0,
    startData() {
      return {
        unlocked: true,
        points: new Decimal(0),
      };
    },
    color: "#4BDC13",
    requires: new Decimal(10),
    resource: "prestige points",
    baseResource: "points",
    baseAmount() {
      return player.points;
    },
    type: "normal",
    exponent: 0.5,
    gainMult() {
      let gain = new Decimal(1); // Initialize gain with a default value
      
      if (hasUpgrade('p', 11)) {
        gain = gain.times(2); // Update gain if the player has upgrade 11
      }
      
      return gain;
    },
    gainExp() {
      return new Decimal(1);
    },
    row: 0,
    hotkeys: [
      {
        key: "p",
        description: "P: Reset for prestige points",
        onPress() {
          if (canReset(this.layer)) doReset(this.layer);
        },
      },
    ],
    layerShown() {
      return true;
    },
    upgrades: {
      11: {
        title: "test",
        description: "Double your point gain.",
        cost: new Decimal(1),
      },
    },
  });