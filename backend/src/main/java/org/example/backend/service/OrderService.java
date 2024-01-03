package org.example.backend.service;

import java.util.List;

import org.example.backend.exception.OrderException;
import org.example.backend.model.Address;
import org.example.backend.model.Order;
import org.example.backend.model.User;

public interface OrderService {

	public Order createOrder(User user, Address shippingAddress);
	
	public Order findOrderByid(Long OrderId) throws OrderException;
	
	public List<Order> usersOrderHistory(Long userId);
	
	public Order placedOrder(Long orderId)throws OrderException;
	
	public Order confirmedOrder(Long orderId)throws OrderException;
	
	public Order shippedOrder(Long orderId)throws OrderException;
	
	public Order deliveredOrder(Long orderId)throws OrderException;
	
	public Order cancelOrder(Long orderId)throws OrderException;
	
	public List<Order>getAllOrders();
	
	public void deleteOrder(Long orderId) throws OrderException;
}
