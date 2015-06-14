
				<table>
					<tr>
						<td>
							<label>Product Id : </label>
							<span><%=data['productId']%></span>
						</td>
						<td>
							<label>Quantity : </label>
							<span><%=data['quantity']%></span>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<label>Product Name </label>
							<input type="text" name="productName" id="productName" value=<%=data['productName']%>></input>
							<span class="help-block hidden"></span>

						</td>
					</tr>
					<tr>
						<td colspan="2">
							<label>Cost Price : </label>
							<span><%=data['costPrice']%></span>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<label>Selling Price </label>
							<input name="sellingPrice" type="text" id="sellingPrice" value=<%=data['sellingPrice']%>></input>
							<span class="help-block hidden"></span>

						</td>
					</tr>

				</table>
