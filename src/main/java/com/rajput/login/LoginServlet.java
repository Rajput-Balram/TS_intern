package com.rajput.login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 
import com.rajput.todo.TodoService;

@WebServlet(urlPatterns = "/login.do")
public class LoginServlet extends HttpServlet {
	private LoginService userValidationService = new LoginService();
	//private TodoService todoService = new TodoService();
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(request, response);

	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//PrintWriter writer = response.getWriter();
		 
		String name = request.getParameter("name");
		String password = request.getParameter("password");
	
		boolean isUserValid = userValidationService.isUserValid(name, password);
		
		if(isUserValid) {
			request.getSession().setAttribute("name", name);
			 response.sendRedirect("/list-todo.do");
		} else { 
			request.setAttribute("errorMessage", "invalid credentials!");
			request.getRequestDispatcher("/WEB-INF/views/login.jsp").forward(request, response);
		}

	}
}
