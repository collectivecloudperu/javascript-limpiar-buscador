(function() {
    
    var frmBusqueda = document.getElementById('formulario-busqueda'),
        inputText = frmBusqueda.buscador,
        btnLimpiar = inputText.nextSibling;

    inputText.onkeyup = function() {
        btnLimpiar.style.visibility = (this.value.length) ? "visible" : "hidden";
    };

    btnLimpiar.onclick = function() {
        this.style.visibility = "hidden";
        inputText.value = "";
    };

})();