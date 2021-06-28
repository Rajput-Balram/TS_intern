package com.rajput.todo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 
import com.rajput.todo.TodoService;

@WebServlet(urlPatterns = "/list-todo.do")
public class ListTodoServlet extends HttpServlet {
	 
	private TodoService todoService = new TodoService();
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// PrintWriter writer = response.getWriter();
		request.getSession().setAttribute("todos", todoService.retriveTodos());
		request.getRequestDispatcher("/WEB-INF/views/list-todo.jsp").forward(request, response);
	}
	
	 	 
}
