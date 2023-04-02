CREATE DATABASE  IF NOT EXISTS `student-access`;
USE `student-access`;

CREATE TABLE IF NOT EXISTS `user` (
  `usuId` INT NOT NULL AUTO_INCREMENT,
  `usuUsername` VARCHAR(45) NOT NULL,
  `usuAppPat` VARCHAR(45) NOT NULL,
  `usuAppMat` VARCHAR(45) NOT NULL,
--   `usuPassword` VARCHAR(45) NOT NULL,
  `usuEmail` VARCHAR(45) NOT NULL,
  `usuRole` VARCHAR(45) NOT NULL,
  `usuTicket` INT NOT NULL,
  PRIMARY KEY (`usuId`)
  -- 
  );




INSERT INTO `student-access`.`user` (`usuId`, `usuUsername`, `usuAppPat`, `usuAppMat`, `usuEmail`, `usuRole`) VALUES ('4535', 'hh', 'fsdf', 'fsfs', 'sfsf', 'fsdf');
