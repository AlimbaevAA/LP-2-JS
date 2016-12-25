var f = require('fs');

f.readFile("access.log", function(err, data) {
   
	var regExp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
	var regExp2 = /\d{1,3}\.\d{1,3}\.\d{1,3}\./g;
	var src = data.toString();
	ips = src.match(regExp);   
	
	unq = ips.filter(function(i, pos) {
    		return ips.indexOf(i) == pos;
	});
	var emp = {};
	
	unq.forEach(function(i, unq) {
		var mask = i.match(regExp2);
		if (!emp[mask]) emp[mask] = []; 
			emp[mask].push(i);
	}); 
	
	console.log(emp);
});