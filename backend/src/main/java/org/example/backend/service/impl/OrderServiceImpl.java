package org.example.backend.service.impl;

import java.util.List;

import org.example.backend.exception.OrderException;
import org.example.backend.model.Address;
import org.example.backend.model.Order;
import org.example.backend.model.User;
import org.example.backend.repository.CartRepository;
import org.example.backend.service.CartService;
import org.example.backend.service.OrderService;
import org.example.backend.service.ProductService;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
	
	private CartRepository cartRepository;
	private CartService cartService;
	private ProductService productService;
	
	

	public OrderServiceImpl(CartRepository cartRepository, CartService cartService, ProductService productService) {
		super();
		this.cartRepository = cartRepository;
		this.cartService = cartService;
		this.productService = productService;
	}

	@Override
	public Order createOrder(User user, Address shippingAddress) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order findOrderByid(Long OrderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> usersOrderHistory(Long orderId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order confirmedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order cancelOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub

	}

}
