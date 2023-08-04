insert into cliente values
(default, "443.785.553-10", "Jaqueline Souza Martim","19-85916-8673, 19-70565-8763", "13917-152", "105", null),
(default, "789.588.411-50", "Sara Bispo Filho","19-04431-8940", "13917-052", "1025", null),
(default, "731.715.974-38", "Clóvis Martins Bispo","19-20609-9645", "13917-156", "1150", "Fundos"),
(default, "498.084.178-33", "Gilberto Martins Teixeira","19-34251-1302", "13917-158", "1138", "Ap144 bl2"),
(default, "066.453.810-00", "Saulo Martim","19-50210-7927, 19-54920-8113", "13914-552", "1227", null),
(default, "000.000.000-00", "Comer no local","19 99999-9999", "13917-151", "0", null);


insert into motoboy values
(default,"Gilberto Martins","JQT-7I87","CG Titan KS 150 Honda"),
(default,"Clóvis Martins","FZC-9X29","Faser 250 Yamaha"),
(default,"Saulo Martim","LHW-1J81","Ginerae"),
(default,"Sem entrega","AAA-0A00","Sem veículo");


insert into cardapio values
(default, "Parmegiana de Frango", "Filé de frango empanado, coberto com molho de tomate, presunto e queijo mussarela gratinado. Acompanha arroz branco e fritas.", 25.00),
(default, "Parmegiana de Carne", "Filé mignon empanado, coberto com molho de tomate, presunto e queijo mussarela gratinado. Acompanha arroz branco e fritas.", 30.00),
(default, "Contra Filé Argentino", "Contra filé grelhado, com molho de churrasco, farofa, Acompanha arroz branco e feijão.", 50.00),
(default, "Contra Filé Acebolado", "Contra filé grelhado, com molho de churrasco, farofa, Acompanha arroz branco e feijão.", 45.00),
(default, "Bisteca de porco", "Bisteca de porco grelhada, farofa, couve refogada, Acompanha arroz branco, feijão e torresmo.", 49.90),
(default, "Refrigerante de 2L", "Refrigerante de 2L", 15.00),
(default, "Refrigerante de 1L", "Refrigerante de 1L", 12.00),
(default, "Refrigerante de 600ml", "Refrigerante de 600ml", 8.00),
(default, "Refrigerante de 350ml", "Refrigerante de 350ml", 5.00),
(default, "Cerveja de 600ml", "Cerveja de 600ml", 8.00),
(default, "Cerveja de 350ml", "Cerveja de 350ml", 5.00);

insert into pedido values
(default, 1, 1, DATE_ADD(curtime(), INTERVAL -45 minute), DATE_ADD(curtime(), INTERVAL -20 minute), DATE_ADD(curtime(), INTERVAL -5 minute), 0, 5),
(default, 2, 2, DATE_ADD(curtime(), INTERVAL -30 minute), DATE_ADD(curtime(), INTERVAL -15 minute), null, 0, 5),
(default, 6, 4, curtime(), null, null, 0, 0);

insert into itens values
(default, 1, 3, 1, (select preco from cardapio where id = 3)),
(default, 1, 8, 1, (select preco from cardapio where id = 8)),
(default, 2, 1, 2, (select preco from cardapio where id = 1)),
(default, 3, 4, 1, (select preco from cardapio where id = 4)),
(default, 3, 6, 1, (select preco from cardapio where id = 6));


update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 1) where id = 1;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 2) where id = 2;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 3) where id = 3;