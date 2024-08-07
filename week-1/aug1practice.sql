SET SEARCH_PATH TO testtable3;
CREATE TABLE bankaccounts (account_no varchar(20) PRIMARY KEY NOT NULL, funds decimal(8,2));
SELECT * FROM bankaccounts;
INSERT INTO bankaccounts(account_no, funds) VALUES('ACC1', 1000);
INSERT INTO bankaccounts VALUES('ACC2', 1000);

START TRANSACTION; --statement1
UPDATE bankaccounts SET funds=funds-100 WHERE account_no='ACC1'; --statement2
UPDATE bankaccounts SET funds=funds+100 WHERE account_no='ACC2'; --statement3
COMMIT; --statement4

START TRANSACTION;
INSERT INTO bankaccounts VALUES('ACC3', 10000);
SAVEPOINT sv;
INSERT INTO bankaccounts VALUES('ACC4', 900000);
ROLLBACK TO sv;
INSERT INTO bankaccounts VALUES('ACC4', 900000);
COMMIT;
