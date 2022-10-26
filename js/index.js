// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span').textContent;
  console.log('**********');
  let subtotalNumber = +price * +quantity;
  //... your code goes here
  console.log(price, '<price');
  console.log(quantity, '<quantity');
  console.log(subtotalNumber, typeof +subtotalNumber);
  product.querySelector('.subtotal span').textContent = subtotalNumber;
  return +subtotalNumber;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
   */
  // end of test
  // ITERATION 2
  //... your code goes here
  const listaProducts = document.getElementsByClassName('product');
  let totalGeral = 0;
  console.log(listaProducts, '<lista produtos');
  for (let i = 0; i < listaProducts.length; i++) {
    totalGeral += updateSubtotal(listaProducts[i]);
  }
  console.log(totalGeral, '< total');
  // ITERATION 3
  //... your code goes here
  let elementoTotal = document.getElementById('total-value').firstElementChild;
  console.log(elementoTotal, 'elemento de valor total');
  elementoTotal.textContent = totalGeral;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  console.log(target.parentElement, '< parent');
  let trRemover = target.parentElement.parentElement;
  trRemover.parentElement.removeChild(trRemover);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const tbody = document.getElementsByTagName('tbody');
  console.log(tbody, 'table body');
  let tr = document.createElement('tr');
  tr.classList.add('product');
  console.log(tr, '< new row gerado');
  let trCriadoAppended = tbody[0].appendChild(tr);
  console.log(trCriadoAppended, 'tr appended');
  console.log(tbody, 'tbody');
  //let produtoBase = event.currentTarget.parentElement.parentElement;
  let productName = document.querySelector('[placeholder="Product Name"]');
  console.log(productName.value, '<--productName');
  //let test = document.querySelector('Product Name');
  //console.log(test, '<<---- query');
  let productPrice = document.querySelector('[placeholder="Product Price"]');
  console.log(productPrice.value, '<--productPrice');
  //console.log(produtoBase, 'pai da linha ser copiada');

  // formando o novo td

  let incluirTR = `<td class="name">
    <span>${productName.value}</span>
   </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
   </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
   </td>`;
  trCriadoAppended.innerHTML = incluirTR;

  //pegando novo botão do novo produto
  let Novobotao = trCriadoAppended.getElementsByTagName('button');

  console.log(Novobotao, '<<<--novo button');

  Novobotao[0].addEventListener('click', removeProduct);
  //---------------- zerando o footer
  productName.value = '';
  productPrice.value = '0';
  //-------------------
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtnList = document.querySelectorAll('.btn-remove');
  console.log(removeProductBtnList);
  removeProductBtnList.forEach((element) => {
    element.addEventListener('click', removeProduct);
    console.log(element, 'escutando');
  });
  //removeProductBtn.addEventListener('click', removeProduct);
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
