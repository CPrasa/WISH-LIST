package com.ruhuna.cruddemo.Controller;

import com.ruhuna.cruddemo.Service.UserService;
import com.ruhuna.cruddemo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {


    private UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getOneUser(@PathVariable int id)
    {
        return service.getOneUser(id);
    }
    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody  User user)
    {
        return service.createUser(user);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable int id){
        return  service.deleteUserById(id);
    }


    @PutMapping("/users")
    public ResponseEntity<User> updateUser(@RequestBody User user)
    {
        return  service.updateUser(user);
    }


}
