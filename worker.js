onmessage = function(event) {
	var canvas = event.data.canvas;
	var gl = canvas.getContext("webgl");

	var i = 0;

	setInterval(function() {
		i = (i + 1) % 256;

		gl.clearColor(i / 255.0, i / 255.0, i / 255.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.commit();
	}, 1000 / 60);
};
