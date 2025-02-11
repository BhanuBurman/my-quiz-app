package com.bhanu.quizApp.services.impls;

import com.bhanu.quizApp.dtos.QuizQuestionListDTO;
import com.bhanu.quizApp.dtos.QuizQuestionRequestDTO;
import com.bhanu.quizApp.dtos.QuizQuestionRequestListDTO;
import com.bhanu.quizApp.dtos.QuizQuestionsDTO;
import com.bhanu.quizApp.entitty.QuizQuestionsEntity;
import com.bhanu.quizApp.repositories.QuizAppRepository;
import com.bhanu.quizApp.services.QuizAppService;
import jakarta.transaction.Transactional;
import lombok.Builder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class QuizAppServiceImpl implements QuizAppService {

    private final QuizAppRepository quizAppRepository;

    public QuizAppServiceImpl(QuizAppRepository quizAppRepository) {
        this.quizAppRepository = quizAppRepository;
    }

    public QuizQuestionListDTO getAllQuestions() {
        List<QuizQuestionsEntity> quizQuestionsEntityList = quizAppRepository.findAll();

        List<QuizQuestionsDTO> result = new ArrayList<>();
        quizQuestionsEntityList.forEach(item -> {
            QuizQuestionsDTO quizQuestionsDTO = new QuizQuestionsDTO();
            quizQuestionsDTO.setId(item.getId());
            quizQuestionsDTO.setQuestion(item.getQuestion());
            quizQuestionsDTO.setAnswer(item.getAnswer());
            quizQuestionsDTO.setCategory(item.getCategory());
            quizQuestionsDTO.setDifficulty(item.getDifficulty());
            quizQuestionsDTO.setOptionA(item.getOptionA());
            quizQuestionsDTO.setOptionB(item.getOptionB());
            quizQuestionsDTO.setOptionC(item.getOptionC());
            quizQuestionsDTO.setOptionD(item.getOptionD());
            quizQuestionsDTO.setCreatedDate(item.getCreatedAt());
            quizQuestionsDTO.setTotalRecords((long) quizQuestionsEntityList.size());
            result.add(quizQuestionsDTO);
        });

        QuizQuestionListDTO quizQuestionListDTO = new QuizQuestionListDTO();
        quizQuestionListDTO.setQuizQuestionsList(result);
        quizQuestionListDTO.setTotalElements(quizQuestionsEntityList.size());
        return quizQuestionListDTO;
    }

    @Override
    public QuizQuestionListDTO getAllQuestionByQuizCode(String quizCode) {
        List<QuizQuestionsEntity> quizQuestionsEntity = quizAppRepository.findByQuizCode(quizCode);
        if (quizQuestionsEntity.isEmpty()) {
            System.out.println("Quiz not found");
            return new QuizQuestionListDTO();
        }
        List<QuizQuestionsDTO> quizQuestionsDTOList = new ArrayList<>();
        quizQuestionsEntity.forEach(item -> {
            QuizQuestionsDTO quizQuestionsDTO = new QuizQuestionsDTO();
            quizQuestionsDTO.setId(item.getId());
            quizQuestionsDTO.setQuestion(item.getQuestion());
            quizQuestionsDTO.setAnswer(item.getAnswer());
            quizQuestionsDTO.setCategory(item.getCategory());
            quizQuestionsDTO.setDifficulty(item.getDifficulty());
            quizQuestionsDTO.setOptionA(item.getOptionA());
            quizQuestionsDTO.setOptionB(item.getOptionB());
            quizQuestionsDTO.setOptionC(item.getOptionC());
            quizQuestionsDTO.setOptionD(item.getOptionD());
            quizQuestionsDTO.setCreatedDate(item.getCreatedAt());
            quizQuestionsDTO.setTotalRecords((long) quizQuestionsEntity.size());
            quizQuestionsDTOList.add(quizQuestionsDTO);
        });
        return QuizQuestionListDTO.builder().quizTitle("Testing..")
                .pageNo(0)
                .totalElements(quizQuestionsDTOList.size())
                .quizCode(quizCode)
                .category(quizQuestionsEntity.getFirst().getCategory())
                .quizQuestionsList(quizQuestionsDTOList)
                .build();
    }

    @Override
    public Long getAllRecordsCount() {
        return quizAppRepository.count();
    }

    @Override
    @Transactional
    public String createQuiz(QuizQuestionRequestListDTO quizQuestionRequestListDTO) {
        List<QuizQuestionRequestDTO> quizQuestionRequestDTOList = quizQuestionRequestListDTO.getQuizQuestionRequestDTOList();
        quizQuestionRequestDTOList.forEach(quizQuestionRequestDTO -> {

                    QuizQuestionsEntity quizQuestionsEntity =
                            QuizQuestionsEntity.builder()
                                    .question(quizQuestionRequestDTO.getQuestion())
                                    .optionA(quizQuestionRequestDTO.getOptionA())
                                    .optionB(quizQuestionRequestDTO.getOptionB())
                                    .optionC(quizQuestionRequestDTO.getOptionC())
                                    .optionD(quizQuestionRequestDTO.getOptionD())
                                    .answer(quizQuestionRequestDTO.getAnswer())
                                    .category(quizQuestionRequestListDTO.getCategory())
                                    .difficulty(quizQuestionRequestDTO.getDifficultyLevel())
                                    .createdAt(Timestamp.from(Instant.now()))
                                    .quizCode(quizQuestionRequestListDTO.getQuizCode())
                                    // TODO: make this field dynamic by adding additional column in database
                                    .userId(4l) // for testing only
                                    .build();
                    quizAppRepository.save(quizQuestionsEntity);

                }
        );

        return "Your Quiz has been created successfully!";
    }
}
