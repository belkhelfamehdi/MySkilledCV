package com.mehdi.MySkilledCV.service;

import com.mehdi.MySkilledCV.model.Job;
import com.mehdi.MySkilledCV.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public List<Job> getAll() {
        return jobRepository.findAll();
    }
}
