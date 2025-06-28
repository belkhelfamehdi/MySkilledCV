package com.mehdi.MySkilledCV.config;

import com.mehdi.MySkilledCV.model.Job;
import com.mehdi.MySkilledCV.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final JobRepository jobRepository;

    @Bean
    CommandLineRunner initJobs() {
        return args -> {
            if (jobRepository.count() == 0) {
                jobRepository.save(new Job(null, "Software Engineer", "Develop features"));
                jobRepository.save(new Job(null, "Project Manager", "Manage projects"));
            }
        };
    }
}
