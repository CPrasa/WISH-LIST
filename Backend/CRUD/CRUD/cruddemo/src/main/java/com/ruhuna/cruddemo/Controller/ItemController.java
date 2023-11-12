package com.ruhuna.cruddemo.Controller;


import com.ruhuna.cruddemo.Service.ItemService;
import com.ruhuna.cruddemo.model.Item;
import com.ruhuna.cruddemo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class ItemController {

    private ItemService service;

    @Autowired
    public ItemController(ItemService service) {
        this.service = service;
    }

    @GetMapping("/items")
    public List<Item> getAllItems()
    {
        return service.getAllItems();
    }
    @GetMapping("/items/{id}")
    public ResponseEntity<Item> getOneItem(@PathVariable int id)
    {
        return service.getOneItem(id);
    }
    @PostMapping("/items")
    public ResponseEntity<String> createItem(@RequestBody  Item item)
    {
        return service.createItem(item);
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<String> deleteItemById(@PathVariable int id){
        return  service.deleteItemById(id);
    }


    @PutMapping("/items")
    public ResponseEntity<Item> updateItem(@RequestBody Item item)
    {
        return  service.updateItem(item);
    }



}
