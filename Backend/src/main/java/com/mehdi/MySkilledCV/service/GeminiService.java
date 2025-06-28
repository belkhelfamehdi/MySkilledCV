package com.mehdi.MySkilledCV.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key:}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String generateSummary(String resumeText, String job, String skills) {
        if (apiKey == null || apiKey.isEmpty()) {
            return "Gemini API key not configured";
        }
        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;

        Map<String, Object> payload = Map.of(
                "contents", Collections.singletonList(
                        Map.of("parts", Collections.singletonList(
                                Map.of("text", "Summarize this resume for a " + job + " position. Required skills: " + skills + "\n" + resumeText)
                        ))
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

        Map response = restTemplate.postForObject(url, entity, Map.class);
        if (response == null) return "";
        try {
            Map firstCandidate = ((java.util.List<Map>) response.get("candidates")).get(0);
            Map content = (Map) firstCandidate.get("content");
            java.util.List<Map> parts = (java.util.List<Map>) content.get("parts");
            return parts.get(0).get("text").toString();
        } catch (Exception e) {
            return "";
        }
    }
}
