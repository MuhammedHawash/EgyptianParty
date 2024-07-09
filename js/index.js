$(".open-button").click(()=>{
if($(".home-menu").outerWidth(true)==0)
{
  $(".open-button").animate({marginLeft:"250px"})
  $(".home-menu").animate({width:"250px"},50)
  $(".home-center-content").animate({marginLeft :'250px'},300)
}
else
{
  $(".open-button").animate({marginLeft:"0px"})
  $(".home-menu").animate({width:"0px"},50)
  $(".home-center-content").animate({marginLeft :'0px'},300)
}
  
})


$(".close-button").click((e)=>{
  e.preventDefault();
  $(".open-button").animate({marginLeft:"0px"})
  $(".home-menu").animate({width:"0px"},50)
  $(".home-center-content").animate({marginLeft :'0px'},300)
})


// **************************************************************************/


$(".home-menu a").click(function(e) {
	e.preventDefault(); // Prevent the default action (page reload)

	let sectionId = $(e.target).attr("href");
	let positionOfSection = $(sectionId).offset().top;

	$("html, body").animate({ scrollTop: positionOfSection }, 2000, "linear");
});





// **************************************************************************/

$(".singer").next(".first-singer-details").slideDown(500)
$(".singer").click((e)=>{
 
  $(e.target).next().slideToggle(500)
 
})

//***************************************************************************** */
function makeTimer() {

		let endTime = new Date("29 April 2025 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			let now = new Date();
			now = (Date.parse(now) / 1000);

			let timeLeft = endTime - now;

			let days = Math.floor(timeLeft / 86400); 
			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(`${days} D`);
			$(".hours").html(`${hours} h`);
			$(".minutes").html(`${minutes} m`);
			$(".seconds").html(`${seconds} s`);		

	}

	setInterval(function() { makeTimer(); }, 1000);

	//*******************************************************************************************/

	let maxLength = 100;
$('textarea').keyup(function(e) {
  let length = $(e.target).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").html("your available characters finished");
								 $(".remaining-chars").css("display","none")
                
            }
        else{
        
        $("#chars").text(AmountLeft);
				$(".remaining-chars").css("display","inline")
        }
				});