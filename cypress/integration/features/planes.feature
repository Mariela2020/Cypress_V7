Feature: Catalogo de Planes
 
  Como usuario quiero visualizar los planes para contratar un servicio.

  Scenario: Ingresar al catalogo de planes en la página Gestion Corredor
    Given El usuario se encuentra en la página de Gestion Corredor
    And Hace click sobre el botón Ver Planes
    And Visualiza la información del plan seleccionado y hace click al botón Contratar
    When Registrar Usuario
    And Llena los formularios con los campos solicitados
    And Tilda el checkbox Declaro conocer y aceptar los Términos y condiciones de TOCTOC del Plan
    And Darle click al boton Enviar
    Then Se debe redireccionar a la página Detalle del contrato del plan a contratar