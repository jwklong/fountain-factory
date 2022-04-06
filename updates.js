majorUpdateCosts = [new e(10), new e("ee200")]

function majorUpdate() {
    if (game.money.gte(majorUpdateCosts[game.factoryVersion[0]])) {
        game.factoryVersion[0] += 1
        game.factoryVersion[1] = 0
        game.money = new e(10)
    }
}