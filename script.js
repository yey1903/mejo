// 📝 Mensaje a mostrar con efecto máquina de escribir
const mensajeCompleto = `Querida amiga,

Gracias por estar siempre conmigo, en los buenos y malos momentos.
Tu amistad es un regalo que valoro cada día.

Eres luz, alegría y amor. 💖

Con todo mi cariño,
Tu mejor amigo 😊`;

const mensajeElemento = document.getElementById('mensaje');
let indice = 0;

function escribirMensaje() {
  if (indice < mensajeCompleto.length) {
    mensajeElemento.textContent += mensajeCompleto.charAt(indice);
    indice++;
    setTimeout(escribirMensaje, 45); // velocidad de escritura
  } else {
    // Mostrar botón de regalo después de escribir todo
    document.getElementById('boton').style.display = 'inline-block';
    gsap.from("#boton", { scale: 0, duration: 0.6, ease: "back.out(1.7)" });
  }
}

// 🎵 Control de música (requiere clic del usuario)
const playAudioBtn = document.getElementById('playAudio');
const musica = document.getElementById('musica');

playAudioBtn.addEventListener('click', () => {
  musica.play().then(() => {
    escribirMensaje(); // Comenzar el mensaje cuando el audio inicie
    playAudioBtn.style.display = 'none';
  }).catch(err => {
    alert("El audio no pudo reproducirse automáticamente. Intenta tocar de nuevo.");
  });
});

// 🎁 Mostrar sorpresa con efecto
const boton = document.getElementById('boton');
const sorpresa = document.getElementById('sorpresa');

boton.addEventListener('click', () => {
  sorpresa.classList.add('mostrar');
  gsap.from(".gran-mensaje", { opacity: 0, y: -30, duration: 0.8 });
  gsap.from(".sorpresa img", { scale: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });

  // 🔊 Sonido extra opcional (puedes agregar un archivo sorpresa.mp3)
  const sonidoSorpresa = new Audio("sorpresa.mp3");
  sonidoSorpresa.play().catch(() => {}); // por si no se carga

  boton.style.display = 'none'; // ocultar botón luego del clic
});



