package org.example.backend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Product;
import org.example.backend.model.Review;
import org.example.backend.model.User;
import org.example.backend.repository.ProductRepository;
import org.example.backend.repository.ReviewRepository;
import org.example.backend.request.ReviewRequest;
import org.example.backend.service.ProductService;
import org.example.backend.service.ReviewService;

public class ReviewServiceImp implements ReviewService {

	private ReviewRepository reviewRepository;
	private ProductRepository productRepository;
	private ProductService productService;
	
	
	public ReviewServiceImp(ReviewRepository reviewRepository, ProductRepository productRepository,
			ProductService productService) {
		super();
		this.reviewRepository = reviewRepository;
		this.productRepository = productRepository;
		this.productService = productService;
	}

	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		
		Review review = new Review();
		
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(Long productId) {
		
		return reviewRepository.getAllProductReviews(productId);
	}

}
