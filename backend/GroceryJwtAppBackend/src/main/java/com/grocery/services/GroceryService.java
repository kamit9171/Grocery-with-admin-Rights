package com.grocery.services;


import java.util.List;
import java.util.Optional;

import com.grocery.entity.Grocery;

public interface GroceryService {
	//All the Function 
	
	public List<Grocery> getAllGrocery();
	
	public Grocery addGrocery(Grocery employee);
	
	public Boolean existById(Integer id);
	
	public Optional<Grocery> getGroceryById(Integer id);
	
	public Optional<Grocery > updateGrocery(Integer id,Grocery employee);
	
	public void deleteGroceryRecordById(Integer id);
	
	
	

}

