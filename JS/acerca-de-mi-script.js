document.addEventListener("DOMContentLoaded", function () {

  function cardsContent() {
    const cards = `
    <!--FORMACIÓN ACADÉMICA-->
    <div class="cards-container">
    <div class="card text-end" style="width: 18rem;" id="card1">
    <img src="../Images/maxi-formacion-academica.jpeg"" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Formación Académica</h5>
      <p class="card-text">Soy estudiante avanzado de la Licenciatura en Archivología en la Universidad de la República en Uruguay. Actualmente me encuentro escribiendo el Trabajo Final de Grado</p>
      <a href="https://fic.edu.uy/ensenanza/grado/lic-en-archivologia" class="btn btn-dark">¿Dónde me formé?</a>
    </div>
  </div>    

  <!--FORMACIÓN EN DESARROLLO WEB-->
  <div class="card text-end" style="width: 18rem;">
    <img src="../Images/maxi-programacion.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Formación en Desarrollo Web</h5>
      <p class="card-text">Me encuentro en una formación continua en materia de Desarrollo Web. Soy estudiante de Jóvenes a Programar edición 2023 y actualmente me encuentro en la Fase 2 del Nivel 1.</p>
      <a href="https://jovenesaprogramar.edu.uy/" class="btn btn-dark">Jóvenes a Programar</a>
    </div>
  </div>  

  <!--BIOGRAFÍA-->
  <div class="card text-end" style="width: 18rem;" id="card3">
    <img src="../Images/maxi-biografia.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Biografía</h5>
      <p class="card-text">Nacido el 28 de febrero de 1993. Soy un gran apasionado por la programación, los tatuajes y la archivística. Hincha del Club Nacional de Football y del West Ham United.</p>
      <a href="https://uy.linkedin.com/in/maximiliano-bertta-borges" class="btn btn-dark">LinkedIn</a>
    </div>
  </div>  
  </div>  
    `
    ;

    const cardsOnPage = document.getElementById("cardFooter");

    cardsOnPage.innerHTML += cards;
  };

  cardsContent();
})