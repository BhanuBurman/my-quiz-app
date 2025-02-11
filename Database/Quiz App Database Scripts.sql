CREATE DATABASE `quizapp`;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_text` varchar(255) DEFAULT NULL,
  `option_a` varchar(255) NOT NULL,
  `option_b` varchar(255) NOT NULL,
  `option_c` varchar(255) NOT NULL,
  `option_d` varchar(255) NOT NULL,
  `correct_option` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `difficulty_level` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` bigint DEFAULT NULL,
  `quiz_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users` (`user_id`),
  CONSTRAINT `fk_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `quiz_info` (
  `quiz_info_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `quiz_name` varchar(45) DEFAULT NULL,
  `quiz_code` varchar(45) DEFAULT NULL,
  `quiz_category` varchar(34) DEFAULT NULL,
  PRIMARY KEY (`quiz_info_id`),
  UNIQUE KEY `quiz_info_id` (`quiz_info_id`),
  UNIQUE KEY `quiz_code_UNIQUE` (`quiz_code`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `quiz_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `role_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

