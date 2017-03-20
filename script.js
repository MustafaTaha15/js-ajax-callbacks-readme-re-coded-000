$(document).ready(function(){

$.ajax({
	method:'GET'
	url:"https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";
	sucsess:function(data){
		console.log("Done");
		console.log(data);
	}
})

})