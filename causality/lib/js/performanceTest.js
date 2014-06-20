const timeout = 50;

function doPerformanceTest() {
	var n = document.getElementById("dimInput").value;

	// clear previous results

	var start = new Date().getTime();

	rewrite("result", "Start: " + start + "<br/>");






	//r.innerHTML += "Start: " + start + "<br/>";

	// O(n^3) complexity
	var temp = 0;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			for (var k = 0; k < n; k++) {
				// do something
				temp++;
			}
		}
		// print progress
		// if (i%(n/10) == 0) {


		// 	write(document.getElementById("result"), (100*i/n) + "%<br/>")

		// 	//setTimeout(printProgress(100*i/n), 2);



		// }
	}
	var finish = new Date().getTime();

	write("result", "Finish: " + finish + "<br/>")

	write("result", "Elapsed: " + (finish-start) + "ms<br/>")


	
	// r.innerHTML += "Finish: " + finish + "<br/>";
	// r.innerHTML += "Elapsed: " + (finish-start) + "ms<br/>";

	// r.innerHTML += "<br/>";

	// // O(n^2) space
	// var matrix = [];
	// for (var i = 0; i < n; i++) {
	// 	// do something
	// 	matrix[i] = new Array(n);
	// }
	// r.innerHTML += "Memory: passed<br/>";
}

// function printProgress(percent) {
// 	document.getElementById("result").innerHTML += percent + "%<br/>";
// }

function rewrite(id, text) {
	setTimeout(
		function(id, text) {
			document.getElementById(id).innerHTML = text;
		} (id, text), timeout);
}

function write(id, text) {
	setTimeout(
		function(id, text) {
			document.getElementById(id).innerHTML += text;
		} (id, text), timeout);
}
