create table users
(
	"_id" int8 default nextval('"NoAddiction".users__id_seq'::regclass) not null
		constraint users_pkey
			primary key,
	username text not null,
	email text not null
);

