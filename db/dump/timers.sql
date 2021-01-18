create table timers
(
	"_id" int4 default nextval('"NoAddiction".timers__id_seq'::regclass) not null,
	begin_date timestamp(6) not null,
	end_date timestamp(6),
	user_id int4 default nextval('"NoAddiction".timers_user_id_seq'::regclass) not null
		constraint timers_users__id_fk
			references users
				on update cascade on delete cascade,
	category_id int4
		constraint timers_categories__id_fk
			references categories
);

create unique index timers__id_uindex
	on timers ("_id");

create unique index timers_pk
	on timers ("_id");

alter table timers
	add constraint timers_pk
		primary key ("_id");

