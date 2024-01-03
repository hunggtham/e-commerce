package org.example.backend.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.example.backend.config.OrderStatus;
import org.example.backend.config.PaymentStatus;
import org.example.backend.exception.OrderException;
import org.example.backend.model.Address;
import org.example.backend.model.Cart;
import org.example.backend.model.CartItem;
import org.example.backend.model.Order;
import org.example.backend.model.OrderItem;
import org.example.backend.model.User;
import org.example.backend.repository.AddressRepository;
import org.example.backend.repository.CartRepository;
import org.example.backend.repository.OrderItemRepository;
import org.example.backend.repository.OrderRepository;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.CartService;
import org.example.backend.service.OrderItemService;
import org.example.backend.service.OrderService;
import org.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartService cartService;
	
	@Autowired
	public AddressRepository addressRepository;
	
	@Autowired
	public UserRepository userRepository;
	
	@Autowired
	public OrderItemService orderItemService;
	
	@Autowired
	public OrderItemRepository orderItemRepository;
	
	@Autowired
	public OrderRepository orderRepository;

	
	@Autowired
	public OrderServiceImpl(CartRepository cartRepository, CartService cartService,
			AddressRepository addressRepository, OrderItemService orderItemService,
			OrderItemRepository orderItemRepository) {
		super();
		this.cartRepository = cartRepository;
		this.cartService = cartService;
		this.addressRepository = addressRepository;
		this.orderItemService = orderItemService;
		this.orderItemRepository = orderItemRepository;
	}

	@Override
	public Order createOrder(User user, Address shipAddress) {
		shipAddress.setUser(user);
		
		Address address = addressRepository.save(shipAddress);
		user.getAddress().add(address);
		userRepository.save(user);
		
		Cart cart = cartService.findUserCart(user.getId());
		
		List<OrderItem> orderItems = new ArrayList<>();
		
		for(CartItem item: cart.getCartItems()) {
			OrderItem orderItem = new OrderItem();
			orderItem.setPrice(item.getPrice());
			orderItem.setProduct(item.getProduct());
			orderItem.setQuantity(item.getQuantity());
			orderItem.setSize(item.getSize());
			orderItem.setUserId(item.getUserId());
			orderItem.setDiscountedPrice(item.getDiscountedPrice());
			
			OrderItem createdOrderItem = orderItemRepository.save(orderItem);
			
			orderItems.add(createdOrderItem);
		}
		
		Order createdOrder = new Order();
		createdOrder.setUser(user);
		createdOrder.setOrderItems(orderItems);
		createdOrder.setTotalPrice(cart.getTotalPrice());
		createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
		createdOrder.setDiscount(cart.getDiscount());
		createdOrder.setTotalItem(cart.getTotalItem());
		createdOrder.setShippingAddress(address);
		createdOrder.setOrderDate(LocalDateTime.now());
		createdOrder.setOrderStatus(OrderStatus.PENDING);
		createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);
		createdOrder.setCreateAt(LocalDateTime.now());
		
		Order savedOrder = orderRepository.save(createdOrder);
		
		for(OrderItem item: orderItems) {
			item.setOrder(savedOrder);
			orderItemRepository.save(item);
		}
		
		return savedOrder;
	}

	@Override
	public Order findOrderByid(Long orderId) throws OrderException {
		Optional<Order> opt = orderRepository.findById(orderId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new OrderException("Order not exist with id" + orderId);
	}

	@Override
	public List<Order> usersOrderHistory(Long userId) {
		List<Order> orders = orderRepository.getUserOrder(userId);
		return orders;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		Order order = findOrderByid(orderId);
		order.setOrderStatus(OrderStatus.PLACED);
		order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
		return order;
	}

	@Override
	public Order confirmedOrder(Long orderId) throws OrderException {
		Order order = findOrderByid(orderId);
		order.setOrderStatus(OrderStatus.CONFIRMED);
		return orderRepository.save(order);
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		Order order = findOrderByid(orderId);
		order.setOrderStatus(OrderStatus.SHIPPED);
		return orderRepository.save(order);
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		Order order = findOrderByid(orderId);
		order.setOrderStatus(OrderStatus.DELIVERED);
		return orderRepository.save(order);
	}

	@Override
	public Order cancelOrder(Long orderId) throws OrderException {
		Order order = findOrderByid(orderId);
		order.setOrderStatus(OrderStatus.CANCELLED);
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		
		return orderRepository.findAll();
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		Order order = findOrderByid(orderId);
		
		orderRepository.deleteById(orderId);

	}

}
