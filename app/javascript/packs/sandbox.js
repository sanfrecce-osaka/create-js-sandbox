import CreateJs from "createjs-module";

window.addEventListener("load", init);

function init() {
    // Stageオブジェクトを作成します
    var stage = new CreateJs.Stage("myCanvas");

    // 円を作成します
    var shape = new CreateJs.Shape();
    shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
    shape.graphics.drawCircle(0, 0, 100); //半径 100px の円を描画
    shape.x = 200; // X 座標 200px の位置に配置
    shape.y = 200; // Y 座標 200px の位置に配置
    stage.addChild(shape); // 表示リストに追加

    // Stageの描画を更新します
    stage.update();
}
