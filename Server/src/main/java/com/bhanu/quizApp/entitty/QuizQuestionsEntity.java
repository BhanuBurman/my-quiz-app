package com.bhanu.quizApp.entitty;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "questions")
public class QuizQuestionsEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(name = "question_text")
    String question;

    @Column(name = "correct_option")
    String answer;

    @Column(name = "option_a")
    String optionA;

    @Column(name = "option_b")
    String optionB;

    @Column(name = "option_c")
    String optionC;

    @Column(name = "option_d")
    String optionD;

    @Column(name = "category")
    String category;

    @Column(name = "difficulty_level")
    String difficulty;

    @Column(name = "created_at")
    Timestamp createdAt;

    @Column(name = "user_id")
    Long userId;

    @Column(name = "quizCode")
    String quizCode;

    // TODO: Add title field also
}
