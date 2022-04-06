var game = {
    factoryVersion: [0,0],
    money: new e("10"),
    upgrades: {
        "mupg1": new MoneyUpgrade(new e("10"),
        level => new e(new e("0.35").mul(level)).add(1),
        level => new e("2").pow(level).eq("1") ? new e("0") : new e("2").pow(level).div("2")),
    }
}