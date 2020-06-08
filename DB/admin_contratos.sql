create table admin_contratos( 
id int not null auto_increment primary key,

#campo 1
num_reg int not null,
#/campo 1

#campo 2
tipo int(1) not null, #cada tipo de contrato tera um numero para identificação
#/campo 2

#campo 3
partes varchar(255),
#/campo 3

#campo 4
periodo int not null, #tempo restante de contrato em meses
data_ass date not null, #data de assinatura de contrato
data_term date, #data de termino automatico, pode ser omitida caso seja por execução de atividades
#/campo 4

#campo 5
objetivo varchar(1000),
#/campo 5


#campo 7
estado int(1) not null, #cada estado tera um numero para identificação
motivo varchar(255) #caso haja motivo para paralisação
#/campo 7

);