var image_type1 = -1;
var image_type2 = -1;

function clear_file1()
{
	document.getElementById('file1').value = '';
	image_type1 = -1;
	image1.width = 0;
	image1.height = 0;
	image1_a.width = 0;
	image1_a.height = 0;
	image1_h.width = 280;
	image1_h.height = 170;
	image1_h.getContext('2d').clearRect(0, 0, image1_h.width, image1_h.height);
	show_button_normalization (false);
}

function clear_file2()
{
	document.getElementById('file2').value = '';
	image_type2 = -1;
	image2.width = 0;
	image2.height = 0;
}

function draw_image (file_image, canvas)
{
    var img = new window.Image();
    img.addEventListener("load", function ()
	{
        canvas.getContext("2d").drawImage(img, 0, 0);
    });
    img.setAttribute("src", file_image); 
  	canvas.width = img.width;
	canvas.height = img.height;
}

document.getElementById('file1').onchange = function()
{
	var filename = document.getElementById('file1').value;
	if (!((filename[filename.length-3] == "p") && (filename[filename.length-2] == "n") && (filename[filename.length-1] == "g")))
	{
		alert("The first image is not PNG!");
		return;
	}
	
	draw_image ('png_images/'+document.getElementById('file1').value, image1);
    draw_image ('png_images/'+document.getElementById('file1').value, image1_a);
};

document.getElementById('file2').onchange = function()
{
	var filename = document.getElementById('file2').value;
	if (!((filename[filename.length-3] == "p") && (filename[filename.length-2] == "n") && (filename[filename.length-1] == "g")))
	{
		alert("The first image is not PNG!");
		return;
	}

	draw_image ('png_images/'+document.getElementById('file2').value, image2);
};

document.addEventListener("DOMContentLoaded", function()
{
    clear_file1();
	clear_file2();
	show_button_normalization (false);
	document.getElementById('menu1').style.visibility='hidden';
    document.getElementById('menu2').style.visibility='hidden';
    document.getElementById('menu3').style.visibility='hidden';
    document.getElementById('menu4').style.visibility='hidden';
    document.getElementById('menu5').style.visibility='hidden';
    document.getElementById('menu6').style.visibility='hidden';
	document.getElementById('menu7').style.visibility='hidden';
	document.getElementById('menu8').style.visibility='hidden';
	document.getElementById('menu_options').style.visibility='hidden';
	document.getElementById('menu_options2').style.visibility='hidden';
	document.getElementById('menu_options3').style.visibility='hidden';
});

function show_button_normalization(visible)
{
	if (visible == true)
	{
		document.getElementById('button_normalize1').style.visibility='visible';
	}
	else
	{
		document.getElementById('button_normalize1').style.visibility='hidden';
	}
}

function image_type (canvas1)
{
	var is_bin = 1;
	var is_gray = 1;
	var is_colorful = 1;

	if ((canvas1.height <= 0) || (canvas1.width <= 0))
	{
		return -1;
	}

	for (var i=0; i<canvas1.height; i++)
    {
        for (var j=0; j<canvas1.width; j++)
        {
            var pixel = get_pixel (i, j, canvas1);
            
			if (!(((pixel[0] == 0) || (pixel[0] == 255)) && ((pixel[1] == 0) || (pixel[1] == 255)) && ((pixel[2] == 0) || (pixel[2] == 255))))
			{
				is_bin = 0;
			}

			if ((pixel[0] != pixel[1]) || (pixel[1] != pixel[2]))
			{
				is_gray = 0;
			}

			if ((is_bin == 0) && (is_gray == 0))
			{
				return 3;
			}
        }
    }

	if (is_bin == 1)
	{
		return 1;
	}
	else if (is_gray == 1)
	{
		return 2;
	}
	return 3;
}