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
	dashTweet.click(function() {
		doubleHeight();
		$('#tweet-controls').toggle();
	})

	jQuery("div.time").timeago();

//STEP 3: As the user types the character count should decrease. Once it hits 10 character or less the count should turn red

	dashTweet.keyup(function() {
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

$('#newTweet').hide();

tweetSend.on("click", function() {
	var tweet = $('#newTweet').clone(true);
	tweet.removeAttr('id');
	tweet.css({display: 'block'});
	$('#stream').prepend(tweet);
	$('#newTweetText').text($('.tweet-compose').val());
})

//STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. -->
$('.tweet-actions').hide();
$('div.tweet').hover(function() {
		$('.tweet-actions').toggle();
	});

//STEP 7: The Retweets/timestamp/Reply areas below should also be hidden by default. These should only expand if you click on the tweet. Use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com -->

$('div.stats').hide();

$('div.tweet').on("click", function() {
	$('div.stats').toggle();
})



//BLACK DIAMOND: Implement the Bootstrap tooltips for when you hover over a user’s avatar image -->
//HINT: Bootstrap has good documentation =) -->


//BLACK DIAMOND: Make the timestamp below similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery timeago plugin to make them automatic. -->
//HINT: Refer to timeago documentation -->


//BLACK DIAMOND: Implement the icons for when a tweet is favorited/retweeted in the upper right of the tweet. -->
//HINT: Add to what you created in Step 5 -->



});
