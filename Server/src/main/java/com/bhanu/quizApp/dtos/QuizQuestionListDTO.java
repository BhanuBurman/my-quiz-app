package com.bhanu.quizApp.dtos;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
@Builder
public class QuizQuestionListDTO {

    private int pageNo;

    private int pageSize;
    private int totalPages;
    private int totalElements;
    private String quizTitle;
    private String quizCode;
    private String category;
    private List<QuizQuestionsDTO> quizQuestionsList;

}
