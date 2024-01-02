package org.example.backend.service;

import java.util.List;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Rating;
import org.example.backend.model.User;
import org.example.backend.request.RatingRequest;

public interface RatingSevice {
	public Rating createRating(RatingRequest req, User user) throws ProductException;
	
	public List<Rating>getProductRating(Long productId);
}
