
//sample images 
var images=['gokarna.jpg','spiti.jpg','bhutan.jpg',
			'meghalaya1.jpg','dudhsagar.jpg','temple.jpg'];
//sample text content
var textcontent=['Taj Hotel','Paradise Beach','Famous International Hotel',
				'The Beatiful monastry','Famous International Hotel',
				'The Beatiful monastry'];
var reviews=['22,000','94,000','1,00,000','40,000','60,000','35,000'];
//assigning variables with div elements
var hotelhead=document.getElementById('hotelImage');
var hotelhead1=document.getElementById('hotelImage1');
var hotelhead2=document.getElementById('hotelImage2');
//can insert any number of images based on length of it creates images

for(var i=0;i<images.length;i++)
{  //this loop is for 1st div Hotels in Goa
	
	var imgSource=document.createElement("div");
		imgSource.className='image';
	var img=document.createElement("img");
		img.src=images[i];
	var divIn=document.createElement("div");
	divIn.className='insideClass';
	imgSource.appendChild(img);
	hotelhead.appendChild(imgSource);
	imgSource.appendChild(divIn);

}
//This loop is for International hotels div
for(var i=0;i<images.length-1;i++)
{
	var imgSource=document.createElement("div");
		imgSource.className='image';
	var img=document.createElement("img");
		img.src=images[i];
	imgSource.appendChild(img);
	hotelhead1.appendChild(imgSource);


}
for(var i=0;i<images.length;i++)
{


	var ondiv=document.createElement("div");//create div on background image
		ondiv.className='onDiv';
	var ondiv1=document.createElement("div"); //for name
		ondiv1.className='onDiv1';
	var ondiv2=document.createElement('div');  //for rating
		ondiv2.className='onDiv2';
	var ratediv=document.createElement("span");
	ondiv1.innerText=textcontent[i];
	
	ratediv.className='glyphicon glyphicon-star star-color';
	if(i<3){
		for(var j=0;j<5;j++){
			ratediv=document.createElement("span");
			ratediv.className='glyphicon glyphicon-star star-color';
		ondiv2.appendChild(ratediv);}
	}
	else{
		for (var j=0;j<4;j++){
			ratediv=document.createElement("span");
			ratediv.className='glyphicon glyphicon-star star-color';
			ondiv2.appendChild(ratediv); 
		}
	}
	var ondivp=document.createElement('p');
		ondivp.className='ondivp';
		ondivp.innerText="Reviews by  " + reviews[i];
	ondiv.appendChild(ondiv1);
	ondiv1.appendChild(ondiv2);
	ondiv1.appendChild(ondivp);

	ondiv.style.backgroundImage="url('"+images[i]+"')";
	hotelhead2.appendChild(ondiv);
}