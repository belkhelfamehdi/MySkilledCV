package com.mehdi.MySkilledCV.repository;

import com.mehdi.MySkilledCV.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
}
