# Estructura HTML

Edita el index.html para crear una estructura como la del ejemplo:

![ejemplo](./ejemplo.JPG)

Requisitos:
* Los labels del formulario deben estar asociados mediante la propiedad *for*.
* El nombre, el email y la fecha de nacimiento son campos obligatorios.

Se tendrá en cuenta: 
* Las etiquetas usadas
* La estructura

No se tendrá en cuenta:
* El contenido de los textos
* El contenido de las imágenes
* La estética en general


Recuerda que es un ejercicio de HTML, por lo que debes olvidar la estética final.

Si quieres, puedes añadir el CSS correspondiente a modo de práctica, pero no se valorará.

El resultado final debe funcionar correctamente ejecutándolo con live server y no dar ningún error en el [Validador de HTML de la W3](https://validator.w3.org/nu/#textarea)




function isbalanced(num) {
  const middleIndex = (num.length - 1) / 2;
  let leftSum = 0;
  let rightSum = 0;

  for (let leftIndex = 0; leftIndex < middleIndex; leftIndex++) {
    const currentNum = +num[leftIndex];
    leftSum += currentNum;
  }
  console.log(leftSum);

  for (
    let rightindex = middleIndex + 1;
    rightindex < num.length;
    rightindex++
  ) {
    const currentNum = +num[rightindex];
    rightSum += currentNum;
  }
  return leftSum === rightSum;
}

console.log(isbalanced('926458784'));
