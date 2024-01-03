package org.example.backend.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Category;
import org.example.backend.model.Product;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.repository.ProductRepository;
import org.example.backend.request.CreateProductRequest;
import org.example.backend.service.ProductService;
import org.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class ProductServiceImpl implements ProductService {

	private ProductRepository  productRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public ProductServiceImpl(ProductRepository  productRepository,UserService userService,CategoryRepository categoryRepository) {
		this.userService = userService;
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}
	
	@Override
	@Transactional
	public Product createProduct(CreateProductRequest req) {
		

		Category topLevel = categoryRepository.findByName(req.getTopLevelCategory());
		
	    if (topLevel == null) {
	        Category topLevelCategory = new Category();
	        topLevelCategory.setName(req.getTopLevelCategory());
	        topLevelCategory.setLevel(1);

	        
	            topLevel = categoryRepository.save(topLevelCategory);
	        
	    }

	    Category secondLevel = categoryRepository.findByNameAndParent(req.getSecondLevelCategory(), topLevel.getName());
	    if (secondLevel == null) {
	        Category secondLevelCategory = new Category();
	        secondLevelCategory.setName(req.getSecondLevelCategory());
	        secondLevelCategory.setParentCategory(topLevel);
	        secondLevelCategory.setLevel(2);

	       
	            secondLevel = categoryRepository.save(secondLevelCategory);
	        
	    }


	    Category thirdLevel = categoryRepository.findByNameAndParent(req.getThirdLevelCategory(), secondLevel.getName());
	    if (thirdLevel == null) {
	        Category thirdLevelCategory = new Category();
	        thirdLevelCategory.setName(req.getThirdLevelCategory());
	        thirdLevelCategory.setParentCategory(secondLevel);
	        thirdLevelCategory.setLevel(3);

	            thirdLevel = categoryRepository.save(thirdLevelCategory);
	    }
		
		Product product = new Product();
		
		product.setTitle(req.getTitle());
		product.setColor(req.getColor());
		product.setDescription(req.getDescription());
		product.setDiscountedPrice(req.getDiscountedPrice());
		product.setDiscountPercent(req.getDiscountPercent());
		product.setImageUrl(req.getImageUrl());
		product.setBrand(req.getBrand());
		product.setPrice(req.getPrice());
		product.setSizes(req.getSizes());
		product.setQuantity(req.getQuantity());
		product.setCategory(thirdLevel);
		product.setCreateAt(LocalDateTime.now());
		
		Product savedProduct = productRepository.save(product);
		
		return savedProduct;
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		try {
			Product product = findProductById(productId);
			product.getSizes().clear();
			productRepository.delete(product);
			
			return "Product deleted Successfully";
		} catch (Exception e) {
			throw new ProductException("Error finding product");
		}
	}

	@Override
	public Product updateProduct(Long productId, Product req) throws ProductException {
		Product product = findProductById(productId);
		
		if(req.getQuantity() != 0) {
			product.setQuantity(req.getQuantity());
		}
		
		return productRepository.save(product);
	}

	@Override
	public Product findProductById(Long Id) throws ProductException {
		Optional<Product> opt = productRepository.findById(Id);
		
		if(opt.isPresent()) {
			return opt.get();
		}throw new ProductException("ProductId not found -" +Id);
	}

	@Override
	public List<Product> findProductByCatagory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
		
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		//make a filterList of color, stock
		if(!colors.isEmpty()) {
				
			products = products.stream().filter(p-> colors.stream().anyMatch(c-> c.equalsIgnoreCase(p.getColor())))
					.collect(Collectors.toList());
		}
		if(stock != null) {
			if(stock.equals("inStock")){
				products= products.stream().filter(p-> p.getQuantity()>0).collect(Collectors.toList());
			}else if(stock.equals("outOfStock")) {
				products= products.stream().filter(p-> p.getQuantity()<1).collect(Collectors.toList());
			}
		}
		
		int startIndex = (int) pageable.getOffset();//startIndex cua trang hien tai
		//lay startIndex cua trang + pageSize de lay endIndex cua page hientai
		//Min to tranh page vuot qua so luong moi page
		int endIndex = Math.min(startIndex + pageable.getPageSize(),products.size());
		
		List<Product> pageContent = products.subList(startIndex, endIndex);
		
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
		return filteredProducts;
	}

	@Override
	public List<Product> findAllProduct() {
		// TODO Auto-generated method stub
		return null;
	}


}
