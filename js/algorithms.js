//chapter 1 & 2
function sum (number, canvas1, canvas2)
{
    show_button_normalization (false);
    
    asyncLoop(
	{
		length : 5,
		functionToLoop : function(loop, i){
			setTimeout(function(){
				asyncLoop(
				{
					length : 5,
					functionToLoop : function(loop, i){
						setTimeout(function(){
							var pixel1 = get_pixel (i, j, canvas1);
                            var pixel2;

                            if (canvas2 != null)
                            {
                                pixel2 = get_pixel (i, j, canvas2);
                            }
                            else
                            {
                                pixel2 = new Array(4);
                                pixel2[0] = number;
                                pixel2[1] = number;
                                pixel2[2] = number;
                                pixel2[3] = number;
                            }

                            var pixel = new Array(4);
                            pixel[0] = parseInt (parseInt (pixel1[0]*0.5) + parseInt (pixel2[0]*0.5));
                            pixel[1] = parseInt (parseInt (pixel1[1]*0.5) + parseInt (pixel2[1]*0.5));
                            pixel[2] = parseInt (parseInt (pixel1[2]*0.5) + parseInt (pixel2[2]*0.5));
                            pixel[3] = parseInt (parseInt (pixel1[3]*0.5) + parseInt (pixel2[3]*0.5));

                            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
							loop();
						},1000);
					},   
				});
				loop();
			},1000);
		},   
	});
    
    
    
    /*for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel1 = get_pixel (i, j, canvas1);
            var pixel2;

            if (canvas2 != null)
            {
                pixel2 = get_pixel (i, j, canvas2);
            }
            else
            {
                pixel2 = new Array(4);
                pixel2[0] = number;
                pixel2[1] = number;
                pixel2[2] = number;
                pixel2[3] = number;
            }

            var pixel = new Array(4);
            pixel[0] = parseInt (parseInt (pixel1[0]*0.5) + parseInt (pixel2[0]*0.5));
            pixel[1] = parseInt (parseInt (pixel1[1]*0.5) + parseInt (pixel2[1]*0.5));
            pixel[2] = parseInt (parseInt (pixel1[2]*0.5) + parseInt (pixel2[2]*0.5));
            pixel[3] = parseInt (parseInt (pixel1[3]*0.5) + parseInt (pixel2[3]*0.5));

            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }*/
}

function pow (number, canvas1)
{
    show_button_normalization (false);
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, canvas1);
            set_pixel (i, j, image1_a, Math.pow(pixel[0], number), Math.pow(pixel[1], number), Math.pow(pixel[2], number), pixel[3]);
        }
    }
    show_button_normalization (true);
}

function log (canvas1)
{
    show_button_normalization (false);
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, canvas1);
            set_pixel (i, j, image1_a, Math.log(pixel[0]), Math.log(pixel[1]), Math.log(pixel[2]), pixel[3]);
        }
    }
    show_button_normalization (true);
}

function normalization (canvas1)
{
    show_button_normalization (false);
    if (canvas1.width <= 0)
    {
        alert("The image is empty!");
    }
    else
    {
        log (image1);
    }
    
    var max = 0;
    var min = 9999;

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, canvas1);

            if (pixel[0] > max)
            {
                max = pixel[0];
            }   
            
            if (pixel[1] > max)
            {
                max = pixel[1];
            }
            
            if (pixel[2] > max)
            {
                max = pixel[2];
            }

            if (pixel[0] < min)
            {
                min = pixel[0];
            }   
            
            if (pixel[1] < min)
            {
                min = pixel[1];
            }
            
            if (pixel[2] < min)
            {
                min = pixel[2];
            }
        }
    }

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, canvas1);

            pixel[0] = parseInt(255*(pixel[0] - min)/(max-min));
            pixel[1] = parseInt(255*(pixel[1] - min)/(max-min));
            pixel[2] = parseInt(255*(pixel[2] - min)/(max-min));
            set_pixel (i, j, canvas1, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }
}

//chapter 3
function move (x, y, canvas1)
{
    show_button_normalization (false);

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            set_pixel (i, j, image1_a, 255, 255, 255, 255);
        }
    }

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, canvas1);
            set_pixel (i+x, j+y, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }

    if (x > 0)
    {
        for (var i=0; i<x; i++)
        {
            for (var j=0; j<canvas1.height; j++)
            {
                set_pixel (i, j, image1_a, 255, 255, 255, 255);
            }
        }
    }
    else
    {
        for (var i=0; i<(-1)*x; i++)
        {
            for (var j=0; j<canvas1.height; j++)
            {
                set_pixel (canvas1.height-i-1, j, image1_a, 255, 255, 255, 255);
            }
        }
    }

    if (y > 0)
    {
        for (var i=0; i<canvas1.width; i++)
        {
            for (var j=0; j<y; j++)
            {
                set_pixel (i, j, image1_a, 255, 255, 255, 255);
            }
        }
    }
    else
    {
        for (var i=0; i<canvas1.width; i++)
        {
            for (var j=0; j<(-1)*y; j++)
            {
                set_pixel (i, canvas1.width-j-1, image1_a, 255, 255, 255, 255);
            }
        }
    }
}

function cut (x1, y1, x, y, canvas1)
{
    show_button_normalization (false);

    move ((-1)*x1, (-1)*y1, image1);
    if ((canvas1.height - x) <= 0)
    {
        for (var i=0; i<(-1)*(canvas1.height - x); i++)
        {
            for (var j=0; j<canvas1.height; j++)
            {
                set_pixel (i, j, image1_a, 255, 255, 255, 255);
            }
        }
    }
    else
    {
        for (var i=0; i<(canvas1.height - x); i++)
        {
            for (var j=0; j<canvas1.height; j++)
            {
                set_pixel (canvas1.height-1-i, j, image1_a, 255, 255, 255, 255);
            }
        }
    }

    if ((canvas1.width - y) <= 0)
    {
        for (var i=0; i<canvas1.width; i++)
        {
            for (var j=0; j<(-1)*(canvas1.width - y); j++)
            {
                set_pixel (i, j, image1_a, 255, 255, 255, 255);
            }
        }
    }
    else
    {
        for (var i=0; i<canvas1.width; i++)
        {
            for (var j=0; j<(canvas1.width - y); j++)
            {
                set_pixel (i, canvas1.width-1-j, image1_a, 255, 255, 255, 255);
            }
        }
    }
}

function copy2 (x1, y1, x, y, x2, y2, canvas1)
{
    show_button_normalization (false);
    cut (x1, y1, x, y, canvas1);

    for (var i=0; i<x; i++)
    {
        for (var j=0; j<y; j++)
        {
            var pixel = get_pixel (i, j, image1_a);
            set_pixel (i+x2, j+y2, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<y2; j++)
        {
            var pixel = get_pixel (i, j, image1);
            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, image1);
            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }

    for (var i=0; i<x2; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, image1);
            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }

    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel = get_pixel (i, j, image1);
            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }
}

//chapter 4 & 5
function histogram (canvas1, histogram_canvas, number1, number2, number3, number4)
{
    histogram_canvas.getContext('2d').clearRect(0, 0, histogram_canvas.height, histogram_canvas.width);
    var imageData = canvas1.getContext('2d').getImageData(0, 0, canvas1.height, canvas1.width);

    //arrays with results
    var r = new Array(255);
    var g = new Array(255);
    var b = new Array(255);

    for (var i=0; i<256; i++)
    {
        r[i] = 0;
        g[i] = 0;
        b[i] = 0;
    }
    
    //calculate histogram
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            index = (i*canvas1.height+j)*4;
            r[imageData.data[index+0]]++;
            g[imageData.data[index+1]]++;
            b[imageData.data[index+2]]++;
        }
    }
    
    //find max value   
    var max_value = 0;
    for (var i=0; i<256; i++)
    {
        if (max_value < r[i])
        {
            max_value = r[i];
        }

        if (max_value < g[i])
        {
            max_value = g[i];
        }

        if (max_value < b[i])
        {
            max_value = b[i];
        }
    }
    
    //get ctx
    var histogram_ctx = histogram_canvas.getContext("2d");

    //draw texts
    histogram_ctx.font = "10pt Arial";
    histogram_ctx.fillStyle = "black";
    histogram_ctx.textBaseline = "top";
    histogram_ctx.textAlign = "center";
    histogram_ctx.font = "8pt Arial";
    histogram_ctx.fillText((parseInt(number2))*parseInt(number3), 8, 120);
    histogram_ctx.fillText((parseInt(parseInt(max_value)+parseInt(number2)))*parseInt(number3), 8, 20);
    histogram_ctx.fillText((parseInt(number1))*parseInt(number4), 25, 160);
    histogram_ctx.fillText((parseInt(parseInt(255)+parseInt(number1)))*parseInt(number4), 265, 160);

    //draw vertical arrow
    histogram_ctx.moveTo(20, 150);
    histogram_ctx.lineTo(20, 0);
    histogram_ctx.lineTo(17, 5);
    histogram_ctx.lineTo(20, 0);
    histogram_ctx.lineTo(23, 5);
    histogram_ctx.stroke();
    histogram_ctx.moveTo(20, 150);  

    //draw horizontal arrow
    histogram_ctx.moveTo(20, 150);
    histogram_ctx.lineTo(280, 150);
    histogram_ctx.lineTo(275, 153);
    histogram_ctx.lineTo(280, 150);
    histogram_ctx.lineTo(275, 147);
    histogram_ctx.stroke();

    //draw r
    histogram_ctx.strokeStyle = "rgba(255,0,0,0.33)";
    histogram_ctx.beginPath();
    histogram_ctx.moveTo(20, 150);

    for (var i=0; i<256; i++)
    {
        histogram_ctx.lineTo(20+i, 150-(130.0*r[i]/max_value));
    }
    histogram_ctx.stroke();

    //draw g
    histogram_ctx.strokeStyle = "rgba(0,255,0,0.33)";
    histogram_ctx.beginPath();
    histogram_ctx.moveTo(20, 150);

    for (var i=0; i<256; i++)
    {
        histogram_ctx.lineTo(20+i, 150-(130.0*g[i]/max_value));
    }
    histogram_ctx.stroke();

    //draw b
    histogram_ctx.strokeStyle = "rgba(0,0,255,0.33)";
    histogram_ctx.beginPath();
    histogram_ctx.moveTo(20, 150);

    for (var i=0; i<256; i++)
    {
        histogram_ctx.lineTo(20+i, 150-(130.0*b[i]/max_value));
    }
    histogram_ctx.stroke();     
}

function local_thresholding (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var min = [255, 255, 255];
            var max = [0, 0, 0];
            var pixel;

            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }
                    
                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }

                pixel = get_pixel (i-1, j, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }
                
                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }

                if (j < canvas1.width)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }
                    
                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }
            }

            if (j-1 >= 0)
            {
                pixel = get_pixel (i, j-1, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }
                
                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }
            }

            pixel = get_pixel (i, j, canvas1);
            if (pixel[0] > max[0])
            {
                max[0] = pixel[0];
            }
            if (pixel[1] > max[1])
            {
                max[1] = pixel[1];
            }
            if (pixel[2] > max[2])
            {
                max[2] = pixel[2];
            }
            
            if (pixel[0] < min[0])
            {
                min[0] = pixel[0];
            }
            if (pixel[1] < min[1])
            {
                min[1] = pixel[1];
            }
            if (pixel[2] < min[2])
            {
                min[2] = pixel[2];
            }

            if (j < canvas1.height)
            {
                pixel = get_pixel (i, j+1, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }
                
                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }
                    
                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }

                pixel = get_pixel (i+1, j, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }
                
                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }
                    
                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }
            }
            
            pixel = get_pixel (i, j, canvas1);
            
            if (pixel[0] > (min[0]+max[0])/2)
            {
                pixel[0] = 255;
            }
            else
            {
                pixel[0] = 0;
            }

            if (pixel[1] > (min[1]+max[1])/2)
            {
                pixel[1] = 255;
            }
            else
            {
                pixel[1] = 0;
            }

            if (pixel[2] > (min[2]+max[2])/2)
            {
                pixel[2] = 255;
            }
            else
            {
                pixel[2] = 0;
            }
            set_pixel (i, j, image1_a, pixel[0], pixel[1], pixel[2], pixel[3]);
        }
    }
}

//chapter 6 & 7
function erosion (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var min = [255, 255, 255];
            var max = [0, 0, 0];
            var pixel;
            var oryg_pixel = get_pixel (i, j, canvas1);

            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }

                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }

                pixel = get_pixel (i-1, j, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }

                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }

                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }
            }

            if (j-1 >= 0)
            {
                pixel = get_pixel (i, j-1, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }

                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }
            }

            pixel = get_pixel (i, j, canvas1);
            if (pixel[0] > max[0])
            {
                max[0] = pixel[0];
            }
            if (pixel[1] > max[1])
            {
                max[1] = pixel[1];
            }
            if (pixel[2] > max[2])
            {
                max[2] = pixel[2];
            }

            if (pixel[0] < min[0])
            {
                min[0] = pixel[0];
            }
            if (pixel[1] < min[1])
            {
                min[1] = pixel[1];
            }
            if (pixel[2] < min[2])
            {
                min[2] = pixel[2];
            }

            if (j < canvas1.height)
            {
                pixel = get_pixel (i, j+1, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }

                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }

                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }

                pixel = get_pixel (i+1, j, canvas1);
                if (pixel[0] > max[0])
                {
                    max[0] = pixel[0];
                }
                if (pixel[1] > max[1])
                {
                    max[1] = pixel[1];
                }
                if (pixel[2] > max[2])
                {
                    max[2] = pixel[2];
                }

                if (pixel[0] < min[0])
                {
                    min[0] = pixel[0];
                }
                if (pixel[1] < min[1])
                {
                    min[1] = pixel[1];
                }
                if (pixel[2] < min[2])
                {
                    min[2] = pixel[2];
                }

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    if (pixel[0] > max[0])
                    {
                        max[0] = pixel[0];
                    }
                    if (pixel[1] > max[1])
                    {
                        max[1] = pixel[1];
                    }
                    if (pixel[2] > max[2])
                    {
                        max[2] = pixel[2];
                    }

                    if (pixel[0] < min[0])
                    {
                        min[0] = pixel[0];
                    }
                    if (pixel[1] < min[1])
                    {
                        min[1] = pixel[1];
                    }
                    if (pixel[2] < min[2])
                    {
                        min[2] = pixel[2];
                    }
                }
            }
            set_pixel (i, j, image1_a, min[0], min[1], min[2], oryg_pixel[3]);   
        }
    }
}

function dilation (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var min = 255;
            var max = 0;
            var pixel;
            var oryg_pixel = get_pixel (i, j, canvas1);

            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                    {
                        max = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                    else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                    {
                        min = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                }

                pixel = get_pixel (i-1, j, canvas1);
                if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                {
                    max = (pixel[0] + pixel[1] + pixel[2])/3;
                }
                else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                {
                    min = (pixel[0] + pixel[1] + pixel[2])/3;
                }

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                    {
                        max = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                    else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                    {
                        min = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                }
            }

            if (j-1 >= 0)
            {
                pixel = get_pixel (i, j-1, canvas1);
                if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                {
                    max = (pixel[0] + pixel[1] + pixel[2])/3;
                }
                else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                {
                    min = (pixel[0] + pixel[1] + pixel[2])/3;
                }
            }

            pixel = get_pixel (i, j, canvas1);
            if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
            {
                max = (pixel[0] + pixel[1] + pixel[2])/3;
            }
            else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
            {
                min = (pixel[0] + pixel[1] + pixel[2])/3;
            }

            if (j < canvas1.height)
            {
                pixel = get_pixel (i, j+1, canvas1);
                if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                {
                    max = (pixel[0] + pixel[1] + pixel[2])/3;
                }
                else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                {
                    min = (pixel[0] + pixel[1] + pixel[2])/3;
                }
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                    {
                        max = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                    else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                    {
                        min = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                }

                pixel = get_pixel (i+1, j, canvas1);
                if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                {
                    max = (pixel[0] + pixel[1] + pixel[2])/3;
                }
                else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                {
                    min = (pixel[0] + pixel[1] + pixel[2])/3;
                }

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    if ((pixel[0] + pixel[1] + pixel[2])/3 > max)
                    {
                        max = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                    else if ((pixel[0] + pixel[1] + pixel[2])/3 < min)
                    {
                        min = (pixel[0] + pixel[1] + pixel[2])/3;
                    }
                }
            }
            set_pixel (i, j, image1_a, max, max, max, oryg_pixel[3]);   
        }
    }
}

//chapter 8
function median_filter (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel;
            var pixel_array0 = [];
            var pixel_array1 = [];
            var pixel_array2 = [];
            var counter = 0;
            var oryg_pixel = get_pixel (i, j, canvas1);
            
            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    pixel_array0[counter] = pixel[0];
                    pixel_array1[counter] = pixel[1];
                    pixel_array2[counter] = pixel[2];
                    counter++;
                }

                pixel = get_pixel (i-1, j, canvas1);
                pixel_array0[counter] = pixel[0];
                pixel_array1[counter] = pixel[1];
                pixel_array2[counter] = pixel[2];
                counter++;
                

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    pixel_array0[counter] = pixel[0];
                    pixel_array1[counter] = pixel[1];
                    pixel_array2[counter] = pixel[2];
                    counter++;
                }
            }

            if (j-1 >= 0)
            {
                pixel = get_pixel (i, j-1, canvas1);
                pixel_array0[counter] = pixel[0];
                pixel_array1[counter] = pixel[1];
                pixel_array2[counter] = pixel[2];
                counter++;
            }

            pixel = get_pixel (i, j, canvas1);
            pixel_array0[counter] = pixel[0];
            pixel_array1[counter] = pixel[1];
            pixel_array2[counter] = pixel[2];
            counter++;

            if (j < canvas1.height)
            {
                pixel = get_pixel (i, j+1, canvas1);
                pixel_array0[counter] = pixel[0];
                pixel_array1[counter] = pixel[1];
                pixel_array2[counter] = pixel[2];
                counter++;
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    pixel_array0[counter] = pixel[0];
                    pixel_array1[counter] = pixel[1];
                    pixel_array2[counter] = pixel[2];
                    counter++;
                }

                pixel = get_pixel (i+1, j, canvas1);
                pixel_array0[counter] = pixel[0];
                pixel_array1[counter] = pixel[1];
                pixel_array2[counter] = pixel[2];
                counter++;

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    pixel_array0[counter] = pixel[0];
                    pixel_array1[counter] = pixel[1];
                    pixel_array2[counter] = pixel[2];
                    counter++;
                }
            }

            pixel_array0.sort();
            pixel_array1.sort();
            pixel_array2.sort();

            if (counter%2 == 1)
            {
                set_pixel (i, j, image1_a, pixel_array0[Math.floor (counter/2)], pixel_array1[Math.floor (counter/2)], pixel_array2[Math.floor (counter/2)], oryg_pixel[3]);
            }
            else
            {
                set_pixel (i, j, image1_a, (pixel_array0[counter/2]+pixel_array0[(counter/2)-1])/2, (pixel_array1[counter/2]+pixel_array1[(counter/2)-1])/2, (pixel_array2[counter/2]+pixel_array2[(counter/2)-1])/2, oryg_pixel[3]);
            }   
        }
    }
}

function roberts_filter (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var temp1 = get_pixel (i, j, canvas1);
            var temp2 = get_pixel (i+1, j+1, canvas1);
            temp1[0] -= temp2[0];
            temp1[1] -= temp2[1];
            temp1[2] -= temp2[2];
            temp1[0] = Math.abs(temp1[0]);
            temp1[1] = Math.abs(temp1[1]);
            temp1[2] = Math.abs(temp1[2]);
            
            temp2 = get_pixel (i+1, j, canvas1);
            var temp3 = get_pixel (i, j+1, canvas1);
            temp2[0] -= temp3[0];
            temp2[1] -= temp3[1];
            temp2[2] -= temp3[2];
            temp2[0] = Math.abs(temp2[0]);
            temp2[1] = Math.abs(temp2[1]);
            temp2[2] = Math.abs(temp2[2]);
            
            temp3[0] = temp1[0] + temp2[0];
            temp3[1] = temp1[1] + temp2[1];
            temp3[2] = temp1[2] + temp2[2];
            var oryg_pixel = get_pixel (i, j, canvas1);
            set_pixel (i, j, image1_a, temp3[0], temp3[1], temp3[2], oryg_pixel[3]);
        }
    }
}

function average_filter (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel;
            var counter = 0;
            var pixel_array0 = 0;
            var pixel_array1 = 0;
            var pixel_array2 = 0;
            var oryg_pixel = get_pixel (i, j, canvas1);
            
            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }

                pixel = get_pixel (i-1, j, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;
                

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }
            }

            if (j-1 >= 0)
            {
                pixel = get_pixel (i, j-1, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;
            }

            pixel = get_pixel (i, j, canvas1);
            pixel_array0 += pixel[0];
            pixel_array1 += pixel[1];
            pixel_array2 += pixel[2];
            counter++;

            if (j < canvas1.height)
            {
                pixel = get_pixel (i, j+1, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }

                pixel = get_pixel (i+1, j, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }
            }

            pixel_array0 /= counter;
            pixel_array1 /= counter;
            pixel_array2 /= counter;

            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    set_pixel (i-1, j-1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }

                set_pixel (i-1, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   

                if (j < canvas1.height)
                {
                    set_pixel (i-1, j+1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }
            }

            if (j-1 >= 0)
            {
                set_pixel (i, j-1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
            }

            set_pixel (i, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   

            if (j < canvas1.height)
            {
                set_pixel (i, j+1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    set_pixel (i+1, j-1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }

                set_pixel (i+1, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   

                if (j < canvas1.height)
                {
                    set_pixel (i+1, j+1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }
            }
        }
    }
}

function lp1_filter (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel;
            var counter = 0;
            var pixel_array0 = 0;
            var pixel_array1 = 0;
            var pixel_array2 = 0;
            var oryg_pixel = get_pixel (i, j, canvas1);
            
            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }

                pixel = get_pixel (i-1, j, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;
                

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }
            }

            if (j-1 >= 0)
            {
                pixel = get_pixel (i, j-1, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;
            }

            pixel = get_pixel (i, j, canvas1);
            pixel_array0 += pixel[0];
            pixel_array1 += pixel[1];
            pixel_array2 += pixel[2];
            pixel_array0 += pixel[0];
            pixel_array1 += pixel[1];
            pixel_array2 += pixel[2];
            counter++;
            counter++;

            if (j < canvas1.height)
            {
                pixel = get_pixel (i, j+1, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }

                pixel = get_pixel (i+1, j, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                counter++;

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                    counter++;
                }
            }

            pixel_array0 /= counter;
            pixel_array1 /= counter;
            pixel_array2 /= counter;

            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    set_pixel (i-1, j-1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }

                set_pixel (i-1, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   

                if (j < canvas1.height)
                {
                    set_pixel (i-1, j+1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }
            }

            if (j-1 >= 0)
            {
                set_pixel (i, j-1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
            }

            set_pixel (i, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   

            if (j < canvas1.height)
            {
                set_pixel (i, j+1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    set_pixel (i+1, j-1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }

                set_pixel (i+1, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   

                if (j < canvas1.height)
                {
                    set_pixel (i+1, j+1, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
                }
            }
        }
    }
}

function vertical_prewitt_filter (canvas1)
{
    for (var i=0; i<canvas1.width; i++)
    {
        for (var j=0; j<canvas1.height; j++)
        {
            var pixel;
            var pixel_array0 = 0;
            var pixel_array1 = 0;
            var pixel_array2 = 0;
            var oryg_pixel = get_pixel (i, j, canvas1);
            
            if (i-1 >= 0)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i-1, j-1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                }

                pixel = get_pixel (i-1, j, canvas1);
                pixel_array0 += pixel[0];
                pixel_array1 += pixel[1];
                pixel_array2 += pixel[2];
                

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i-1, j+1, canvas1);
                    pixel_array0 += pixel[0];
                    pixel_array1 += pixel[1];
                    pixel_array2 += pixel[2];
                }
            }

            if (i+1 < canvas1.width)
            {
                if (j-1 >= 0)
                {
                    pixel = get_pixel (i+1, j-1, canvas1);
                    pixel_array0 -= pixel[0];
                    pixel_array1 -= pixel[1];
                    pixel_array2 -= pixel[2];
                }

                pixel = get_pixel (i+1, j, canvas1);
                pixel_array0 -= pixel[0];
                pixel_array1 -= pixel[1];
                pixel_array2 -= pixel[2];

                if (j < canvas1.height)
                {
                    pixel = get_pixel (i+1, j+1, canvas1);
                    pixel_array0 -= pixel[0];
                    pixel_array1 -= pixel[1];
                    pixel_array2 -= pixel[2];
                }
            }

            set_pixel (i, j, image1_a, pixel_array0, pixel_array1, pixel_array2, oryg_pixel[3]);   
        }
    }
}