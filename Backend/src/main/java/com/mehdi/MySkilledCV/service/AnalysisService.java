package com.mehdi.MySkilledCV.service;

import com.mehdi.MySkilledCV.model.AnalysisResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class AnalysisService {
    public AnalysisResponse analyze(MultipartFile file, String job, String skills) {
        int keywords = skills == null ? 0 : skills.split(",").length;
        int score = Math.min(100, 50 + keywords * 10);
        return new AnalysisResponse(score, "Great fit for " + job);
    }
}
