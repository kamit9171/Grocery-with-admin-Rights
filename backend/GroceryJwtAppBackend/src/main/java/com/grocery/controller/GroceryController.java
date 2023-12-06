package com.grocery.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.entity.Grocery;
import com.grocery.services.GroceryService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GroceryController {

	@Autowired
	GroceryService groceryService;

	@RequestMapping(value = "/grocerys", method = RequestMethod.GET)
	public ResponseEntity<?> getEmployees() {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");

		List<Grocery> list = groceryService.getAllGrocery();
		return new ResponseEntity<>(list, headers, HttpStatus.OK);
	}

	// getEmployeeById method is used to get the Grocery record by using of ID from
	// database with the help of front-end Angular application by using REST API
	// end-point "/employee/{id}"
	@RequestMapping(value = "grocery/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getEmployeeById(@PathVariable("id") String id) {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");

		Optional<Grocery> getOptinoalEmp = groceryService.getGroceryById(Integer.parseInt(id));
		if (getOptinoalEmp.isEmpty()) {
			return new ResponseEntity<>(null, headers, HttpStatus.NO_CONTENT);
		}
		Grocery employee = getOptinoalEmp.get();
		return new ResponseEntity<>(employee, headers, HttpStatus.OK);
	}

	// createEmployee method is used to create new Grocery record from database
	// with the help of front-end Angular application by using REST API end-point
	// "/employee"
	@RequestMapping(value = "/grocery", method = RequestMethod.POST)
	public ResponseEntity<?> addEmployee(@RequestBody Grocery employee) {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");
		Grocery createNewEmployee = groceryService.addGrocery(employee);
		if (createNewEmployee == null) {
			return new ResponseEntity<>(null, headers, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(createNewEmployee, headers, HttpStatus.CREATED);
	}

	// updateEmployee method is used to update Grocery record by using of Grocery
	// ID from database with the help of front-end Angular application by using of
	// REST API end-point "/employee/{id}"
	@RequestMapping(value = "/grocery/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateEmployee(@PathVariable("id") String id, @Valid @RequestBody Grocery employee) {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Content-Type", "application/json");

		Optional<Grocery> updateOptinoalEmp = groceryService.updateGrocery(Integer.parseInt(id), employee);
		if (updateOptinoalEmp.isEmpty()) {
			return new ResponseEntity<>(null, headers, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(updateOptinoalEmp.get(), headers, HttpStatus.OK);
	}

	// deleteEmployeeById method is used to delete Grocery record by using of
	// Grocery ID from database with the help of front-end Angular application by
	// using of REST API end-point "/employee/{id}"
	@RequestMapping(value = "/grocery/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteEmployeeById(@PathVariable("id") String id) {
		groceryService.deleteGroceryRecordById(Integer.parseInt(id));
		return new ResponseEntity<>("Grocery " + id + " has been deleted", HttpStatus.OK);
	}

	@RequestMapping(value = "/grocerys/{ids}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteEmployeesByIds(@PathVariable("ids") List<String> ids) {
		if (ids.size() > 0) {
			ids.forEach(deletedEmpRecord -> {
				if (groceryService.existById(Integer.parseInt(deletedEmpRecord))) {
					groceryService.deleteGroceryRecordById(Integer.parseInt(deletedEmpRecord));
				}
			});
		}
		Map<String, String> response = new HashMap<>();
		response.put("message", "Grocery Record has been deleted successfully");
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}

