 <%@ include file="../common/header.jspf"%>
 <%@ include file="../common/nav.jspf"%>
	

	<div class="container">
		<H1>Welcome ${name}</H1>

		Your Todo's are
		<table class="table table-striped">
			<caption> </caption>
			<thead>
				<th>Description</th>
				<th>Category</th>
				<th>Actions</th>
			</thead>
			<tbody>
				<c:forEach items="${todos}" var="todo">
					<tr>
						<td>${todo.name}</td>
						<td>${todo.category}</td>
						<td><a class="btn btn-danger"
							href="/delete-todo.do?todo=${todo.name}&category=${todo.category}">Delete</a></td>
					</tr>
				</c:forEach>
			</tbody>

		</table>

		<p>
			<font color="red">${errorMessage}</font>
		</p>

		<a class="btn btn-success" href="add-todo.do">Add New Todo</a>

	</div>

<%@ include file="../common/footer.jspf"%>
