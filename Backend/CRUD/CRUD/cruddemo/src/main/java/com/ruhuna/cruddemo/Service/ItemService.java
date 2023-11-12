package com.ruhuna.cruddemo.Service;

import com.ruhuna.cruddemo.ItemDAO;
import com.ruhuna.cruddemo.model.Item;
import com.ruhuna.cruddemo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ItemService {

    private ItemDAO itemDAO;
    @Autowired
    public ItemService(ItemDAO itemDAO) {
        this.itemDAO = itemDAO;
    }

    public List<Item> getAllItems() {
        return itemDAO.findAll();
    }

    public ResponseEntity<Item> getOneItem(int id) {
        return new ResponseEntity<>(  itemDAO.findById(id).orElse(null), HttpStatus.OK);
    }
    public ResponseEntity<String> createItem(Item item) {

        itemDAO.save(item);
        return  new ResponseEntity<>("created",HttpStatus.CREATED);

    }

    public ResponseEntity<String> deleteItemById(int id) {
        try {
            itemDAO.deleteById(id);
            return new ResponseEntity<>("deleted", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("error",HttpStatus.BAD_REQUEST);
        }

    }

    public ResponseEntity<Item> updateItem(Item item) {
        Item cItem =itemDAO.findById(item.getId()).orElse(null);
        if(item!=null) {

            cItem.setTitle(item.getTitle());
            cItem.setDescription(item.getDescription());
            cItem.setCategory(item.getCategory());
            itemDAO.save(cItem);
            return new ResponseEntity<>(cItem,HttpStatus.OK);
        }

        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }
}
