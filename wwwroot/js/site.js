<script>
    // Get the form element
    var form = document.getElementById('formCadastro');

    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

    // Get the form data
    var data = new FormData(form);

    // Make an AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/CadastroController/Create', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
        // The form submission was successful
        // Do something here, like showing a success message or redirecting to another page
    } else {
        // There was an error with the form submission
        // Do something here, like showing an error message
    }
      };
    xhr.send(data);
    });
</script>