show databases;

use myproject09;

show tables;

desc product ;

SELECT * FROM  product;

insert into product (id,name,description,price,isSoldout)
	values(uuid(),"마우스","마우스!",20000,false);

INSERT into product (id,name,description,price,isSoldout) 
	values (uuid(),"키보드","좋은키보드",10000,false);

insert into product (id,name,description,price,isSoldout)
	values(uuid(),"노트북","노트북!",800000,false);

insert into product (id,name,description,price,isSoldout)
	values(uuid(),"셔츠","셔츠!",80000,false);
insert into product (id,name,description,price,isSoldout)
	values(uuid(),"햄버거","햄버거!",8000,false);

DELETE from product WHERE name ="마우스";

SELECT * FROM  product_saleslocation ps ;

INSERT into product_saleslocation(id,address,addressdetail,lat,lng,meetingTime)
	values(uuid(),"거기 100로 100","거기 상세 550동 305호",37.281723,52.212214,"2022-09-09");

UPDATE product set price = 18000 WHERE name ="키보드"; 

UPDATE product  set productSaleslocationId  = "c6bf602a-3984-11ed-91ab-085bd678b063" WHERE name ="키보드";

select name,price from product;

select p.id,name,price,address,addressDetail as "상세주소"
	from product p ,product_saleslocation ps 
		WHERE p.productSalselocationId = ps.id; 
	
	# 추가 기능 - 1
	update product 
		set isSoldout = TRUE
			WHERE name = "노트북" AND  price = 800000;
	#추가 기능 -2
	UPDATE  product
		set price = 5000
			WHERE  name= "노트북" or name=" 키보드";

select * from product_category;
insert into product_category (id,name) values(uuid(),"전자제품");
insert into product_category (id,name) values(uuid(),"음식");
insert into product_category (id,name) values(uuid(),"의류");

UPDATE product 
	set productCategoryId =
		"fa3ca7fc-3988-11ed-91ab-085bd678b063" 
			WHERE name="키보드";

UPDATE product 
	set productCategoryId =
		"fa3ca7fc-3988-11ed-91ab-085bd678b063"
			WHERE name="노트북";

UPDATE product 
	set productCategoryId =
		"fac4dab0-3988-11ed-91ab-085bd678b063" 
			WHERE name="햄버거";

UPDATE  product  
	set productCategoryId = 
		"fa3ca7fc-3988-11ed-91ab-085bd678b063" 
			WHERE name ="노트북" or name="키보드";
		
-- UPDATE  product  
-- 	set productCategoryId = 
-- 		"fa3ca7fc-3988-11ed-91ab-085bd678b063" 
-- 			WHERE name ="키보드";
		
UPDATE  product  
	set productCategoryId = 
		"fac4dab0-3988-11ed-91ab-085bd678b063" 
			WHERE name ="햄버거";
		
UPDATE  product  
	set productCategoryId = 
		"fb3a1991-3988-11ed-91ab-085bd678b063" 
			WHERE name ="셔츠";

SELECT * from product ;

select pc.name as "카테고리",p.name as "상품명" 
	from product p ,product_category pc 
		WHERE p.productCategoryId  = pc.id ; 
	
-- select 이거볼래 from 어디서 where 이렇게만


	