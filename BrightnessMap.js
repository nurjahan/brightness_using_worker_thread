self.addEventListener('message', function(e) {
var data = e.data;
var bin=data.msg1;
var w=data.msg2;
var h=data.msg3;
BMap= new Array(h);
	for (i = 0; i <h; ++ i)
		BMap[i] = new Array(w);
	for (row=0; row<h; row++)
	{
		for(col=0;col<w;col++)
		{	
			BMap[row][col]=Math.ceil(((data.msg[row][col])*bin).toFixed(4));
			if(BMap[row][col]<1)
				BMap[row][col]=1;
		}
	}
self.postMessage({'bright':BMap});
}, false);

