nomeCompleto = "Alexson Luiz Theobald"
apelido = "Alex"
idade = 31
dataNascimento = "24/04/1989" 
localNascimento = "Cerro Largo" 
altura = 1.78
trabalhando = true

apresentacao = "Meu nome é " + nomeCompleto + " (sou conhecido[a] como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."
console.log (apresentacao)