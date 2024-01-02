package org.example.backend.service.impl;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Cart;
import org.example.backend.model.CartItem;
import org.example.backend.model.Product;
import org.example.backend.model.User;
import org.example.backend.repository.CartRepository;
import org.example.backend.request.AddItemRequest;
import org.example.backend.service.CartItemService;
import org.example.backend.service.CartService;
import org.example.backend.service.ProductService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

	public CartRepository cartRepository;
	public CartItemService cartItemService;
	public ProductService productService;
	
	public CartServiceImpl() {
		// TODO Auto-generated constructor stub
	}
	
	public CartServiceImpl(CartRepository cartRepository, CartItemService cartItemService, ProductService productService) {
		super();
		this.cartRepository = cartRepository;
		this.cartItemService = cartItemService;
		this.productService = productService;
	}
	@Override
	public Cart createCart(User user) {
		Cart cart = new Cart();
		cart.setUser(user);
		
		return cartRepository.save(cart);
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {

		Cart cart = cartRepository.findByUserId(userId);
		
		Product product= productService.findProductById(req.getProductId());
		
		CartItem isPresent = cartItemService.isCartItemExist(cart, product,req.getSize(),userId);
		
		if(isPresent ==null) {
			CartItem cartItem = new CartItem();
			cartItem.setProduct(product);
			cartItem.setCart(cart);
			cartItem.setQuantity(req.getQuantity());
			cartItem.setUserId(userId);
			
			int price = req.getQuantity() * product.getDiscountedPrice();
			cartItem.setPrice(price);
			cartItem.setSize(req.getSize());
			
			CartItem createdCartItem = cartItemService.createCartItem(cartItem);
			cart.getCartItems().add(createdCartItem);
			
		}
		return "Item add to cart";
	}

	@Override
	public Cart findUserCart(Long userId) {
		Cart cart = cartRepository.findByUserId(userId);
		
		int totalPrice = 0;
		int totalDiscountedPrice = 0;
		int totalItem = 0;
		
		for(CartItem cartItem: cart.getCartItems()) {
			totalPrice += cartItem.getPrice();
			totalDiscountedPrice += cartItem.getDiscountedPrice();
			totalItem += cartItem.getQuantity();
		}
		
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setTotalPrice(totalPrice);
		cart.setTotalItem(totalItem);
		cart.setDiscount(totalPrice - totalDiscountedPrice);
		
		return cartRepository.save(cart);
	}

}
