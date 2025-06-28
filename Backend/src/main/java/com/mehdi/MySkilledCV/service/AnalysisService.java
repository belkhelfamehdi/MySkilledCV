package com.mehdi.MySkilledCV.service;

import com.mehdi.MySkilledCV.model.AnalysisResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class AnalysisService {

    private final GeminiService geminiService;

    public AnalysisResponse analyze(MultipartFile file, String job, String skills) {
        int keywords = skills == null ? 0 : skills.split(",").length;
        int score = Math.min(100, 50 + keywords * 10);
        String summary = geminiService.generateSummary(file.getOriginalFilename(), job, skills);
        return new AnalysisResponse(score, summary.isBlank() ? "Great fit for " + job : summary);
    }
}
