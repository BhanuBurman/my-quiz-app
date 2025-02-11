package com.bhanu.quizApp.services;

import com.bhanu.quizApp.dtos.QuizQuestionListDTO;
import com.bhanu.quizApp.dtos.QuizQuestionRequestDTO;
import com.bhanu.quizApp.dtos.QuizQuestionRequestListDTO;
import com.bhanu.quizApp.dtos.QuizQuestionsDTO;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public interface QuizAppService {
    QuizQuestionListDTO getAllQuestions();

    QuizQuestionListDTO getAllQuestionByQuizCode(String quizCode);

    Long getAllRecordsCount();

    String createQuiz(QuizQuestionRequestListDTO quizQuestionRequestListDTO);
}
