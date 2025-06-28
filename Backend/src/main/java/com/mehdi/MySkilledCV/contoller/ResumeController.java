package com.mehdi.MySkilledCV.contoller;

import com.mehdi.MySkilledCV.model.AnalysisResponse;
import com.mehdi.MySkilledCV.model.User;
import com.mehdi.MySkilledCV.service.ResumeService;
import com.mehdi.MySkilledCV.service.AnalysisService;
import com.mehdi.MySkilledCV.repository.UserRepository;
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
public class ResumeController {

    private final ResumeService resumeService;
    private final AnalysisService analysisService;
    private final UserRepository userRepository;

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
        return analysisService.analyze(file, job, skills);
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void upload(@RequestPart("file") MultipartFile file, Principal principal) {
        if (file.isEmpty() || !"application/pdf".equals(file.getContentType())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "PDF required");
        }
        User user = userRepository.findByEmail(principal.getName())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED));
        resumeService.upload(file, user);
    }

    @GetMapping
    public java.util.List<com.mehdi.MySkilledCV.model.Resume> getAll() {
        return resumeService.getAll();
    }
}
