package org.example.backend.service;

import java.util.List;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Review;
import org.example.backend.model.User;
import org.example.backend.request.ReviewRequest;

public interface ReviewService {
	
	public Review createReview(ReviewRequest req, User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
}
