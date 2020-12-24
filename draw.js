var current_digit = 0;

var drawing_sk = (sk) => {
    sk.setup = () => {
        let drawing_canvas = sk.createCanvas(400, 400).parent("#drawing-canvas");

        sk.stroke(0);
        sk.strokeWeight(14);
        sk.background(255);   
// wdvifhuwvdejg
        next_button = sk.createButton("Next");
        next_button.mousePressed(sk.next);

        clear_button = sk.createButton("Clear");
        clear_button.mousePressed(sk.clear_canvas);
    };

    sk.draw = () => {};

    sk.mouseDragged = () => {
        sk.line(sk.mouseX, sk.mouseY, sk.pmouseX, sk.pmouseY);
    };

    sk.next = () => {
        sk.save(current_digit + ".png");
        sk.clear_canvas();
        current_digit = (current_digit + 1) % 10;
    };

    sk.clear_canvas = () => {
        sk.clear();
        sk.background(255);
    };

    sk.keyPressed = () => {
        if (sk.key == "c") {
          sk.clear_canvas();
        } else if (sk.key == " ") {
          sk.next();
    }
    };
};

var instructions_sk = (sk) => {
    sk.setup = () => {
        let instructions_canvas = sk
        .createCanvas(400, 400)
        .parent("instructions-canvas");

        sk.noStroke();
    };

    sk.draw = () => {
        sk.background(255);
        sk.translate(sk.width / 2, sk.height / 2);
        sk.textSize(280);
        sk.textAlign(sk.CENTER, sk.CENTER);
        sk.text(current_digit, 0, 0);
    };
};

new p5(drawing_sk);
new p5(instructions_sk);
