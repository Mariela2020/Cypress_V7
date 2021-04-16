Feature: Iniciar Sesion HomePage

    Como usuario quiero iniciar sesión con credenciales válida

    Scenario: Ingresar a la página principal de Toctoc e Iniciar sesión
        Given El usuario esta en la página de Toctoc y Hace click sobre el mensaje desplegado
          And Hacer click al botón Entrar
        When Ingresa los credenciales valida del usuario
        Then El sistema da la bienvenida al usuario

        