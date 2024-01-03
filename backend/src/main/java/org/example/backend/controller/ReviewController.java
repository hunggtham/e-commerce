package org.example.backend.controller;

import java.util.List;

import org.example.backend.exception.ProductException;
import org.example.backend.exception.UserException;
import org.example.backend.model.Rating;
import org.example.backend.model.Review;
import org.example.backend.model.User;
import org.example.backend.request.RatingRequest;
import org.example.backend.request.ReviewRequest;
import org.example.backend.service.RatingService;
import org.example.backend.service.ReviewService;
import org.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private ReviewService reviewService;
	
	@PostMapping("/create")
	public ResponseEntity<Review> creatReview(@RequestBody ReviewRequest req, @RequestHeader("Authorization")String jwt) throws UserException, ProductException{
		User user = userService.findUserProfileByJwt(jwt);
		
		Review review = reviewService.createReview(req, user);
		
		return new ResponseEntity<Review>(review,HttpStatus.CREATED);
	}
	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Review>>getProductRating(@PathVariable Long productId, @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
		
		List<Review> review = reviewService.getAllReview(productId);
		
		return new ResponseEntity<>(review, HttpStatus.ACCEPTED);
	}
}
