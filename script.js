function calcularPreco() {
    const precoEtiqueta = 100;
    const formaDePagamento = parseInt(document.getElementById('formaDePagamento').value);
  
    function aplicarDesconto(valor, desconto) {
      return valor - (valor * (desconto / 100));
    }
  
    function aplicarJuros(valor, juros) {
      return valor + (valor * (juros / 100));
    }
  
    let resultado;
  
    if (formaDePagamento === 1) {
      resultado = aplicarDesconto(precoEtiqueta, 10);
    } else if (formaDePagamento === 2) {
      resultado = aplicarDesconto(precoEtiqueta, 15);
    } else if (formaDePagamento === 3) {
      resultado = precoEtiqueta;
    } else if (formaDePagamento === 4) {
      resultado = aplicarJuros(precoEtiqueta, 10);
    }
  
    document.getElementById('resultado').textContent = `Preço final: R$ ${resultado.toFixed(2)}`;
  }
  
  document.getElementById('calcularBtn').addEventListener('click', calcularPreco);
  
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });
  