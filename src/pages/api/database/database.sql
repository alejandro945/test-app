create table student(
	idS Integer not null,
	usernameS character varying not null,
	passwordS character varying not null,
	codeR Integer not null,
	primary key (idS)
);

create table teacher(
	idT Integer not null,
	userNameT character varying not null,
	passwordT character varying not null,
	primary key (idT)
);

create table test(
	uidT character varying not null,
	accessCode Integer not null,
	avaible boolean not null,
	title character varying not null,
	description character varying,
	idT Integer not null,
	primary key(uidT),
	constraint pk_teacher foreign key(idT) references teacher(idT)
);

create table question(
	uidQ character varying not null,
	description character varying not null,
	percentage Integer not null,
	uidT character varying not null,
	primary key(uidQ),
	constraint fk_test foreign key(uidT) references test(uidT)
);

create table answer(
	uidA character varying not null,
	isCorrect boolean not null,
	description character varying not null,
	uidQ character varying not null,
	primary key(uidA),
	constraint fk_question foreign key(uidQ) references question (uidQ)
);