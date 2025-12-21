// ======================================================================
// POLÍTICA DE PRIVACIDAD – Caridad Fresneda Psicología
// Cumple RGPD + LSSI-CE + requisitos sanitarios
// ======================================================================

import "./Legal.css";

export default function PoliticaPrivacidad() {
  return (
    <section className="legal-page">
      <h1>Política de Privacidad</h1>

      <p>
        En cumplimiento del Reglamento General de Protección de Datos (RGPD)
        y de la Ley Orgánica 3/2018 (LOPDGDD), se informa de que los datos
        personales facilitados a través del presente sitio web serán tratados
        por <strong>Caridad Fresneda Psicología</strong>, con domicilio en{" "}
        <strong>C/ Mercedes de Arteaga, 13 local 4, Madrid</strong>.
      </p>

      <h2>1. Datos que se recopilan</h2>
      <p>
        A través del formulario de contacto se recogen los siguientes datos:
      </p>
      <ul>
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Mensaje enviado por la persona usuaria</li>
      </ul>

      <h2>2. Finalidad del tratamiento</h2>
      <p>Los datos se utilizan exclusivamente para:</p>
      <ul>
        <li>Responder solicitudes o consultas enviadas mediante el formulario.</li>
        <li>Contactar de forma individual con el usuario que envía la consulta.</li>
      </ul>
      <p>
        <strong>No se realizan perfiles automatizados ni se envían comunicaciones comerciales.</strong>
      </p>

      <h2>3. Legitimación</h2>
      <p>
        La base legal para el tratamiento es el consentimiento expreso otorgado por la persona usuaria.
      </p>

      <h2>4. Destinatarios</h2>
      <p>
        Los datos no se ceden a terceros salvo obligación legal.  
        El alojamiento y correo electrónico pueden estar gestionados por servicios externos
        con las garantías adecuadas de seguridad.
      </p>

      <h2>5. Derechos</h2>
      <p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento mediante:</p>
      <ul>
        <li>Email: <a href="mailto:caridadfresneda@cop.es">caridadfresneda@cop.es</a></li>
        <li>Dirección postal: C/ Mercedes de Arteaga, 13 local 4, Madrid</li>
      </ul>

      <h2>6. Conservación de los datos</h2>
      <p>
        Los datos se conservarán únicamente el tiempo necesario para gestionar la consulta.
      </p>

      <h2>7. Medidas de seguridad</h2>
      <p>
        La Titular aplica medidas técnicas y organizativas adecuadas para garantizar la seguridad
        de los datos y evitar accesos no autorizados.
      </p>

      <h2>8. Google Analytics</h2>
      <p>
        Este sitio utiliza Google Analytics para analizar estadísticas de uso. El servicio puede
        recopilar datos anonimizados como la IP parcialmente enmascarada, tipo de dispositivo,
        páginas visitadas y duración de la sesión.
      </p>

      <p>
        Puede obtener más información en la Política de Cookies.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para cualquier consulta sobre privacidad, puede escribir a:{" "}
        <a href="mailto:caridadfresneda@cop.es">caridadfresneda@cop.es</a>
      </p>
    </section>
  );
}
