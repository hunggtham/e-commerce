package org.example.backend.service;


import org.example.backend.exception.UserException;
import org.example.backend.model.User;


public interface UserService {

	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	
}
