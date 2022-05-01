create table student(
	id Integer not null,
	username character varying not null,
	password character varying not null,
	primary key (id)
);

create table teacher(
	id Integer not null,
	username character varying not null,
	password character varying not null,
	primary key (id)
);

create table test(
	UID character varying not null,
	accesscode Integer not null,
	avaible boolean not null,
	img character varying,
	title character varying not null,
	description character varying,
	id Integer not null,
	primary key(UID),
	constraint pk_teacher foreign key(id) references teacher(id)
);

create table question(
	UID character varying not null,
	description character varying not null,
	percentage Integer not null,
	uidT character varying not null,
	primary key(UID),
	constraint fk_test foreign key(uidT) references test(UID)
);

create table answer(
	UID character varying not null,
	isCorrect boolean not null,
	description character varying not null,
	uidQ character varying not null,
	primary key(UID),
	constraint fk_question foreign key(uidQ) references question (UID)
);

insert into teacher values(1, 'TRIANA', '12345');
insert into teacher values(2, 'REYES', 'rpc');
insert into teacher values(3, 'JUANA', '345');
insert into student values(4, 'ALEJO', '23');
insert into student values(5, 'GABRIEL', '45');
