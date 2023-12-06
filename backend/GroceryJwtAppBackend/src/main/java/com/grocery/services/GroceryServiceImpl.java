package com.grocery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.entity.Grocery;
import com.grocery.repository.GroceryRepository;



@Service
public class GroceryServiceImpl implements GroceryService {

	@Autowired
	GroceryRepository groceryRepository;

	// getAllGrocery method is used to get all the Grocery List and OrderBy
	// Ascending Order
	public List<Grocery> getAllGrocery() {
		return groceryRepository.findAllByOrderByIdAsc();
	}

	// getAllGrocery method is used to get all the Grocery List and OrderBy
	// Descending Order
/*	public List<Grocery> getAllGroceryDesc() {
		return groceryRepository.findAllByOrderByIdDesc();
	}
*/
	// addEmployee method is used to create Grocery Record
	public Grocery addGrocery(Grocery employee) {
		return groceryRepository.save(employee);
	}

	public Boolean existById(Integer id) {
		return groceryRepository.existsById(id);
	}

	// getGroceryById service method is used to return the Grocery from repository
	// by using of findById
	public Optional<Grocery> getGroceryById(Integer id) {
		return groceryRepository.findById(id);
	}

	// updateGrocery method is used to update Grocery record by using of Id
	public Optional<Grocery> updateGrocery(Integer id, Grocery employee) {
		return groceryRepository.findById(id).map((emp) -> {
			emp.setItemName(employee.getItemName());
			emp.setWeight(employee.getWeight());
			//emp.setDateOfJoining(employee.getDateOfJoining());
			emp.setPrice(employee.getPrice());
			return groceryRepository.save(emp);
		});
	}

	// deleteGroceryRecordById method is used to delete Grocery by using of Id
	public void deleteGroceryRecordById(Integer id) {
		groceryRepository.deleteById(id);
	}

}
