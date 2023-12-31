package org.example.backend.controller;

import org.example.backend.exception.CartItemException;
import org.example.backend.exception.UserException;
import org.example.backend.model.User;
import org.example.backend.response.ApiResponse;
import org.example.backend.service.CartItemService;
import org.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cart/")
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;
	
	@Autowired
	private UserService userService;
	
	@DeleteMapping("/{cartItemId}")
	public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId, @RequestHeader("Authorization")String jwt) throws UserException, CartItemException{
		
		User user = userService.findUserProfileByJwt(jwt);
		
		cartItemService.removeCartItem(user.getId(), cartItemId);
		
		ApiResponse res = new ApiResponse();
		res.setMessage("Delete cart item complete!");
		res.setStatus(true);
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
	//add new cartItem...
}
