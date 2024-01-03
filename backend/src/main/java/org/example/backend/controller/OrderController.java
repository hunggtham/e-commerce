package org.example.backend.controller;

import java.util.List;

import org.example.backend.exception.OrderException;
import org.example.backend.exception.UserException;
import org.example.backend.model.Address;
import org.example.backend.model.Order;
import org.example.backend.model.User;
import org.example.backend.service.OrderService;
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
@RequestMapping("/api/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress, @RequestHeader("Authorization") String jwt) throws UserException{
		User user = userService.findUserProfileByJwt(jwt);
		
		Order order = orderService.createOrder(user, shippingAddress);
		
		System.out.println("order"+ order);
		
		return new ResponseEntity<Order>(order, HttpStatus.CREATED);
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<Order>> userOrderHistory(@RequestHeader("Authorization")String jwt) throws UserException{
		
		User user = userService.findUserProfileByJwt(jwt);
		
		List<Order> orders = orderService.usersOrderHistory(user.getId());
		
		return new ResponseEntity<>(orders,HttpStatus.OK);
	}
	
	@GetMapping("/{Id}")
	public ResponseEntity<Order> findOrderById(@PathVariable("Id")Long orderId, @RequestHeader("Authorization")String jwt) throws UserException, OrderException{
		User user = userService.findUserProfileByJwt(jwt);
		
		Order order = orderService.findOrderByid(orderId);
		
		return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
	}
}
