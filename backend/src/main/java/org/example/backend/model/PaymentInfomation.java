package org.example.backend.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

public class PaymentInfomation {

	@Column(name = "card_holder_name")
	private String cardHolderName;
	
	@Column(name = "card_number")
	private String cardNumber;
	
	@Column(name = "expiration_date")
	private LocalDate expirationDate;
	
	@Column(name = "cvv")
	private String cvv;
	
//	getter and setter
}
