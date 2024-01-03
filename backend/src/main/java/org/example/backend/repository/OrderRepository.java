package org.example.backend.repository;

import java.util.List;

import org.example.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

	@Query("SELECT o FROM Order o WHERE o.user.id=:userId AND (o.orderStatus='PLACED' OR o.orderStatus='COMFIRMED' OR o.orderStatus='SHIPPED' OR o.orderStatus='DELIVERED')")
	List<Order> getUserOrder(@Param("userId")Long userId);

}
