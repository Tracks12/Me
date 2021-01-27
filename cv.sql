
-- CV DataBase
-- Florian Cardinal

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


-- TABLE & CONTENT
-- --------------------------------------------------------

CREATE TABLE `contacts`(
	`idContacts` int(64) NOT NULL,
	`time` timestamp NOT NULL DEFAULT current_timestamp(),
	`address` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`name` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`fname` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`mail` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`phone` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	`msg` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

CREATE TABLE `experiences`(
	`idExperiences` int(8) NOT NULL,
	`entity` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`job` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`period` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `experiences`(`idExperiences`, `entity`, `job`, `period`, `description`) VALUES
	(
		1,
		"Indépendant",
		"développeur web",
		"juil. 2017 - sept. 2018",
		"France<br />"
	), (
		2,
		"Conseil Départemental HG",
		"stagiaire développeur web",
		"mai. 2019 - juin. 2019",
		"France<br /><br />Création d’un formulaire d’entretien professionnel<br />Mettre à jour et Développer l’infrastructure intranet de l’organisation (Portail Web)<br />Technologie: Symfony"
	), (
		3,
		"WHYNOGROUP EU",
		"développeur web front end",
		"fév. 2019 - juin. 2020",
		"France<br /><br />Conception, Réalisation et Déploiement d'IHM Responsive adapter aux API de Whynogroup<br />Résolutions de bugs graphiques sur les pages web"
	), (
		4,
		"ORPALIS",
		"développeur web junior",
		"sep. 2020 - aujourd'hui",
		'France<br /><br />Maintenance et Développement des outils du projet <a target="_blank" href="https://avepdf.com/en">AvePDF</a><br /><br />Technologie: React, .NET Core'
	);


-- --------------------------------------------------------

CREATE TABLE `formations`(
	`idFormations` int(8) NOT NULL,
	`date` int(8) NOT NULL,
	`entity` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`description` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`link` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `formations`(`idFormations`, `date`, `entity`, `title`, `description`, `link`) VALUES
	(
		1,
		2016,
		"Codecademy.com",
		"Formation online<br />Programer & Developer",
		"HTML5/CSS3, JavaScript, JQuery, Python, Ruby<br />Responsive Design, Deploy a Website",
		"https://www.codecademy.com/profiles/Tracks12"
	), (
		2,
		2017,
		"Lycée GT Déodat de Séverac",
		"Baccalauréat STI2D<br /><br />",
		"Système Informatique et Numérique<br />Mention Assez Bien",
		"0"
	), (
		3,
		2017,
		"Udemy.com",
		"Formation online<br />Web Developer",
		"HTML5/CSS3, JavaScript, JQuery, Php7, MySQL<br />Responsive Design",
		"https://www.udemy.com/certificate/UC-8XQUXMMT/"
	), (
		4,
		2017,
		"Udemy.com",
		"Formation online<br />Web Designer",
		"Illustrator, PhotoShop, XDesign<br />Web Design",
		"https://www.udemy.com/certificate/UC-GMXYYE9B/"
	), (
		5,
		2020,
		"3CX Basic Certified Engineer v16",
		"Formation online<br />Basic Telecom Engineer",
		"Formation basique sur les outils 3CX<br />Installation, Configuration et Maintenance serveur",
		"https://customer.3cx.com/prm/documents/certification.ashx?c=f2oFUTH2rj"
	), (
		6,
		2020,
		"Lycée GT Déodat de Séverac",
		"Brevet Technicien Supérieur<br /><br />",
		"Systèmes Numériques<br />Mention Bien",
		"0"
	), (
		7,
		2020,
		"IPI Institut Poly Informatique",
		"Licence Professionnelle Concepteur Développeur d'application Web & Mobile",
		"Développement, Conception & Gestion de projets<br />En cours...",
		"0"
	);


-- --------------------------------------------------------

CREATE TABLE `network`(
	`idNetwork` int(8) NOT NULL,
	`name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`link` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `network`(`idNetwork`, `name`, `title`, `link`) VALUES
	(
		1,
		"github",
		"Mon GitHub",
		"https://github.com/Tracks12"
	), (
		2,
		"linkedin",
		"Mon LinkedIn",
		"https://www.linkedin.com/in/florian-cardinal-13317b150"
	);


-- --------------------------------------------------------

CREATE TABLE `skills`(
	`idSkills` int(4) NOT NULL,
	`id` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`title` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	`status` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `skills`(`idSkills`, `id`, `title`, `status`) VALUES
	(
		1,
		"html",
		"HTML5",
		.98
	), (
		2,
		"js",
		"JavaScript",
		.9
	), (
		3,
		"bootstrap",
		"BootStrap",
		.9
	), (
		4,
		"mysql",
		"MySQL",
		.8
	), (
		5,
		"css",
		"CSS3",
		.95
	), (
		6,
		"jquery",
		"JQuery",
		.9
	), (
		7,
		"php",
		"PHP7",
		.85
	), (
		8,
		"python",
		"Python2/3",
		.75
	);


-- KEY PROPERTIES
-- --------------------------------------------------------

ALTER TABLE `contacts`
	ADD PRIMARY KEY (`idContacts`);

ALTER TABLE `experiences`
	ADD PRIMARY KEY (`idExperiences`);

ALTER TABLE `formations`
	ADD PRIMARY KEY (`idFormations`);

ALTER TABLE `network`
	ADD PRIMARY KEY (`idNetwork`),
	ADD UNIQUE KEY `name`(`name`),
	ADD UNIQUE KEY `title`(`title`),
	ADD UNIQUE KEY `link`(`link`);

ALTER TABLE `skills`
	ADD PRIMARY KEY (`idSkills`),
	ADD UNIQUE KEY `id`(`id`),
	ADD UNIQUE KEY `title`(`title`);


-- SETTINGS AI & STARTING
-- --------------------------------------------------------

ALTER TABLE `contacts`
	MODIFY `idContacts` int(64) NOT NULL AUTO_INCREMENT;

ALTER TABLE `experiences`
	MODIFY `idExperiences` int(8) NOT NULL AUTO_INCREMENT,
	AUTO_INCREMENT=5;

ALTER TABLE `formations`
	MODIFY `idFormations` int(8) NOT NULL AUTO_INCREMENT,
	AUTO_INCREMENT=8;

ALTER TABLE `network`
	MODIFY `idNetwork` int(8) NOT NULL AUTO_INCREMENT,
	AUTO_INCREMENT=3;

ALTER TABLE `skills`
	MODIFY `idSkills` int(4) NOT NULL AUTO_INCREMENT,
	AUTO_INCREMENT=9;


COMMIT;

-- END
