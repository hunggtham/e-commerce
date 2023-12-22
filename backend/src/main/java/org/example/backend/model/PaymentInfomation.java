package org.example.backend.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

public class PaymentInfomation {

	@Column(name = "cardHolderName")
	private String cardHolderName;
	
	@Column(name = "cardNumber")
	private String cardNumber;
	
	@Column(name = "expirationDate")
	private LocalDate expirationDate;
	
	@Column(name = "cvv")
	private String cvv;
	
//	getter and setter
}
