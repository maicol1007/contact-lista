const id = document.getElementById("id");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const ciudad = document.getElementById("ciudad");
const direccion = document.getElementById("direccion");

const btnsave = document.getElementById("agregar");
const $divElements = document.getElementById("divElements");

btnsave.addEventListener("click", () => {

  if (id.value == "") {
    alert("debe poner el campo id");
    return;
  }
  if (nombre.value == "") {
    alert("debe poner el campo nombre");
    return;
  }
  if (apellido.value == "") {
    alert("debe poner el campo apelllido");
    return;
  }
  if (telefono.value == "") {
    alert("debe poner el campo telefono");
    return;
  }
  if (ciudad.value == "") {
    alert("debe poner el campo ciudad");
    return;
  }
  if (direccion.value == "") {
    alert("debe poner el campo direccion");
    return;
  }

  const objeto = addObject(id.value,nombre.value,apellido.value,telefono.value,ciudad.value,direccion.value);
  imprimir(objeto);
});

const addObject = (id, nombre, apellido, telefono, ciudad, direccion) => {
  let persona = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ciudad: ciudad,
    direccion: direccion,
  };
  return persona;
};

const imprimir =(objeto) => {

  let html = ` <tr>
            <th scope="row">${objeto.id}</th>
            <td>${objeto.nombre}</td>
            <td>${objeto.apellido}</td>
            <td>${objeto.telefono}</td>
            <td>${objeto.ciudad}</td>
            <td>${objeto.direccion}</td>
            <td><button class='btn btn-danger' onClick=eliminar(${objeto.id})>Eliminar</button></td>
          </tr>`;
  var hilera = document.createElement("tr");
  hilera.id = objeto.id;
  hilera.innerHTML = html;
  $divElements.appendChild(hilera);
};

const eliminar = (id) =>{
  let element = document.getElementById(id);
  element.remove();
};