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

function createProduct() {
  //... your code goes here
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
});
