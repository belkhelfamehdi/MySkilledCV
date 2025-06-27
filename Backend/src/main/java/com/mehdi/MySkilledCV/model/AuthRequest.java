package com.mehdi.MySkilledCV.model;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
    private String companyName; // used for registration
}