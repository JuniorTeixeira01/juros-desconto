 
   let btn = document.querySelector("#btn");

   btn.addEventListener('click' , function() {
     
        let PrimeiroValor = parseInt(prompt("Informe o Valor:"));
        let valor1 = document.querySelector("#valor-1");
        valor1.append("Valor Digitado: ", PrimeiroValor);
        let porcentagem = parseInt(prompt("Informe a Porcentagem:"));
        let valor2 = document.querySelector("#valor-2");
        valor2.append("Porcentagem Digitada: ", porcentagem, "%");    
      
        let formulaDesconto = PrimeiroValor * (porcentagem / 100);
        let desconto =  PrimeiroValor - formulaDesconto ;
        
        let juros = PrimeiroValor + formulaDesconto;
       
       
        let valor3 = document.querySelector("#valor-3");
        let valor4 = document.querySelector("#valor-4");
        valor3.append(PrimeiroValor,",0 com ", porcentagem , ",0% de desconto é: ", desconto);
        valor4.append(PrimeiroValor,",0 com ", porcentagem , ",0% de juros é: ", juros);  
   });

   
   
    /* Então, aplique a fórmula: valor do desconto = preço original x (porcentagem de desconto / 100%).
     O valor do desconto é a diferença entre o preço original e o com desconto. */
   
   /* A fórmula do juro simples é J = C ∙ i ∙ t, 
   em que J é o juro, C é o capital, i é a taxa de juro e t é o tempo. Para calcular 
   o juro simples, basta substituir os valores na fórmula e realizar o cálculo. */
    

   



    

   



    
