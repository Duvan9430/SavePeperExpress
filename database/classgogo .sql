/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.1.34-MariaDB : Database - classgogo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`classgogo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `classgogo`;

/*Table structure for table `asignar_materia_docente` */

DROP TABLE IF EXISTS `asignar_materia_docente`;

CREATE TABLE `asignar_materia_docente` (
  `id_amd` int(11) NOT NULL AUTO_INCREMENT,
  `id_docente` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `id_periodo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_amd`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `asignar_materia_docente` */

insert  into `asignar_materia_docente`(`id_amd`,`id_docente`,`id_materia`,`id_periodo`) values 
(1,1,1,1);

/*Table structure for table `docentes` */

DROP TABLE IF EXISTS `docentes`;

CREATE TABLE `docentes` (
  `id_docente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_docen` varchar(50) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `correo` varchar(60) NOT NULL,
  PRIMARY KEY (`id_docente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `docentes` */

insert  into `docentes`(`id_docente`,`nombre_docen`,`edad`,`correo`) values 
(1,'Duban',19,'duban_tovarva@fet.edu.co'),
(2,'Pepazo',122,'pepazo69@fet.com'),
(3,'Leonardo Dicaprio',20,'dicarpito32@fet.edu.co'),
(4,'dada',13,'d@gmail.com');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `id_estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estu` varchar(100) NOT NULL,
  `edad` int(11) DEFAULT NULL,
  `correo` varchar(60) NOT NULL,
  PRIMARY KEY (`id_estudiante`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`id_estudiante`,`nombre_estu`,`edad`,`correo`) values 
(1,'Duban Ducho',21,'duban@gmail.com'),
(2,'Dubapaso',19,'dd@gmail.com');

/*Table structure for table `materia` */

DROP TABLE IF EXISTS `materia`;

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(100) NOT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `materia` */

insert  into `materia`(`id_materia`,`materia`) values 
(1,'Programacion'),
(2,'Fundamentos '),
(3,'Otra Materia'),
(4,'op');

/*Table structure for table `notas` */

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `id_notas` int(11) NOT NULL AUTO_INCREMENT,
  `id_docente` int(11) DEFAULT NULL,
  `id_estudiante` int(11) DEFAULT NULL,
  `id_materia` int(11) DEFAULT NULL,
  `id_periodo` int(11) DEFAULT NULL,
  `nota` float DEFAULT NULL,
  PRIMARY KEY (`id_notas`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `notas` */

insert  into `notas`(`id_notas`,`id_docente`,`id_estudiante`,`id_materia`,`id_periodo`,`nota`) values 
(1,1,1,1,1,5),
(2,2,1,1,1,6);

/*Table structure for table `periodo` */

DROP TABLE IF EXISTS `periodo`;

CREATE TABLE `periodo` (
  `id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo` varchar(100) NOT NULL,
  PRIMARY KEY (`id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `periodo` */

insert  into `periodo`(`id_periodo`,`periodo`) values 
(1,'10'),
(2,'11'),
(3,'asdasd');

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
