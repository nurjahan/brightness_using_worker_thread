self.addEventListener('message', function(e) {
var data = e.data;
var w=data.msg1;
var h=data.msg2;
GrayImage= new Array(h);
	for (i = 0; i <h; ++ i)
		GrayImage[i] = new Array(w);
	for (row=0; row<h; row++)
	{
		for(col=0;col<w;col++)
		{	
			GrayImage[row][col]=(((0.2989 *data.msg[row][col][0])+(0.5870*data.msg[row][col][1])+(0.1140*data.msg[row][col][2]))).toFixed(4);
		}
	}
self.postMessage({'gray':GrayImage});
}, false);


/*function RGBtoGray(image,w,h)
{
	GrayImage= new Array(h);
	for (i = 0; i <h; ++ i)
		GrayImage[i] = new Array(w);
	for (row=0; row<h; row++)
	{
		for(col=0;col<w;col++)
		{	
			GrayImage[row][col]=(((0.2989 *image[row][col][0])+(0.5870*image[row][col][1])+(0.1140*image[row][col][2]))).toFixed(4);
		}
	}
	return GrayImage;
}*/