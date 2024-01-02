package org.example.backend.repository;

import java.util.List;

import org.example.backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long>{

	@Query("SELECT r from Review r WHERE r.product.id=:productId")
	public List<Review> getAllProductReviews(@Param("productId")Long productId);
}
