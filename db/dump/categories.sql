create table categories
(
	"_id" int4 default nextval('"NoAddiction".categories__id_seq'::regclass) not null,
	name varchar(50) not null
);

create unique index categories__id_uindex
	on categories ("_id");

create unique index categories_pk
	on categories ("_id");

alter table categories
	add constraint categories_pk
		primary key ("_id");

