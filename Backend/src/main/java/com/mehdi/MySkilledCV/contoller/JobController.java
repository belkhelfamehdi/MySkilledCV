package com.mehdi.MySkilledCV.contoller;

import com.mehdi.MySkilledCV.model.Job;
import com.mehdi.MySkilledCV.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    @GetMapping
    public List<Job> getAll() {
        return jobService.getAll();
    }
}
