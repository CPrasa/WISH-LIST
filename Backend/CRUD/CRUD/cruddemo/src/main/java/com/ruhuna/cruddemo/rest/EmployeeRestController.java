package com.ruhuna.cruddemo.rest;

import com.ruhuna.cruddemo.dao.EmployeeDAOImpl;
import com.ruhuna.cruddemo.dao.IEmployeeDAO;
import com.ruhuna.cruddemo.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api")
@RestController
public class EmployeeRestController {
    private IEmployeeDAO employeeDAO;


    @Autowired
    //Constructor Based DI
    public EmployeeRestController(IEmployeeDAO employeeDAO) {
        this.employeeDAO = employeeDAO;
    }
    //localhost:8080/api/employees
    @GetMapping("/employees")
    List<Employee> findAllEmployees()
    {
        return employeeDAO.findAll();
    }


}
