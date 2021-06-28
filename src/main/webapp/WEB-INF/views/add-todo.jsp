 
<%@ include file="../common/header.jspf"%>
<%@ include file="../common/nav.jspf"%>


	 <div class="container">
		 Your New Action Item:
		<form method="POST" action="/add-todo.do">
		<fieldset class="form-group">
			<label>Description </label>
			 <input name="newtodo" type="text" class="form-control"/><br>
		</fieldset >
		<fieldset class="form-group">
			<label>Category </label>
			 <input name="category" type="text" class="form-control" /><br>
		</fieldset>
			  
			 
			<input name="add"
				type="submit" value="submit" class="btn btn-success"/>
		</form>
	</div>

	 <%@ include file="../common/footer.jspf"%>