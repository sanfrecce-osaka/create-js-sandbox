import CreateJs from "createjs-module";

window.addEventListener("load", init);

function init() {
    const leftCanvas = drawLeftCanvas();
    drawRightCanvas(leftCanvas);
}

const drawLeftCanvas = () => {
    const leftCanvas = new CreateJs.Stage("leftCanvas");

    const bottomLayer = new CreateJs.Container();
    bottomLayer.setTransform(0, 0);
    bottomLayer.addChild(drawCircle(), drawRect());

    const topLayer = new CreateJs.Container();
    topLayer.setTransform(0, 0);
    topLayer.addChild(drawPentagon(), drawPentagonOutline(), drawLine(), drawText());

    leftCanvas.addChild(bottomLayer, topLayer);
    leftCanvas.update();
    return leftCanvas;
}

const drawRightCanvas = (leftCanvas) => {
    const bottomLayer = leftCanvas.children[0];
    const boundOfLeftRect = bottomLayer.children[1].getBounds();
    const rightRect = new CreateJs.Shape();
    rightRect.graphics.beginFill("black");
    rightRect.graphics.drawRect(boundOfLeftRect.x, boundOfLeftRect.y, boundOfLeftRect.width, boundOfLeftRect.height);

    const rightCanvas = new CreateJs.Stage("rightCanvas");
    rightCanvas.addChild(rightRect);
    rightCanvas.update();
}


const drawCircle = () => {
    const circle = new CreateJs.Shape();
    circle.graphics.beginFill("darkred"); // 赤色で描画するように設定
    circle.graphics.drawCircle(0, 0, 100); // 中心座標(x, y)から半径 100px の円を描画
    circle.setTransform(200, 200, 2, 1.5, 45); // X 座標 200px , Y 座標 200px の位置に配置, scale は倍率を指定, skew は歪み, reg は registration
    return circle;
}

const drawRect = () => {
    const rect = new CreateJs.Shape();
    rect.graphics.beginFill("#0000FF");
    rect.graphics.drawRect(0, 0, 100, 100);
    rect.setBounds(0, 0, 100, 100);
    return rect
}

const drawPentagon = () => {
    const pentagon = new CreateJs.Shape();
    pentagon.graphics.beginFill("green")
    pentagon.graphics.moveTo(100, 300)
                     .lineTo(200, 350)
                     .lineTo(300, 450)
                     .lineTo(100, 500)
                     .lineTo(50, 350);
    pentagon.graphics.endFill();
    return pentagon
}

const drawPentagonOutline = () => {
    const outline = new CreateJs.Shape();
    outline.graphics.setStrokeStyle(5)
    outline.graphics.beginStroke("red");
    outline.graphics.moveTo(400, 300)
                    .lineTo(500, 350)
                    .lineTo(600, 450)
                    .lineTo(400, 500)
                    .lineTo(350, 350)
                    .lineTo(400, 300);
    return outline
}

const drawLine = () => {
    const line = new CreateJs.Shape();
    line.graphics.setStrokeStyle(5)
    line.graphics.beginStroke("black");
    line.graphics.moveTo(400, 50)
                 .lineTo(400, 100)
                 .lineTo(450, 100);
    line.graphics.endStroke();
    return line;
}

const drawText = () => {
    const text = new CreateJs.Text("create js sandbox", "10px sans-serif", "orange");
    text.setTransform(250, 50, 5, 5, 90); // scale は倍率を指定
    return text;
}
