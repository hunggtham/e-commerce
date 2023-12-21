package com.example.backend.model;

import jakarta.persistence.Entity;

@Entity
public class Size {
	
	private String name;
	
	private int quanitty;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuanitty() {
		return quanitty;
	}

	public void setQuanitty(int quanitty) {
		this.quanitty = quanitty;
	}

	public Size() {
		super();
	}

	public Size(String name, int quanitty) {
		super();
		this.name = name;
		this.quanitty = quanitty;
	}
	
	
}
