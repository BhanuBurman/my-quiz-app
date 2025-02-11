package com.bhanu.quizApp.repositories;

import com.bhanu.quizApp.dtos.QuizQuestionsDTO;
import com.bhanu.quizApp.entitty.QuizQuestionsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizAppRepository extends JpaRepository<QuizQuestionsEntity, String> {
    List<QuizQuestionsEntity> findAll();

    List<QuizQuestionsEntity> findByQuizCode(String quizCode);

//    Long countAll();
}
