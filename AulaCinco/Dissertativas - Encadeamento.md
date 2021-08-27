**1.	O que é um se encadeado?**

E quando vários seletores são postos em sequência.

**2.	Para um condicional com dois “se”s e um senão, a qual if o else está vinculado (interno ou externo)?**

Externo.

**3.	É possível inverter esse vínculo?**

Não é possível.

*Seletor de escolha (caso)*
**1.	Qual a semelhança entre os seletores “se” e “escolha”?**

Ele representa um “de/para”, ou um mapeamento. Semelhante ao o if, podemos utilizar blocos para executar várias instruções na mesma alternativa. E possui um ‘caso senão’, quando nenhum seletor atendeu ao valor de entrada. Esse é o valor padrão, ou default.

**2.	Com quais tipos de dados posso utilizar o switch? (JS e demais linguagens)**

**3.	É necessário o uso de blocos para conjuntos de instruções?**

Sim, pois ele considera o conjunto de instruções como uma única instrução. 

**4.	Porquê as instruções posteriores ao caso atendido também são executadas?** 

Porque o seletor sempre executa uma instrução, independente de terem ou não sido atendidas.

**5.	Qual a função do break?**

Interromper a execução.

**6.	Como relacionar várias alternativas a um mesmo conjunto de instruções?**

Podemos utilizar blocos para executar várias instruções na mesma alternativa.

**7.	Como criar uma alternativa para “nenhuma das anteriores”?**

**8.	Cite exemplos de quando usar e quando não usar um seletor caso.**

Deve ser usada em lista de seleção, grupo de constantes, comparações de igualdade e quando mais de uma opção ‘mapeia’ para o mesmo valor. Não deve ser usada quando temos dois ou menos elementos a testar, quando o tipo de dados não é ordinal (ex. float), quando o operador não é de igualdade e quando o valor das alternativas não é constante.
