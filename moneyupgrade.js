class MoneyUpgrade {
    constructor(cost,costgain,effect) {
        this.level = new e("0")
        this.costgain = costgain
        this.basecost = cost
        this.effect = effect
    }
    getEffect() {
        return this.effect(this.level)
    }
    getCostDesc() {
        return "$" + this.basecost.pow(this.costgain(this.level)).toStringWithDecimalPlaces(4)
    }
    buy()
    {
        if(game.money.gte(this.basecost.pow(this.costgain(this.level))))
        {
            game.money = game.money.sub(this.basecost.pow(this.costgain(this.level)));
            this.level = this.level.add(1);
        }
    }
}