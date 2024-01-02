package org.example.backend.service;

import org.example.backend.exception.ProductException;
import org.example.backend.model.Cart;
import org.example.backend.model.User;
import org.example.backend.request.AddItemRequest;

public interface CartService {

	public Cart createCart(User user);
	
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
	
	
}
