package com.bhanu.quizApp.controllers;

import com.bhanu.quizApp.dtos.QuizQuestionListDTO;
import com.bhanu.quizApp.dtos.QuizQuestionRequestListDTO;
import com.bhanu.quizApp.services.QuizAppService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/quiz")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class QuizAppController {

    public final QuizAppService quizAppService;

    public QuizAppController(QuizAppService quizAppService) {
        this.quizAppService = quizAppService;
    }
    @GetMapping("/all")
    public ResponseEntity<QuizQuestionListDTO> getAllQuizQuestions(){
        log.info("Entered into getAll API...");

        return ResponseEntity.ok(quizAppService.getAllQuestions());
    }

    @GetMapping("/questions")
    public ResponseEntity<QuizQuestionListDTO> getQuizQuestionByQuizCode(
            @RequestParam("quizCode") String quizCode){
        log.info("Entered into get One API...");
        QuizQuestionListDTO quizQuestionListDTO = quizAppService.getAllQuestionByQuizCode(quizCode);
        return ResponseEntity.ok(quizQuestionListDTO);
    }

    @GetMapping("/get-total-records")
    public ResponseEntity<Long> getTotalNumberOfRecords(){
        log.info("Entered into all records API");
        return ResponseEntity.ok(quizAppService.getAllRecordsCount());
    }

    @PostMapping(value = "/create-quiz", consumes = "application/json", produces = "text/plain")
    public ResponseEntity<String> createQuiz(@RequestBody QuizQuestionRequestListDTO quizQuestionRequestListDTO){
        return ResponseEntity.ok(quizAppService.createQuiz(quizQuestionRequestListDTO));
    }

}
