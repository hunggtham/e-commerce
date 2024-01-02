package org.example.backend.service;

import org.example.backend.exception.CartItemException;
import org.example.backend.exception.UserException;
import org.example.backend.model.Cart;
import org.example.backend.model.CartItem;
import org.example.backend.model.Product;

public interface CartItemService {
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem UpdateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
	
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long CartItemId) throws CartItemException;
}
