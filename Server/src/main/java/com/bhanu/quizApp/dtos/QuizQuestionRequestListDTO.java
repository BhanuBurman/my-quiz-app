package com.bhanu.quizApp.dtos;

import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class QuizQuestionRequestListDTO {
    private String quizCode;
    private String quizTitle;
    private String category;
    private List<QuizQuestionRequestDTO> quizQuestionRequestDTOList;
}
