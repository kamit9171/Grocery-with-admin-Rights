package com.grocery.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Grocery {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
	
	
	@NotNull(message =" itemName is Required! ")
	private String itemName;
	
	@NotNull(message =" weight is Required! ")
	private String weight;
	
	//@NotNull(message =" Date of Joining is Required! ")
	//private String dateOfJoining;
	
	private long price;
	
	public Grocery(@NotNull(message =" itemName is Required! ") String itemName,
	@NotNull(message =" weight is Required! ") String weight,
	@NotNull(message =" Date of Joining is Required! ")  String dateOfJoining,
	@NotNull(message =" Price is Required! ") long price) {
		super();
		this.itemName=itemName;
		this.weight=weight;
		//this.dateOfJoining=dateOfJoining;
		this.price=price;
	}

	public Grocery() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	/*public String getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	*/

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}
	
	

}
