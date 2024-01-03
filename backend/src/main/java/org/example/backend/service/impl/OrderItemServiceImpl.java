package org.example.backend.service.impl;

import org.example.backend.model.OrderItem;
import org.example.backend.repository.OrderItemRepository;
import org.example.backend.service.OrderItemService;
import org.springframework.stereotype.Service;

@Service
public class OrderItemServiceImpl implements OrderItemService {

	private OrderItemRepository orderItemRepository;
	
	
	public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
		super();
		this.orderItemRepository = orderItemRepository;
	}


	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {

		return orderItemRepository.save(orderItem);
	}

}
