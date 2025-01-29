const users = [
  {
    nombre: "admin",
    password: "admin",
    email: "admin@email.com",
    status: "active"
  },
  {
    nombre: "user",
    password: "user",
    email: "user@email.com",
    status: "active",
    age: 32
  }
]

const productos = [
  {
    id: 1,
    nombre: "pan",
    precio: "2$",
    stock: 20
  },
  {
    id: 2,
    nombre: "pasteles",
    precio: "8$",
    stock: 5
  }
]

createTable(productos)


function createTable(tableInfo){
  const table = document.createElement("table")
const thead = document.createElement("thead")
table.appendChild(thead)
const tr = document.createElement("tr")
thead.appendChild(tr)
//donde_quiero_inyectar.appendChild(que_quiero_inyectar)
const claves = Object.keys(tableInfo[0])
for(let i=0; i < claves.length; i++){
  console.log(claves[i])
  const td = document.createElement("td")
  td.innerText = claves[i]
  tr.appendChild(td)
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(let i=0; i < tableInfo.length; i++){
  console.log(users[i])
  const tr = document.createElement("tr")
  for(let j=0; j < claves.length; j++){
    const td = document.createElement("td")
    const clave = claves[j]
    td.innerText = tableInfo[i][clave]
    tr.appendChild(td)
  }
  tbody.appendChild(tr)
}
document.body.appendChild(table)
  
}
