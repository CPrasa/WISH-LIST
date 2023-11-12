package com.ruhuna.cruddemo.Service;

import com.ruhuna.cruddemo.UserDAO;
import com.ruhuna.cruddemo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private UserDAO userDAO;

    @Autowired
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public ResponseEntity<List<User>> getAllUsers() {
        return  new ResponseEntity<>( userDAO.findAll().stream().sorted(Comparator.comparing(User::getUsername)).collect(Collectors.toList()), HttpStatus.OK);
    }


    public ResponseEntity<User> getOneUser(int id) {
        return new ResponseEntity<>(  userDAO.findById(id).orElse(null),HttpStatus.OK);
    }
    public ResponseEntity<String> createUser(User user) {

        userDAO.save(user);
        return  new ResponseEntity<>("created",HttpStatus.CREATED);

    }

    public ResponseEntity<String> deleteUserById(int id) {
        try {
            userDAO.deleteById(id);
            return new ResponseEntity<>("deleted", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("error",HttpStatus.BAD_REQUEST);
        }

    }

    public ResponseEntity<User> updateUser(User user) {
        User cUser =userDAO.findById(user.getId()).orElse(null);
        if(user!=null) {

            cUser.setUsername(user.getUsername());
            cUser.setUsername(user.getPassword());
            cUser.setEmail(user.getEmail());
            userDAO.save(cUser);
            return new ResponseEntity<>(cUser,HttpStatus.OK);
        }

        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }

}
