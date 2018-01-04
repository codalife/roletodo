--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.6.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: todo; Type: DATABASE; Schema: -; Owner: Anuar
--

CREATE DATABASE todo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE todo OWNER TO "Anuar";

\connect todo

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: task; Type: TABLE; Schema: public; Owner: Anuar
--

CREATE TABLE task (
    id integer NOT NULL,
    name text,
    description text,
    "userId" integer,
    "createdAt" date,
    "updatedAt" date
);


ALTER TABLE task OWNER TO "Anuar";

--
-- Name: task_id_seq; Type: SEQUENCE; Schema: public; Owner: Anuar
--

CREATE SEQUENCE task_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE task_id_seq OWNER TO "Anuar";

--
-- Name: task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Anuar
--

ALTER SEQUENCE task_id_seq OWNED BY task.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: Anuar
--

CREATE TABLE "user" (
    id integer NOT NULL,
    name text,
    role text
);


ALTER TABLE "user" OWNER TO "Anuar";

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: Anuar
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_id_seq OWNER TO "Anuar";

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Anuar
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- Name: task id; Type: DEFAULT; Schema: public; Owner: Anuar
--

ALTER TABLE ONLY task ALTER COLUMN id SET DEFAULT nextval('task_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: Anuar
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- Data for Name: task; Type: TABLE DATA; Schema: public; Owner: Anuar
--

COPY task (id, name, description, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Anuar
--

SELECT pg_catalog.setval('task_id_seq', 1, false);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: Anuar
--

COPY "user" (id, name, role) FROM stdin;
1	Anuar	employee
2	Rane	manager
\.


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Anuar
--

SELECT pg_catalog.setval('user_id_seq', 2, true);


--
-- Name: task task_pkey; Type: CONSTRAINT; Schema: public; Owner: Anuar
--

ALTER TABLE ONLY task
    ADD CONSTRAINT task_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: Anuar
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: task task_column4_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Anuar
--

ALTER TABLE ONLY task
    ADD CONSTRAINT task_column4_fkey FOREIGN KEY ("userId") REFERENCES "user"(id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

