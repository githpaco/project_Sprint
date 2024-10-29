        // Scroll to Top Function
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // muestra/Oculta el boton Back to top al hacer scroll
        window.addEventListener("scroll", function() {
            const topButton = document.getElementById("top-button");
            if (window.scrollY > window.innerHeight) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });

      //  AQUI SE DEBE INTRODUCIR EL CODIGO CSS Y HTML QUE APARECE POR DEFECTO
      // htmlCode2, cssCode2 EL NUMERO FINAL INDICA EL SECTION DONDE SE INTRODUCIRA EL CÓDIGO
        document.getElementById("htmlCode2").value = "<h2 class='mi-titulo'>Este es mi título </h2>";
        document.getElementById("cssCode2").value = 
        ".mi-titulo::after { content: url('assets/images/warning.svg'); display: inline-block; width: 12px;height: 12px;}";


      //  FIN INTRODUCCIÓN DEL CODIGO CSS Y HTML POR DEFECTO

        // Function para actualizar HTML y CSS preview en iframe en tiempo real
        function updatePreview(sectionId) {
            const htmlCode = document.getElementById(`htmlCode${sectionId}`).value;
            const cssCode = document.getElementById(`cssCode${sectionId}`).value;
            const iframe = document.getElementById(`preview${sectionId}`);
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(`
                <style>${cssCode}</style>
                ${htmlCode}
            `);
            iframeDoc.close();
        }
  
        // Añade input event listeners para modificaciones en tiempo real
        document.getElementById("htmlCode1").addEventListener("input", () => updatePreview(1));
        document.getElementById("cssCode1").addEventListener("input", () => updatePreview(1));
		
		document.getElementById("htmlCode2").addEventListener("input", () => updatePreview(2));
        document.getElementById("cssCode2").addEventListener("input", () => updatePreview(2));

        // Repetir para otras sections si es preciso (por ejemplo, section2, section3, ...)
