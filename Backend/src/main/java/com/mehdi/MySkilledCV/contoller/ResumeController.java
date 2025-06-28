package com.mehdi.MySkilledCV.contoller;

import com.mehdi.MySkilledCV.model.AnalysisResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;

@RestController
@RequestMapping("/api/resumes")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ResumeController {

    @PostMapping(value = "/analyze", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public AnalysisResponse analyze(
            @RequestPart("file") MultipartFile file,
            @RequestParam("job") String job,
            @RequestParam("skills") String skills,
            Principal principal
    ) {
        if (file.isEmpty() || !"application/pdf".equals(file.getContentType())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "PDF required");
        }
        if (file.getSize() > 2_000_000) { // 2 MB max
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "File too large");
        }
        // TODO integrate Gemini API
        return new AnalysisResponse(90, "Great fit for " + job);
    }
}
