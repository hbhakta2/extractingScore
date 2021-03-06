/**
* Extracting score over-by-over from cricclubs scorecard link.
* Step 0: Open scorecard link in FireFox web browser
* Step 1: Select Ball By Ball, Select Inning 
* Step 2: Right Click Inspect. Select Console Tab.
* Step 3: Type in below script
* Step 4: Copy entire result and save it to text editor.
* Step 5: Reformat, Copy and paste over-by-over in your video editor text.

*/

//list#1 Extracts overs and runs in this over
//list1 = document.querySelectorAll("div.end-over div.row div.end-head p");

//list#2 Extracts batsman, bowler, runrate
//list2 = document.querySelectorAll("div.end-over div.row div.end-test p");

//list#3 Extracts team abbreviation, team name, score, wicket, and runrate
//list3 = document.querySelectorAll("div.end-over div.row div.end-head.sp table tbody tr td");

//list : Extracts (list1 U list2 U list3)

list = document.querySelectorAll("div.end-over");
var item = null;
var buildString = "";
var count = 0;
for (var i = 0; i < list.length; i++) {
  over = list[i].textContent;
  over = over.trim();
  item = over.split("\n");
  	for (var j = 0; j < item.length; j++) {
		str = " " + item[j].trim();
		if (str.length === 0) {
			count++;
			if (count === 1) {
				buildString += "\n";
			}
			continue;
		} else {
			count = 0;
		}
		buildString += str;
	};
	console.log(buildString);
	buildString = "";
};

/*
Transffering text to video editor

*/
