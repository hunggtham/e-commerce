package org.example.backend.service.impl;

import java.util.Optional;

import org.example.backend.config.JwtProvider;
import org.example.backend.exception.UserException;
import org.example.backend.model.User;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	private JwtProvider jwtProvider;
	
	public UserServiceImpl(UserRepository userRepository,JwtProvider jwtProvider) {
		this.userRepository = userRepository;
		this.jwtProvider = jwtProvider;
	}
	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User> user = userRepository.findById(userId);
		
		if(user.isPresent()) {
			return user.get();
		}
		throw new UserException("User not found with id:"+ userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email = jwtProvider.getEmailFromToken(jwt);
		
		User user = userRepository.findByEmail(email);
		if(user == null) {
			throw new UserException("User not found with email:" + email);
		}
		return null;
	}

}
