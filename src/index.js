const { default: Game } = require("./scripts/game");
const { default: GameView } = require("./scripts/game_view");


document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");

    canvas.dataset.maxWidth = 1200;
    
    visualViewport.addEventListener("resize", onresize);

    let maxWidth = canvas.dataset.maxWidth;
    
    let targetWidth = Math.floor(.8 * window.innerWidth);
    canvas.width = targetWidth > maxWidth ? maxWidth : targetWidth;
    canvas.height = Math.floor(.75 * canvas.width);
    canvas.dataset.scale = canvas.width / maxWidth;
    
    let game = new Game(canvas)
    let gameView = new GameView(game, canvas);

    // canvas.addEventListener('click', (evt) => {
    //     let mousePos = getMousePos(canvas, evt);
      
    //     if (isInside(mousePos, rect)) {
    //       alert('clicked inside rect');
    //     } else {
    //       alert('clicked outside rect');
    //     }
    // }, false);

    function onresize(e) {
        console.log(canvas);
        canvas.width = targetWidth > maxWidth ? maxWidth : targetWidth;
        canvas.height = Math.floor(.75 * canvas.width);
        canvas.dataset.scale = canvas.width / maxWidth;
        gameView.resize();
    }

    window.onkeydown = (e) => {
        switch(e.code) {
            case "ArrowUp":
            case "KeyW":
                game.player.move("u");
                break;
            case "ArrowLeft":
            case "KeyA":
                game.player.move("l");
                break;
            case "ArrowDown":
            case "KeyS":
                game.player.move("d");
                break;
            case "ArrowRight":
            case "KeyD":
                game.player.move("r");
                break;
        }
    }

    // function getMousePos(canvas, event) {
    //     let rect = canvas.getBoundingClientRect();
    //     return {
    //       x: event.clientX - rect.left,
    //       y: event.clientY - rect.top,
    //     };
    // }

//     function isInside(pos, rect) {
//         return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
//     }

//    function makeFullScreen() {
//         if (canvas.requestFullscreen) {
//             canvas.requestFullscreen();
//         } else if (canvas.mozRequestFullScreen) { // Firefox
//             canvas.mozRequestFullScreen();
//         } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
//             canvas.webkitRequestFullscreen();
//         } else if (canvas.msRequestFullscreen) { // IE/Edge
//             canvas.msRequestFullscreen();
//         }
//     }

//     function FullScreenButton(rect, lWidth, fillColor, lineColor) {
//         const context = canvas.getContext("2d");
//         context.beginPath();
//         context.rect(rect.x, rect.y, rect.width, rect.height);
//         context.fillStyle = fillColor;
//         context.fill();
//         context.lineWidth = lWidth;
//         context.strokeStyle = '#000000';
//         context.stroke();
//         context.closePath();
//     }
//     canvas.append(new FullScreenButton(rect, 2, "black"));
    

})