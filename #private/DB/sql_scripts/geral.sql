create table geral( 
id int not null auto_increment primary key,

#campo 1
num_reg int not null,
#/campo 1

#campo 2
partes varchar(255),
#/campo 2

#campo 3
estado int(1) not null, #cada estado tera um numero para identificação
motivo varchar(255), #caso haja motivo para paralisação
#/campo 3

#campo 4
objetivo varchar(1000)
#/campo 4

);