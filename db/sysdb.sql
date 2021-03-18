/*
 Navicat Premium Data Transfer

 Source Server         : MAMP
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : sysdb

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 18/03/2021 21:18:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `admin_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `admin_pwd` varchar(64) NOT NULL,
  `admin_name` varchar(64) NOT NULL,
  `admin_sex` varchar(10) NOT NULL,
  `admin_dept` varchar(255) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
BEGIN;
INSERT INTO `admin` VALUES (1, '123456', 'admintest', '1', '信息科学与工程学院');
COMMIT;

-- ----------------------------
-- Table structure for msg
-- ----------------------------
DROP TABLE IF EXISTS `msg`;
CREATE TABLE `msg` (
  `msg_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `datetime` datetime NOT NULL,
  `issuer_id` int(10) unsigned NOT NULL,
  `recipien_id` int(10) unsigned NOT NULL,
  `flag` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msg
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for stu
-- ----------------------------
DROP TABLE IF EXISTS `stu`;
CREATE TABLE `stu` (
  `stu_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `stu_pwd` varchar(64) NOT NULL,
  `stu_name` varchar(255) NOT NULL,
  `stu_sex` varchar(10) NOT NULL,
  `stu_dept` varchar(255) NOT NULL,
  `stu_class` varchar(255) NOT NULL,
  PRIMARY KEY (`stu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu
-- ----------------------------
BEGIN;
INSERT INTO `stu` VALUES (1, '123456', 'teststu', '1', '信息与工程学院', '计算机174');
COMMIT;

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `begin_date` date NOT NULL,
  `end_date` date NOT NULL,
  `issuer_id` int(10) unsigned NOT NULL,
  `recipien_id` varchar(5000) NOT NULL,
  `flag` int(2) NOT NULL DEFAULT '1',
  `finish_id` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
