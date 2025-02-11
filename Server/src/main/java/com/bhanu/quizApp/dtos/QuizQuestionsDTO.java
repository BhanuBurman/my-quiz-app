package com.bhanu.quizApp.dtos;

import lombok.*;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuizQuestionsDTO {
    private int id;
    private String question;
    private String answer;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String category;
    private String difficulty;
    private Timestamp createdDate;
    private Long totalRecords;
}
