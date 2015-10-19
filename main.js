var num = prompt("Introduzca un número, por favor.");

window.alert("Calculando la tabla de multiplicar del "+num+" .......");

document.open();
document.write("<table>" +
    "<thead>Tabla de Multiplicar del "+ num +"</thead>");

    for (var i = 1 ; i <= 50 ; i++ ) {

        var res = num * i;
        document.write("<tr>" +
            "<td>"+num+"</td>" +
            "<td>x</td>" +
            "<td>"+i+"</td>" +
            "<td>=</td>" +
            "<td>"+res+"</td>" +
            "</tr>");

    }

document.write("</table>");
document.close();