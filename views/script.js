<<<<<<< HEAD:views/script.js
let draggableElem = document.getElementById("cap");
let draggableElem1 = document.getElementById("res");
let draggableElem2 = document.getElementById("pow");
let draggableElem3 = document.getElementById("trans");
let draggableElem4 = document.getElementById("diode");
let draggableElem5 = document.getElementById("led");
let draggableElem6 = document.getElementById("gnd");
let draggableElem7 = document.getElementById("controller");
let draggableElem8 = document.getElementById("inductor");

let initialX = 0,
    initialY = 0;
let moveElement = false;

//Events Object
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

//Detech touch device
const isTouchDevice = () => {
    try {
        //We try to create TouchEvent (it would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

//Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem.style.top =
            draggableElem.offsetTop - (initialY - newY) + "px";
        draggableElem.style.left =
            draggableElem.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 1
draggableElem1.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem1.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem1.style.top =
            draggableElem1.offsetTop - (initialY - newY) + "px";
        draggableElem1.style.left =
            draggableElem1.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem1.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem1.addEventListener("mouseleave", stopMovement);
draggableElem1.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 2
//Start (mouse down / touch start)
draggableElem2.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem2.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem2.style.top =
            draggableElem2.offsetTop - (initialY - newY) + "px";
        draggableElem2.style.left =
            draggableElem2.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem2.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem2.addEventListener("mouseleave", stopMovement);
draggableElem2.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 3
//Start (mouse down / touch start)
draggableElem3.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem3.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem3.style.top =
            draggableElem3.offsetTop - (initialY - newY) + "px";
        draggableElem3.style.left =
            draggableElem3.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem3.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem3.addEventListener("mouseleave", stopMovement);
draggableElem3.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 4
//Start (mouse down / touch start)
draggableElem4.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem4.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem4.style.top =
            draggableElem4.offsetTop - (initialY - newY) + "px";
        draggableElem4.style.left =
            draggableElem4.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem4.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem4.addEventListener("mouseleave", stopMovement);
draggableElem4.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 5
//Start (mouse down / touch start)
draggableElem5.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem5.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem5.style.top =
            draggableElem5.offsetTop - (initialY - newY) + "px";
        draggableElem5.style.left =
            draggableElem5.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem5.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem5.addEventListener("mouseleave", stopMovement);
draggableElem5.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 6
//Start (mouse down / touch start)
draggableElem6.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem6.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem6.style.top =
            draggableElem6.offsetTop - (initialY - newY) + "px";
        draggableElem6.style.left =
            draggableElem6.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem6.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem6.addEventListener("mouseleave", stopMovement);
draggableElem6.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 7
//Start (mouse down / touch start)
draggableElem7.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem7.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem7.style.top =
            draggableElem7.offsetTop - (initialY - newY) + "px";
        draggableElem7.style.left =
            draggableElem7.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem7.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem7.addEventListener("mouseleave", stopMovement);
draggableElem7.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 8
//Start (mouse down / touch start)
draggableElem8.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem8.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem8.style.top =
            draggableElem8.offsetTop - (initialY - newY) + "px";
        draggableElem8.style.left =
            draggableElem8.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem8.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem8.addEventListener("mouseleave", stopMovement);
draggableElem8.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});


//for drawing lines

jQuery(document).ready(function () {
    var targetOption = {
        anchor: "LeftMiddle",
        maxConnections: 1,
        isSource: false,
        isTarget: true,
        reattach: true,
        endpoint: "Dot",
        connector: ["Bezier", { curviness: 50 }],
        setDragAllowedWhenFull: true
    };

    var sourceOption = {
        tolerance: "touch",
        anchor: "RightMiddle",
        maxConnections: 1,
        isSource: true,
        isTarget: false,
        reattach: true,
        endpoint: "Dot",
        connector: ["Bezier", { curviness: 50 }],
        setDragAllowedWhenFull: true
    };

    jsPlumb.importDefaults({
        ConnectionsDetachable: true,
        ReattachConnections: true,
        maxConnections: 1,
        Container: "page_connections"
    });

    var questionEndpoints = []; // 'source' and 'target' endpoints

    // "source" click handler
    jQuery("#select_list_lebensbereiche ul > li").click(function () {
        //remove existing start endpoint, if any:
        jsPlumb.deleteEndpoint(questionEndpoints[0]);
        // add a new one on the clicked element:
        questionEndpoints[0] = jsPlumb.addEndpoint(jQuery(this), sourceOption);
        connectEndpoints();
    });

    // "target" endpoint
    jQuery("#select_list_wirkdimensionen ul > li").click(function () {
        if (!questionEndpoints[0]) return; // don't respond if a source hasn't been selected
        // remove existing endpoint if any
        jsPlumb.deleteEndpoint(questionEndpoints[1]);
        //create a new one:
        questionEndpoints[1] = jsPlumb.addEndpoint(jQuery(this), targetOption);
        connectEndpoints();
    });

    var connectEndpoints = function () {
        jsPlumb.connect({
            source: questionEndpoints[0],
            target: questionEndpoints[1]
        });
    }

=======
let draggableElem = document.getElementById("cap");
let draggableElem1 = document.getElementById("res");
let draggableElem2 = document.getElementById("pow");
let draggableElem3 = document.getElementById("trans");
let draggableElem4 = document.getElementById("diode");
let draggableElem5 = document.getElementById("led");
let draggableElem6 = document.getElementById("gnd");
let draggableElem7 = document.getElementById("controller");
let draggableElem8 = document.getElementById("inductor");

let initialX = 0,
    initialY = 0;
let moveElement = false;

//Events Object
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

//Detech touch device
const isTouchDevice = () => {
    try {
        //We try to create TouchEvent (it would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

//Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem.style.top =
            draggableElem.offsetTop - (initialY - newY) + "px";
        draggableElem.style.left =
            draggableElem.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 1
draggableElem1.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem1.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem1.style.top =
            draggableElem1.offsetTop - (initialY - newY) + "px";
        draggableElem1.style.left =
            draggableElem1.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem1.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem1.addEventListener("mouseleave", stopMovement);
draggableElem1.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 2
//Start (mouse down / touch start)
draggableElem2.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem2.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem2.style.top =
            draggableElem2.offsetTop - (initialY - newY) + "px";
        draggableElem2.style.left =
            draggableElem2.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem2.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem2.addEventListener("mouseleave", stopMovement);
draggableElem2.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 3
//Start (mouse down / touch start)
draggableElem3.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem3.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem3.style.top =
            draggableElem3.offsetTop - (initialY - newY) + "px";
        draggableElem3.style.left =
            draggableElem3.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem3.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem3.addEventListener("mouseleave", stopMovement);
draggableElem3.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 4
//Start (mouse down / touch start)
draggableElem4.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem4.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem4.style.top =
            draggableElem4.offsetTop - (initialY - newY) + "px";
        draggableElem4.style.left =
            draggableElem4.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem4.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem4.addEventListener("mouseleave", stopMovement);
draggableElem4.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 5
//Start (mouse down / touch start)
draggableElem5.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem5.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem5.style.top =
            draggableElem5.offsetTop - (initialY - newY) + "px";
        draggableElem5.style.left =
            draggableElem5.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem5.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem5.addEventListener("mouseleave", stopMovement);
draggableElem5.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 6
//Start (mouse down / touch start)
draggableElem6.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem6.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem6.style.top =
            draggableElem6.offsetTop - (initialY - newY) + "px";
        draggableElem6.style.left =
            draggableElem6.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem6.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem6.addEventListener("mouseleave", stopMovement);
draggableElem6.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 7
//Start (mouse down / touch start)
draggableElem7.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem7.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem7.style.top =
            draggableElem7.offsetTop - (initialY - newY) + "px";
        draggableElem7.style.left =
            draggableElem7.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem7.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem7.addEventListener("mouseleave", stopMovement);
draggableElem7.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});

//ELEMENT 8
//Start (mouse down / touch start)
draggableElem8.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    //initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    //Start movement
    moveElement = true;
});

//Move
draggableElem8.addEventListener(events[deviceType].move, (e) => {
    //if movement == true then set top and left to new X andY while removing any offset
    if (moveElement) {
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem8.style.top =
            draggableElem8.offsetTop - (initialY - newY) + "px";
        draggableElem8.style.left =
            draggableElem8.offsetLeft - (initialX - newX) + "px";
        initialX = newX;
        initialY = newY;
    }
});

//mouse up / touch end
draggableElem8.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
        moveElement = false;
    })
);

draggableElem8.addEventListener("mouseleave", stopMovement);
draggableElem8.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});


//for drawing lines

jQuery(document).ready(function () {
    var targetOption = {
        tolerance: "touch",
        anchor: "Top",
        maxConnections: 1,
        isSource: false,
        isTarget: true,
        reattach: true,
        endpoint: "Dot",
        connector: ["Bezier", { curviness: 50 }],
        setDragAllowedWhenFull: true
    };

    var sourceOption = {
        tolerance: "touch",
        anchor: "Top",
        maxConnections: 1,
        isSource: true,
        isTarget: false,
        reattach: true,
        endpoint: "Dot",
        connector: ["Bezier", { curviness: 50 }],
        setDragAllowedWhenFull: true
    };

    jsPlumb.importDefaults({
        ConnectionsDetachable: true,
        ReattachConnections: true,
        maxConnections: 1,
        Container: "page_connections"
    });

    var questionEndpoints = []; // 'source' and 'target' endpoints

    // "source" click handler
    jQuery("#source ul > li").click(function () {
        //remove existing start endpoint, if any:
        // jsPlumb.deleteEndpoint(questionEndpoints[0]);
        // add a new one on the clicked element:
        questionEndpoints[0] = jsPlumb.addEndpoint(jQuery(this), sourceOption);
        connectEndpoints();
    });

    // "target" endpoint
    jQuery("#target ul > li").click(function () {
        if (!questionEndpoints[0]) return; // don't respond if a source hasn't been selected
        // remove existing endpoint if any
        // jsPlumb.deleteEndpoint(questionEndpoints[1]);
        //create a new one:
        questionEndpoints[1] = jsPlumb.addEndpoint(jQuery(this), targetOption);
        connectEndpoints();
    });

    var connectEndpoints = function () {
        jsPlumb.connect({
            source: questionEndpoints[0],
            target: questionEndpoints[1]
        });
    }

>>>>>>> 0d394cbcd02087a6702fd2811af51c3b535e99b8:Frontend/script.js
});