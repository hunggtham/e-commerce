package com.example.backend.service;


import com.example.backend.exception.UserException;
import com.example.backend.model.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	
}
