-- Create table promociones

CREATE TABLE
    `palaciochinopremium`.`promociones` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(45) NOT NULL,
        `imageURL` VARCHAR(300) NOT NULL,
        `price` DECIMAL(7, 2) NOT NULL,
        PRIMARY KEY (`id`)
    );

-- Insert test data into promociones table

INSERT INTO
    `palaciochinopremium`.`promociones` (`name`, `imageURL`, `price`)
VALUES (
        'combo encájate pollo teriaki',
        'https://culturachina.net/wp-content/uploads/2018/12/comida-china-tradicional-1024x683.jpg',
        '30.00'
    );