/*
3)      Os alunos da turma de Front-end estão estudando em horários diferentes:

a) Se o horário for o matutino, mostrar a mensagem "Bom Dia!".
b) Se o horário for vespertino, mostrar "Boa Tarde!".
c) Se o horário for noturno, mostrar "Boa Noite!".
d) Se não houver informação, mostrar  "Valor Inválido!".
*/

function horario(turno){
  switch (turno){
    case "matutino":
      return "Bom Dia!";
      break;
    case "vespertino":
      return "Boa Tarde!";
      break;
    case "noturno":
      return "Boa Noite!";
      break;
    default: 
      return "Valor Inválido!";
  }
}

console.log(horario("matutino"));
console.log(horario("vespertino"));
console.log(horario("noturno"));
console.log(horario("teste"));