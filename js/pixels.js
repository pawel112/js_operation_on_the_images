function get_pixel (x, y, canvas)
{
    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(x, y, 1, 1);
	return imgData.data;
}

function set_pixel (x, y, canvas, red, green, blue, alpha)
{ 
    var ctx = canvas.getContext('2d');
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height), 
    pxData = imgData.data, 
    length = pxData.length; 
    
    var i = (x + y * canvas.width) * 4;
    pxData[i] = red; 
    pxData[i + 1] = green; 
    pxData[i + 2] = blue; 
    pxData[i + 3] = alpha;                               
    ctx.putImageData (imgData, 0, 0);                         
}

