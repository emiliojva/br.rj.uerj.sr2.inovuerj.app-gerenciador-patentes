-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inovuerj_processos
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(245) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `regiao_id` int NOT NULL,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`,`regiao_id`),
  UNIQUE KEY `uq_descricao` (`name`,`regiao_id`),
  KEY `fk_MunicipiosPorRegiao_regiao1_idx` (`regiao_id`),
  CONSTRAINT `fk_MunicipiosPorRegiao_regiao1` FOREIGN KEY (`regiao_id`) REFERENCES `cities_regions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Itatiaia',2,NULL,'2019-09-27 20:50:01',NULL,1),(2,'Resende',2,NULL,'2019-09-27 20:50:01',NULL,1),(3,'Porto Real',2,NULL,'2019-09-27 20:50:01',NULL,1),(4,'Quatis',2,NULL,'2019-09-27 20:50:01',NULL,1),(5,'Volta Redonda',2,NULL,'2019-09-27 20:50:01',NULL,1),(6,'Barra Mansa',2,NULL,'2019-09-27 20:50:01',NULL,1),(7,'Valença',2,NULL,'2019-09-27 20:50:01',NULL,1),(8,'Barra do Piraí',2,NULL,'2019-09-27 20:50:01',NULL,1),(9,'Pinheiral',2,NULL,'2019-09-27 20:50:01',NULL,1),(10,'Piraí',2,NULL,'2019-09-27 20:50:01',NULL,1),(11,'Rio Claro',2,NULL,'2019-09-27 20:50:01',NULL,1),(12,'Rio das Flores',2,NULL,'2019-09-27 20:50:01',NULL,1),(13,'Paraíba do Sul',3,NULL,'2019-09-27 20:50:01',NULL,1),(14,'Comendador Levy Gasparian',3,NULL,'2019-09-27 20:50:01',NULL,1),(15,'Três Rios',3,NULL,'2019-09-27 20:50:01',NULL,1),(16,'Sapucaia',3,NULL,'2019-09-27 20:50:01',NULL,1),(17,'Areal',3,NULL,'2019-09-27 20:50:01',NULL,1),(18,'Paty do Alferes',3,NULL,'2019-09-27 20:50:01',NULL,1),(19,'Vassouras',3,NULL,'2019-09-27 20:50:01',NULL,1),(20,'Mendes',3,NULL,'2019-09-27 20:50:01',NULL,1),(21,'Engº Paulo de Frontin',3,NULL,'2019-09-27 20:50:01',NULL,1),(22,'Miguel Pereira',3,NULL,'2019-09-27 20:50:01',NULL,1),(23,'Angra dos Reis',8,NULL,'2019-09-27 20:50:01',NULL,1),(24,'Mangaratiba',8,NULL,'2019-09-27 20:50:01',NULL,1),(25,'Parati',8,NULL,'2019-09-27 20:50:01',NULL,1),(26,'Petrópolis',1,NULL,'2019-09-27 20:50:01',NULL,1),(27,'Paracambi',1,NULL,'2019-09-27 20:50:01',NULL,1),(28,'Japeri',1,NULL,'2019-09-27 20:50:01',NULL,1),(29,'Itaguaí',1,NULL,'2019-09-27 20:50:01',NULL,1),(30,'Seropédica',1,NULL,'2019-09-27 20:50:01',NULL,1),(31,'Queimados',1,NULL,'2019-09-27 20:50:01',NULL,1),(32,'Nova Iguaçu',1,NULL,'2019-09-27 20:50:01',NULL,1),(33,'Mesquita',1,NULL,'2019-09-27 20:50:01',NULL,1),(34,'Nilópolis',1,NULL,'2019-09-27 20:50:01',NULL,1),(35,'Rio de Janeiro',1,NULL,'2019-09-27 20:50:01',NULL,1),(36,'São João de Meriti',1,NULL,'2019-09-27 20:50:01',NULL,1),(37,'Belford Roxo',1,NULL,'2019-09-27 20:50:01',NULL,1),(38,'Duque de Caxias',1,NULL,'2019-09-27 20:50:01',NULL,1),(39,'Magé',1,NULL,'2019-09-27 20:50:01',NULL,1),(40,'Guapimirim',1,NULL,'2019-09-27 20:50:01',NULL,1),(41,'Cachoeiras de Macacu',1,NULL,'2019-09-27 20:50:01',NULL,1),(42,'Itaboraí',1,NULL,'2019-09-27 20:50:01',NULL,1),(43,'São Gonçalo',1,NULL,'2019-09-27 20:50:01',NULL,1),(44,'Niterói',1,NULL,'2019-09-27 20:50:01',NULL,1),(45,'Maricá',1,NULL,'2019-09-27 20:50:01',NULL,1),(46,'Tanguá',1,NULL,'2019-09-27 20:50:01',NULL,1),(47,'Rio Bonito',1,NULL,'2019-09-27 20:50:01',NULL,1),(48,'Teresópolis',4,NULL,'2019-09-27 20:50:01',NULL,1),(49,'São José do Vale do Rio Preto',4,NULL,'2019-09-27 20:50:01',NULL,1),(50,'Sumidouro',4,NULL,'2019-09-27 20:50:01',NULL,1),(51,'Carmo',4,NULL,'2019-09-27 20:50:01',NULL,1),(52,'Duas Barras',4,NULL,'2019-09-27 20:50:01',NULL,1),(53,'Nova Friburgo',4,NULL,'2019-09-27 20:50:01',NULL,1),(54,'Bom Jardim',4,NULL,'2019-09-27 20:50:01',NULL,1),(55,'Cordeiro',4,NULL,'2019-09-27 20:50:01',NULL,1),(56,'Cantagalo',4,NULL,'2019-09-27 20:50:01',NULL,1),(57,'Macuco',4,NULL,'2019-09-27 20:50:01',NULL,1),(58,'Trajano de Morais',4,NULL,'2019-09-27 20:50:01',NULL,1),(59,'São Sebastião do Alto',4,NULL,'2019-09-27 20:50:01',NULL,1),(60,'Santa Maria Madalena',4,NULL,'2019-09-27 20:50:01',NULL,1),(61,'Macaé',6,NULL,'2019-09-27 20:50:01',NULL,1),(62,'Conceição de Macabu',6,NULL,'2019-09-27 20:50:01',NULL,1),(63,'Carapebus',6,NULL,'2019-09-27 20:50:01',NULL,1),(64,'Quissamã',6,NULL,'2019-09-27 20:50:01',NULL,1),(65,'Campos dos Goytacazes',6,NULL,'2019-09-27 20:50:01',NULL,1),(66,'São Fidelis',6,NULL,'2019-09-27 20:50:01',NULL,1),(67,'Cardoso Moreira',6,NULL,'2019-09-27 20:50:01',NULL,1),(68,'São Francisco de Itabapoana',6,NULL,'2019-09-27 20:50:01',NULL,1),(69,'São João da Barra',6,NULL,'2019-09-27 20:50:01',NULL,1),(70,'Varre-Sai',7,NULL,'2019-09-27 20:50:01',NULL,1),(71,'Porciúncula',7,NULL,'2019-09-27 20:50:01',NULL,1),(72,'Natividade',7,NULL,'2019-09-27 20:50:01',NULL,1),(73,'Bom Jesus do Itabapoana',7,NULL,'2019-09-27 20:50:01',NULL,1),(74,'Laje do Muriaé',7,NULL,'2019-09-27 20:50:01',NULL,1),(75,'Itaperuna',7,NULL,'2019-09-27 20:50:01',NULL,1),(76,'Miracema',7,NULL,'2019-09-27 20:50:01',NULL,1),(77,'São José de Ubá',7,NULL,'2019-09-27 20:50:01',NULL,1),(78,'Italva',7,NULL,'2019-09-27 20:50:01',NULL,1),(79,'Santo Antônio de Pádua',7,NULL,'2019-09-27 20:50:01',NULL,1),(80,'Cambuci',7,NULL,'2019-09-27 20:50:01',NULL,1),(81,'Aperibé',7,NULL,'2019-09-27 20:50:01',NULL,1),(82,'Itaocara',7,NULL,'2019-09-27 20:50:01',NULL,1),(83,'Silva Jardim',5,NULL,'2019-09-27 20:50:01',NULL,1),(84,'Araruama',5,NULL,'2019-09-27 20:50:01',NULL,1),(85,'Saquarema',5,NULL,'2019-09-27 20:50:01',NULL,1),(86,'Iguaba Grande',5,NULL,'2019-09-27 20:50:01',NULL,1),(87,'Arraial do Cabo',5,NULL,'2019-09-27 20:50:01',NULL,1),(88,'São Pedro da Aldeia',5,NULL,'2019-09-27 20:50:01',NULL,1),(89,'Cabo Frio',5,NULL,'2019-09-27 20:50:01',NULL,1),(90,'Armação dos Búzios',5,NULL,'2019-09-27 20:50:01',NULL,1),(91,'Rio das Ostras',5,NULL,'2019-09-27 20:50:01',NULL,1),(92,'Casimiro de Abreu',5,NULL,'2019-09-27 20:50:01',NULL,1);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities_regions`
--

DROP TABLE IF EXISTS `cities_regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities_regions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(245) DEFAULT NULL,
  `description` text,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` int DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_regiao` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities_regions`
--

LOCK TABLES `cities_regions` WRITE;
/*!40000 ALTER TABLE `cities_regions` DISABLE KEYS */;
INSERT INTO `cities_regions` VALUES (1,'Região Metropolitana',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(2,'Região do Médio Vale do Paraíba',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(3,'Região Centro-Sul Fluminense',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(4,'Região Serrana',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(5,'Região das Baixadas Litorâneas',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(6,'Região Norte Fluminense',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(7,'Região Noroeste Fluminense',NULL,NULL,'2019-07-22 21:35:07',NULL,1),(8,'Região da Costa Verde',NULL,NULL,'2019-07-22 21:35:07',NULL,1);
/*!40000 ALTER TABLE `cities_regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intellectual_assets`
--

DROP TABLE IF EXISTS `intellectual_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intellectual_assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `intellectual_assets_types_id` int NOT NULL,
  `name` varchar(245) DEFAULT NULL,
  `summary` varchar(245) DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`,`intellectual_assets_types_id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_intellectual_assets_intellectual_assets_types1_idx` (`intellectual_assets_types_id`),
  CONSTRAINT `fk_intellectual_assets_intellectual_assets_types1` FOREIGN KEY (`intellectual_assets_types_id`) REFERENCES `intellectual_assets_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intellectual_assets`
--

LOCK TABLES `intellectual_assets` WRITE;
/*!40000 ALTER TABLE `intellectual_assets` DISABLE KEYS */;
INSERT INTO `intellectual_assets` VALUES (1,1,'meu ativo',NULL,1,'2021-05-26 23:13:31','2021-05-26 23:13:31',1),(2,1,'meu ativo 3',NULL,1,'2021-05-26 23:32:11','2021-05-26 23:32:11',1);
/*!40000 ALTER TABLE `intellectual_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intellectual_assets_types`
--

DROP TABLE IF EXISTS `intellectual_assets_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intellectual_assets_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(245) NOT NULL,
  `summary` text,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intellectual_assets_types`
--

LOCK TABLES `intellectual_assets_types` WRITE;
/*!40000 ALTER TABLE `intellectual_assets_types` DISABLE KEYS */;
INSERT INTO `intellectual_assets_types` VALUES (1,'Patente',NULL,NULL,'2021-05-14 20:19:09',NULL,1),(2,'Modelo de Utilidade',NULL,NULL,'2021-05-14 20:19:09',NULL,1),(3,'Desenho Industrial',NULL,NULL,'2021-05-14 20:19:09',NULL,1),(4,'Programa de Computador',NULL,NULL,'2021-05-14 20:19:09',NULL,1),(5,'Direito Autoral',NULL,NULL,'2021-05-14 20:19:10',NULL,1),(6,'Marca',NULL,NULL,'2021-05-14 20:19:10',NULL,1);
/*!40000 ALTER TABLE `intellectual_assets_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intellectual_property`
--

DROP TABLE IF EXISTS `intellectual_property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intellectual_property` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(245) DEFAULT NULL,
  `registration_number` varchar(115) NOT NULL,
  `protection_agency_inpi` tinyint(1) DEFAULT NULL,
  `protection_agency_national_library` tinyint(1) DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `registration_number_UNIQUE` (`registration_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intellectual_property`
--

LOCK TABLES `intellectual_property` WRITE;
/*!40000 ALTER TABLE `intellectual_property` DISABLE KEYS */;
/*!40000 ALTER TABLE `intellectual_property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(245) DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(254) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `group_id` bigint NOT NULL,
  `password` varchar(245) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `superuser` tinyint DEFAULT '0',
  `key_raw_base64` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hash_reset_password` varchar(254) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `hash_reset_password_UNIQUE` (`hash_reset_password`),
  KEY `fk_usuario_usuario_grupo1_idx` (`group_id`),
  CONSTRAINT `fk_usuario_usuario_grupo1` FOREIGN KEY (`group_id`) REFERENCES `users_groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'inovuerj@sr2.uerj.br',0,'$2y$10$gnGqzMT88wJJlWhdtS0w/uC6XKSifVarn0XzqVTnGW7SCldq8GBAO',1,NULL,NULL,NULL,'2021-01-15 03:24:55',NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_groups`
--

DROP TABLE IF EXISTS `users_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_groups`
--

LOCK TABLES `users_groups` WRITE;
/*!40000 ALTER TABLE `users_groups` DISABLE KEYS */;
INSERT INTO `users_groups` VALUES (0,'superuser','usuário com maior privilégio no sistema. Pode incluir outros usuários ativos ou administradores',NULL,NULL);
/*!40000 ALTER TABLE `users_groups` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-26 20:53:36
