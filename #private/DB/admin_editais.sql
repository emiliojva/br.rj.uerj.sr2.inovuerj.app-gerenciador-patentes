create table admin_editais( 
id int not null auto_increment primary key,

#campo 1
num_reg int not null,
#/campo 1

#campo 2
nome_ed varchar(64),
#/campo 2

#campo 3
objetivo varchar(1000),
#/campo 3

#campo 4
partes varchar(255),
#/campo 4

#campo 5
orcamento int,
#/campo 5

#campo 6
cronograma varchar(1000),
#/campo 6

#campo 7
comite varchar(255),
#/campo 7

#campo 8
estado int(1) not null, #cada estado tera um numero para identificação
motivo varchar(255) #caso haja motivo para paralisação
#/campo 8

);