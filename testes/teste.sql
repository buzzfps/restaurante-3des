insert into cliente values 
(default, "443.785.553-10", "Jacinto rego", "19-99876-2115", "13917-152", "105", null),
(default, "443.549.685-10", "Gabriel Zonta", "19-99876-3942", "13917-283", "83", null),
(default, "443.785.553-10", "Jacinto rego", "19-99876-2115", "13917-152", "105", null),
(default, "443.785.553-10", "Jacinto rego", "19-99876-2115", "13917-152", "105", null),
(default, "443.785.553-10", "Jacinto rego", "19-99876-2115", "13917-152", "105", null),
(default, "")

insert into motoboy values 
(default, "Jair mendes", "JDA-393", "CG Titan KS 150 Honda"),
(default, "João Silva", "KFJ-352", "Faser 250 Yamaha"),
(default, "Indio da Silva", "KFH-834", "Ginerae"),
(default, "Sem entrega", "AAA-000", "Sem Veiculo");

insert into cardapio values
(default, "Parmegiana de Frango", "Filé de frango empanado, coberto com molho de tomate, preseunto queijo e mussarela gratinado", 50),
(default, "Contra filé Acebolado", "Contra filé com molho de churrasco, farofa, Acompanha arroz e feijão.", 50),
(default, "Refrigerante 2L", "Refrigerante de 2 Litros" null, 15),
(default, "Cerveja de 600ML", "Cerveja de 600 ML" null, 8);

insert into pedido values 
(default, 1, 1, curtime(), DATE_ADD(curtime(),INTERVAL 10 minute), DATE_ADD(curtime(),INTERVAL 25 minute), 0, 5),
(default, 2, 2, curtime(), DATE_ADD(curtime(),INTERVAL 15 minute), null, 0, 5),
(default, 6, 2, curtime(), null, null, 0, 0);
insert into itens values 
(default, 1, 3, 1, (select preco from cardapio where  id = 3)),
(default, 1, 8, 1, (select preco from cardapio where id = 8)),

update pedido set dataCozinha = curtime(), dataEntrega = curtime() where id = 1;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 1) where id = 1;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 3) where id = 1;


