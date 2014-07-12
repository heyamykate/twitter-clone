var dashTweet = $('#dash-tweet');
var tweetLength = $('#char-count');
var tweetSend = $('#tweet-submit');

var doubleHeight = function() {
	dashTweet.height(function(n, h) {
		if(h == 21) {
			return h*2;
		} else {
			return h / 2;
		}
	});
}


//STEP 2: When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed. -->
//HINT: jQuery ".on" eventHandler

$(document).ready(function() {
	//Step 1: capture click in text area
	dashTweet.click(function() {
		doubleHeight();
		$('#tweet-controls').toggle();
	})




//STEP 3: As the user types the character count should decrease. Once it hits 10 character or less the count should turn red
	
	dashTweet.keyup(function() {
		//alert("keypress is happening") = WORKS
		tweetLength.text(140 - dashTweet.val().length);
		var charactersLeft = tweetLength.text();
		if(charactersLeft <= 10) {
			tweetLength.css('color', 'red');
		}
		else {
			tweetLength.css('color', 'black');
		}
	});

	//STEP 4: If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars)

	dashTweet.keyup(function() {
		var num = parseInt(tweetLength.text());
		if(num <= 0) {
			tweetSend.prop('disabled', true);
		} else {
			tweetSend.prop('disabled', false);
		}
	});
//STEP 5: When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname. -->
//HINT: jQuery ".prepend" method

//Capture click on Tweet (tweetSend) button
$('#newTweet').hide();

tweetSend.on("click", function() {
	//Prepend user's tweet into the div #stream
	var tweet = ('#newTweet').clone(true);
	tweet.removeAttr('id');
	tweet.css({display: 'block'});	

	$('#stream').prepend(tweet);
})



//Use username and profile pic and handle

//give the post the class of .tweet


//STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. -->
//HINT: CSS ":hover" pseudo element -->

//STEP 7: The Retweets/timestamp/Reply areas below should also be hidden by default. These should only expand if you click on the tweet. Use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com -->
//HINT: jQuery ".on" eventHandler -->

});





