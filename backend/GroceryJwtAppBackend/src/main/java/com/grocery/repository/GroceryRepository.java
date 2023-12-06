package com.grocery.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grocery.entity.Grocery;

@Repository
public interface GroceryRepository extends JpaRepository <Grocery,Integer>{
	
	//findAllByOrderByIdAsc method is used to ORder by Grocery list in Ascending Order
	public List<Grocery> findAllByOrderByIdAsc();
	
	//findAllByOrderByIdDesc method is used to ORder by Grocery list in descending Order
	//public List<Grocery> findAllByOrderByDesc();
	

}
