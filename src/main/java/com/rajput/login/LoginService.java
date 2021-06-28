package com.rajput.login;

public class LoginService {
	public boolean isUserValid(String user, String password) {
		if(!(user.equals("ram") && password.equals("krishna")))
			return false;
		return true;
	}
}
