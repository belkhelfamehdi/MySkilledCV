package com.mehdi.MySkilledCV.service;

import com.mehdi.MySkilledCV.model.Resume;
import com.mehdi.MySkilledCV.model.User;
import com.mehdi.MySkilledCV.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ResumeService {

    private final ResumeRepository resumeRepository;

    public void upload(MultipartFile file, User user) {
        try {
            Resume resume = new Resume();
            resume.setFileName(file.getOriginalFilename());
            resume.setData(file.getBytes());
            resume.setUser(user);
            resumeRepository.save(resume);
        } catch (IOException e) {
            throw new RuntimeException("Failed to store resume", e);
        }
    }

    public List<Resume> getAll() {
        return resumeRepository.findAll();
    }
}
