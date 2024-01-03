package org.example.backend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Product;
import org.example.backend.model.Rating;
import org.example.backend.model.User;
import org.example.backend.repository.RatingRepository;
import org.example.backend.request.RatingRequest;
import org.example.backend.service.ProductService;
import org.example.backend.service.RatingService;
import org.springframework.stereotype.Service;

@Service
public class RatingServiceImpl implements RatingService {

	private RatingRepository ratingRepository;
	private ProductService productService;
	
	
	public RatingServiceImpl() {
		super();
	}

	public RatingServiceImpl(RatingRepository ratingRepository, ProductService productService) {
		super();
		this.ratingRepository = ratingRepository;
		this.productService = productService;
	}

	@Override
	public Rating createRating(RatingRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		
		Rating rating = new Rating();
		
		rating.setProduct(product);
		
		rating.setUser(user);
		
		rating.setRating(req.getRating());
		
		rating.setCreateAt(LocalDateTime.now());
		
		return ratingRepository.save(rating);
	}

	@Override
	public List<Rating> getProductRating(Long productId) {
		
		return ratingRepository.getAllProductRating(productId);
	}

}
