create table admin_editais( 
id int not null auto_increment primary key,

#campo 1
num_reg int not null,
#/campo 1

#campo 2
nome_doc varchar(64),
#/campo 2

#campo 5
objetivo varchar(1000),
#/campo 5

#campo 7
estado int(1) not null, #cada estado tera um numero para identificação
motivo varchar(255) #caso haja motivo para paralisação
#/campo 7

);