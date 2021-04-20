document.getElementById('download-car').addEventListener("click", hiddenCloseclick);
	function hiddenCloseclick() {
	var x = document.getElementById('card-dsp-n');
      if (x.style.display == "none"){
	  x.style.display = "block";
	  } else {
		x.style.display = "none"}
	var y = document.getElementById('download-car');
	 if (x.style.display == "block"){
	 	y.style.display = "none";
	 }
    };