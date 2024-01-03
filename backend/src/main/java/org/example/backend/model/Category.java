package org.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	
	@NotNull
	@Size(max = 50)
	private String name;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "parentCategoryId")
	private Category parentCategory;
	
	private int level;
	
	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category getParentCategory() {
		return parentCategory;
	}

	public void setParentCategory(Category parentCategory) {
		this.parentCategory = parentCategory;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public Category() {
		// TODO Auto-generated constructor stub
	}

	public Category(Long id, @NotNull @Size(max = 50) String name, Category parentCategory, int level) {
		super();
		Id = id;
		this.name = name;
		this.parentCategory = parentCategory;
		this.level = level;
	}
	
}
