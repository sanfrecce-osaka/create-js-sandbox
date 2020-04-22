import CreateJs from "createjs-module";

window.addEventListener("load", init);

function init() {
    // Stageオブジェクトを作成します
    const stage = new CreateJs.Stage("myCanvas");

    // 円を作成します
    const shape = new CreateJs.Shape();
    shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
    shape.graphics.drawCircle(0, 0, 100); // 中心座標(x, y)から半径 100px の円を描画
    shape.setTransform(200, 200, 2, 1.5, 45); // X 座標 200px , Y 座標 200px の位置に配置, scale は倍率を指定, skew は歪み, reg は registration
    stage.addChild(shape); // 表示リストに追加

    // Stageの描画を更新します
    stage.update();
}
