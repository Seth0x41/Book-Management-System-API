-- SCHEMA: bms

-- DROP SCHEMA IF EXISTS bms ;

CREATE SCHEMA IF NOT EXISTS bms
    AUTHORIZATION postgres;


-- Table: bms.store

-- DROP TABLE IF EXISTS bms.store;

CREATE TABLE IF NOT EXISTS bms.store
(
    store_id integer NOT NULL DEFAULT nextval('bms.store_store_id_seq'::regclass),
    store_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    store_code character varying(5) COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp without time zone NOT NULL,
    created_by character varying(50) COLLATE pg_catalog."default" NOT NULL,
    store_address character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT store_pkey PRIMARY KEY (store_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS bms.store
    OWNER to postgres;

	


CREATE TABLE bms.store(

	store_id serial NOT NULL,
	store_name varchar(100) NOT NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,

	CONSTRAINT store_pkey PRIMARY KEY (store_id)
	
)