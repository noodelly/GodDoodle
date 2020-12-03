window.onload = function()
{
    clearDoodle();
    //drawLine(getRandomVal(0, 640), getRandomVal(0, 480));
    document.body.onkeyup = function(e)
    {
        if(e.keyCode == 32){ drawLine(); }
        if(e.keyCode == 27){ clearDoodle(); }
    }
}

function drawLine()
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.bezierCurveTo(getRandomVal(0, 640), getRandomVal(0, 480), getRandomVal(0, 640), 
                      getRandomVal(0, 480), getRandomVal(0, 640), getRandomVal(0, 480));
    ctx.stroke();
}

function fill()
{

}

function clearDoodle()
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 640, 480);
    ctx.stroke();
}

function getRandomVal(lowerBound, upperBound)
{
    return Math.floor((Math.random() * upperBound) + lowerBound);
}

