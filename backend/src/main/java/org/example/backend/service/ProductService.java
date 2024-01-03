package org.example.backend.service;

import java.util.List;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Product;
import org.example.backend.request.CreateProductRequest;
import org.springframework.data.domain.Page;

public interface ProductService {

	public Product createProduct(CreateProductRequest req);
	
	public String deleteProduct(Long productId) throws ProductException;
	
	public Product updateProduct(Long productId, Product product) throws ProductException;
	
	public Product findProductById(Long Id) throws ProductException;
	
	public List<Product> findProductByCatagory(String category);
	
	public Page<Product> getAllProduct(String category, List<String>colors, List<String>sizes, Integer minPrice,Integer maxPrice,
			Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize);

	public List<Product> findAllProduct();
}
