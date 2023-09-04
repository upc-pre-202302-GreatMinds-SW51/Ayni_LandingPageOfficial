
document.addEventListener("DOMContentLoaded", function() {
    // Llamamos a la función con el segmento por defecto al cargar la página
    changeContent("agricultor"); // Cambia a "agricultor" si deseas mostrar contenido por defecto para agricultores
});

function changeContent(segment){
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    if (segment === "comerciante"){
        const func_1 = `
        <span><strong>Catálogo de Productos</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-1c.svg" alt="">
        </div>
        <span><small>Te mostramos y proporcionamos informacion sobre una gran variedad de productos de calidad.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Muestra una amplia variedad de productos agrícolas disponibles.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Proporciona descripciones detalladas, fotos y especificaciones.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Proporciona descripciones detalladas, fotos y especificaciones.</li>
        </ul>
        <a href="#" class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Inicia ahora</a>
        `;
        const func_2 = `
        <span><strong>Seguimiento de Pedidos</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-2c.svg" alt="">
        </div>
        <span><small>Informacion a tiempo real del estado y ubicacion de su pedido.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Brinda actualizaciones en tiempo real sobre el estado de los pedidos.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Notifica sobre la preparación, envío y entrega de los productos.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Facilita la coordinación logística y evita retrasos en las operaciones.</li>
        </ul>
        <a href="#" class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Inicia ahora</a>
        `;
        const func_3 = `
        <span><strong>Calificaciones y Reseñas</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-3c.svg" alt="">
        </div>
        <span><small>Califica y ayuda en nuestra increible comunidad.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Permite a los comerciantes calificar y dejar comentarios sobre los productos comprados.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Ayuda a otros comerciantes a tomar decisiones informadas.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Fomenta la transparencia y la confianza en la calidad de los productos.</li>
        </ul>
        <a href="#" class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Inicia ahora</a>
        `;

        card1.innerHTML = func_1;
        card2.innerHTML = func_2;
        card3.innerHTML = func_3;
    } else if (segment === "agricultor"){
        const func_1 = `
        <span><strong>Planificador de cultivos</strong></span>
              <div class="ui-component-card--pricing-price">
                <img src="img/func-1.svg" alt="">
              </div>
              <span><small>Permite organizar tus siembras, cosechas y actividades agrícolas de manera eficiente, maximizando tus resultados.</small></span>
              <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
                <li class="ui-component-list--item ui-component-list--item-check">Crea calendarios de siembra y cosecha personalizados.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Recomendaciones basadas en datos climáticos y de suelo.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Recordatorios para tareas importantes, como riego y fertilización.</li>
              </ul>
              <a href="#" class="ui-component-button ui-component-button-big ui-component-button-secondary" role="link" aria-label="#">Inicia ahora</a>
        `;
        const func_2 = `
        <span><strong>Seguimiento de Plagas y Enfermedades</strong></span>
        <div class="ui-component-card--pricing-price">
          <img src="img/func-2.svg" alt="">
        </div>
        <span><small>Te brinda información y consejos para mantener tus cosechas saludables.</small></span>
        <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
          <li class="ui-component-list--item ui-component-list--item-check">Base de datos de plagas y enfermedades comunes.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Consejos de prevención y control para mantener cultivos saludables.</li>
          <li class="ui-component-list--item ui-component-list--item-check">Registrar observaciones y síntomas para un diagnóstico preciso.</li>
        </ul>
        <a href="#" class="ui-component-button ui-component-button-big ui-component-button-primary" role="link" aria-label="#">Inicia ahora</a>
        `;
        const func_3 = `
        <span><strong>Registro de Insumos</strong></span>
              <div class="ui-component-card--pricing-price">
                <img src="img/func-3.svg" alt="">
              </div>
              <span><small>Nuestra herramienta te ayuda a gestionar tus recursos y a tomar decisiones informadas.</small></span>
              <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
                <li class="ui-component-list--item ui-component-list--item-check">Almacena información detallada sobre cada insumo utilizado.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Lleva un seguimiento de las cantidades, fechas y proveedores.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Calcula los costos totales de insumos por cultivo y temporada.</li>
              </ul>
              <a href="#" class="ui-component-button ui-component-button-big ui-component-button-secondary" role="link" aria-label="#">Inicia ahora</a>
        
        `
        card1.innerHTML = func_1;
        card2.innerHTML = func_2;
        card3.innerHTML = func_3;
    }
}