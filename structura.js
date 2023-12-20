$(document).ready(function() {
    var intentos = 0;
    var maximo = 3;
    var isLocked=false;
    $('#loginButton').click(function() {
        if(isLocked){
            return;}
        var user = $('#txtUsuario').val();
        var password = $('#txtContraseña').val();
        if (user === 'waremet' && password === 'Mijael1591') {
            window.location.href = 'ingreso.html'; }
        else {
            intentos++;
            if (intentos >= maximo) {
                // MUESTRA EL MODAL DE BLOQUEO
                $('#bloqueoModal').modal('show');
                isLocked=true;
                // Bloquea la página durante 1 minuto
                setTimeout(function() {
                    // ACA REINICIA EL INTENTO LUEGO DE 1 MIN
                    intentos = 0;
                    isLocked=false;
                    $('#bloqueoModal').modal('hide');
                }, 60000);
            } else {
                $("#errorModal").modal("show");
            }
        }
});
var countdownTimer;
        $('#bloqueoModal').on('show.bs.modal', function () {
            var countdown = 60;
            countdownTimer = setInterval(function() {
                var minutes = Math.floor(countdown / 60);
                var seconds = countdown % 60;

                $('#lockTimer').text(minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
                countdown--;
                if (countdown < 0) {
                    clearInterval(countdownTimer);
                }
            }, 1000);
        });
        $('#bloqueoModal').on('hidden.bs.modal', function () {
            clearInterval(countdownTimer);
        });
    });

  // NIEVEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  function createSnowflakes() {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.className = 'snowflake-container';

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
      snowflakesContainer.appendChild(snowflake);
    }
    document.body.appendChild(snowflakesContainer);
  }
  window.addEventListener('load', createSnowflakes);


  $(document).ready(function () {
    $("#cambiarContraseña").click(function () {
        // Obtener la contraseña actual ingresada por el usuario
        var contrasenaActual = $("#contrasena_actual").val();

        // Verificar la contraseña actual antes de permitir el cambio
        if (verificarContraseñaActual(contrasenaActual)) {
            // Obtener la nueva contraseña ingresada por el usuario
            var nuevaContrasena = $("#nueva_contrasena").val();

            // Realizar hash de la nueva contraseña utilizando SHA-256
            var hashedPassword = CryptoJS.SHA256(nuevaContrasena).toString(CryptoJS.enc.Hex);

            // Almacenar la contraseña hasheada en sessionStorage
            sessionStorage.setItem('contrasena', hashedPassword);

            $("#mensajeCambio").html('<div class="alert alert-success" role="alert">Contraseña cambiada con éxito.</div>');

            setTimeout(function () {
                window.location.replace('index.html');
            }, 2000);
        } else {
            $("#mensajeCambio").html('<div class="alert alert-danger" role="alert">La contraseña actual no es correcta.</div>');
        }
    });
    function verificarContraseñaActual(contrasena) {
        var contrasenaAlmacenada = "Mijael1591";
        return contrasena === contrasenaAlmacenada;
    }
});

  