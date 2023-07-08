// Main javascript file
document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {

		// Adding a "JavaScript is Enabled" Body Class

		document.querySelector("body").classList.add("js");
		
//Initializing Data AOS
		AOS.init();

//Pop up
// Camel Pop Up
		let camel = document.querySelectorAll("#camelRide .clickDetails a, #camelPopUp .closeButton a");

        for(let popup of camel){
			popup.addEventListener("click", function(event) {
                document.body.classList.toggle("showPopUpCamel");
				
				event.stopPropagation();
                event.preventDefault();
            });
        }

//Treasure Pop Up
		let treasure = document.querySelectorAll("#treasureHunt .clickDetails a, #treasurePopUp .closeButton a");

        for(let popup of treasure){
			popup.addEventListener("click", function(event) {
                document.body.classList.toggle("showPopUpTreasure");
				
				event.stopPropagation();
                event.preventDefault();
            });
        }

// Sphinx Pop Up
		let sphinx = document.querySelectorAll("#sphinxRiddle .clickDetails a, #sphinxPopUp .closeButton a");

        for(let popup of sphinx){

			popup.addEventListener("click", function(event) {
                document.body.classList.toggle("showPopUpSphinx");
				
				event.stopPropagation();
                event.preventDefault();
            });
        }
        
 //Form Checker       
        $("#bookingDetail").hide();
        $("#completeBooking").hide();
        
        document.getElementById("confirmBooking").addEventListener("click", function(event) {
            let fullName = document.getElementById("fullName").value;
            let emailAddress = document.getElementById("emailAddress").value;
            let phoneNumber = document.getElementById("phoneNumber").value;
            let dateBooking = document.getElementById("dateBooking").value;
            let roomType = document.getElementById("roomType").value;   
            let numOfNights = document.getElementById("numOfNights").value;
            let cardName = document.getElementById("cardName").value;
            let cardNumber = document.getElementById("cardNumber").value;
            let expiry = document.getElementById("expiry").value;
            let cvv = document.getElementById("cvv").value;
            let complete = false;

            if(fullName != '' && emailAddress != '' && phoneNumber != '' && dateBooking != '' && roomType != '' && numOfNights != '' && cardName != '' && cardNumber != '' && expiry != '' && cvv != ''){
                complete = true
            }
			if (fullName == ''){
				document.querySelector("#fullName").classList.add("error");
				
			}
            else{
                document.querySelector("#fullName").classList.remove("error");
            }
            if (emailAddress == ''){
				document.querySelector("#emailAddress").classList.add("error");
				
			}
            else{
                document.querySelector("#emailAddress").classList.remove("error");
            }
            if (phoneNumber == ''){
				document.querySelector("#phoneNumber").classList.add("error");
				
			}
            else{
                document.querySelector("#phoneNumber").classList.remove("error");
            }
            if (dateBooking == ''){
				document.querySelector("#dateBooking").classList.add("error");
				
			}
            else{
                document.querySelector("#dateBooking").classList.remove("error");
            }
            if (roomType == ''){
				document.querySelector("#roomType").classList.add("error");
				
			}
            else{
                document.querySelector("#roomType").classList.remove("error");
            }
            if (numOfNights == ''){
				document.querySelector("#numOfNights").classList.add("error");
				
			}
            else{
                document.querySelector("#numOfNights").classList.remove("error");
            }
            if (cardName == ''){
				document.querySelector("#cardName").classList.add("error");
				
			}
            else{
                document.querySelector("#cardName").classList.remove("error");
            }
            if (cardNumber == ''){
				document.querySelector("#cardNumber").classList.add("error");
				
			}
            else{
                document.querySelector("#cardNumber").classList.remove("error");
            }
            if (expiry == ''){
				document.querySelector("#expiry").classList.add("error");
				
			}
            else{
                document.querySelector("#expiry").classList.remove("error");
            }
            if (cvv == ''){
				document.querySelector("#cvv").classList.add("error");
				
			}
            else{
                document.querySelector("#cvv").classList.remove("error");
            }

//Details
            if (complete){
                $("#incompleteForm").hide();
                let price;
                console.log()
                document.getElementById('guestName').innerHTML=fullName;
                document.getElementById('guestEmail').innerHTML=emailAddress;
                document.getElementById('guestPhone').innerHTML=phoneNumber;
                document.getElementById('guestBooking').innerHTML=dateBooking;
                document.getElementById('guestRoom').innerHTML=roomType;
                document.getElementById('guestNight').innerHTML=numOfNights;
                if (roomType=="Pharaoh"){
                    price = 300*numOfNights;
                }
                else if(roomType=="Medjay"){
                    price =200*numOfNights;
                }
                else if(roomType=="Modern"){
                    price= 250*numOfNights;
                }
                document.getElementById('guestPrice').innerHTML= "$"+price;
                $("#bookingDetail").show();
                
                document.getElementById("confirmDetail").addEventListener("click", function(event) {
                    $("#bookingDetail").hide();
                    $("#completeBooking").show();
                });
                
            }
            else{
                document.getElementById("errorMessage").innerHTML="Please fill every details"
            }
            event.stopPropagation();
            event.preventDefault();
        });

	}
});