import CreateJs from "createjs-module";

window.addEventListener("load", init);

function init() {
    // Stageオブジェクトを作成します
    const stage = new CreateJs.Stage("myCanvas");

    // 円を作成します
    drawCircle(stage);

    // 四角形を作成します
    drawRect(stage);

    // 五角形を作成します
    drawPentagon(stage);

    // 白抜きで五角形を作成します
    drawPentagonOutline(stage);

    // 線を作成します
    drawLine(stage);
}

const drawCircle = (stage) => {
    const circle = new CreateJs.Shape();
    circle.graphics.beginFill("darkred"); // 赤色で描画するように設定
    circle.graphics.drawCircle(0, 0, 100); // 中心座標(x, y)から半径 100px の円を描画
    circle.setTransform(200, 200, 2, 1.5, 45); // X 座標 200px , Y 座標 200px の位置に配置, scale は倍率を指定, skew は歪み, reg は registration

    stage.addChild(circle); // 表示リストに追加
    stage.update();
}

const drawRect = (stage) => {
    const rect = new CreateJs.Shape();
    rect.graphics.beginFill("#0000FF");
    rect.graphics.drawRect(0, 0, 100, 100);

    stage.addChild(rect);
    stage.update();
}

const drawPentagon = (stage) => {
    const pentagon = new CreateJs.Shape();
    pentagon.graphics.beginFill("green")
    pentagon.graphics.moveTo(100, 300)
                     .lineTo(200, 350)
                     .lineTo(300, 450)
                     .lineTo(100, 500)
                     .lineTo(50, 350);
    pentagon.graphics.endFill();

    stage.addChild(pentagon);
    stage.update();
}

const drawPentagonOutline = (stage) => {
    const outline = new CreateJs.Shape();
    outline.graphics.setStrokeStyle(5)
    outline.graphics.beginStroke("red");
    outline.graphics.moveTo(400, 300)
                    .lineTo(500, 350)
                    .lineTo(600, 450)
                    .lineTo(400, 500)
                    .lineTo(350, 350)
                    .lineTo(400, 300);

    stage.addChild(outline);
    stage.update();
}

const drawLine = (stage) => {
    const line = new CreateJs.Shape();
    line.graphics.setStrokeStyle(5)
    line.graphics.beginStroke("black");
    line.graphics.moveTo(400, 50)
                 .lineTo(400, 100)
                 .lineTo(450, 100);
    line.graphics.endStroke();

    stage.addChild(line);
    stage.update();
}
