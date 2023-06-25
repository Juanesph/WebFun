//Invertir una cadena
const start = performance.now();

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
let reversed = "";
for (let i = story.length - 1; i >= 0; i--) {
  reversed += story[i];
}

console.log(`This took ${performance.now() - start} milliseconds to run`);
