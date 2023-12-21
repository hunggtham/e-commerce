package com.example.backend.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private Long id;
	
	private String firstName;
	
	private String lastName;
	
	private String password;
	
	private String email;
	
	private String role;
	
	private String phoneNumber;
	
	@OneToMany(mappedBy = "user", cascade= CascadeType.ALL)
	private List<Address> address = new ArrayList<>();
	
	@Embedded
	@ElementCollection
	@CollectionTable(name="payment_infomation", joinColumns = @JoinColumn(name="user_id"))
	private List<PaymentInfomation> paymentInfomation = new ArrayList<>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Rating> ratings = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Review> review = new ArrayList<>();
	
	private LocalDateTime createAt;
	
	public User() {
		// TODO Auto-generated constructor stub
	}
}
