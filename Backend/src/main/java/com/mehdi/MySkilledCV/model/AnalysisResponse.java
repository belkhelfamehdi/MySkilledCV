package com.mehdi.MySkilledCV.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AnalysisResponse {
    private int score;
    private String summary;
}
