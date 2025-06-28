package com.mehdi.MySkilledCV.repository;

import com.mehdi.MySkilledCV.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}
