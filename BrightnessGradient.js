
importScripts('RGBtoGray.js');
importScripts('BrightnessMap.js');
importScripts('GradientComputation.js');
importScripts('FeatureCombination.js');
importScripts('convolution.js');
importScripts('CircleCreation.js');
importScripts('DivideCircle.js');
importScripts('nonmaxSuppression.js');

self.addEventListener('message', function(e) {
  var data = e.data;
  var image = new Array(data.msg5);
for (i = 0; i <data.msg5; ++ i)
{
	image[i] = new Array(data.msg4);
	for (j = 0; j <data.msg4; ++ j)
		image[i][j] = new Array(3);
}
  image=data.msg;
  var Ort=data.msg1;
  var bin=data.msg2;
  var radius=data.msg3;
  var w=data.msg4;
  var h=data.msg5;
	GrayImage=RGBtoGray(image,w,h);
	BMap=BrightnessMap(GrayImage,bin,w,h);
	var BrGm = new Array(h);
		for (i = 0; i <h; ++ i)
		{
			BrGm[i] = new Array(w);
			for (j = 0; j <w; ++ j)
				BrGm[i][j] = new Array(Ort);
		}
	var theta=new Array();
	for(var i=0;i<=7;i++)
	{
		theta[i]=i*Math.PI/Ort;
		BGMO=GradientComputation(BMap,bin,radius,theta[i],w,h);
		for(l=0;l<h;l++)
		{
			for(m=0;m<w;m++)
			{
				BrGm[l][m][i]=BGMO[l][m];
			}
		}	
	}
	FComb=FeatureCombination(BrGm,Ort,w,h);
	maxMag=FComb[0];
	maxOrt=FComb[1];
	PBoundary=nonmaxSuppression(maxMag,maxOrt,h,w,Ort);
  
      self.postMessage({'BrGM1':PBoundary});
 
}, false);


/*function BrightnessGradient(image,Ort,bin,radius,w,h)
{
	GrayImage=RGBtoGray(image,w,h);
	BMap=BrightnessMap(GrayImage,bin,w,h);
	var BrGm = new Array(h);
		for (i = 0; i <h; ++ i)
		{
			BrGm[i] = new Array(w);
			for (j = 0; j <w; ++ j)
				BrGm[i][j] = new Array(Ort);
		}
	var theta=new Array();
	for(var i=0;i<=7;i++)
	{
		theta[i]=i*Math.PI/Ort;
		BGMO=GradientComputation(BMap,bin,radius,theta[i],w,h);
		for(l=0;l<h;l++)
		{
			for(m=0;m<w;m++)
			{
				BrGm[l][m][i]=BGMO[l][m];
			}
		}	
	}
	FComb=FeatureCombination(BrGm,Ort,w,h);
	maxMag=FComb[0];
	maxOrt=FComb[1];
	PBoundary=nonmaxSuppression(maxMag,maxOrt,h,w,Ort);
	return PBoundary;
}*/