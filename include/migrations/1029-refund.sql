ALTER TABLE deltagere ADD COLUMN refund_hash CHAR(32) DEFAULT NULL;
ALTER TABLE deltagere ADD COLUMN refund_stay_alea enum('ja','nej');
ALTER TABLE deltagere ADD COLUMN refund_reg int(4) DEFAULT NULL;
ALTER TABLE deltagere ADD COLUMN refund_account int(20) DEFAULT NULL;
ALTER TABLE deltagere ADD COLUMN refund_completed enum('ja','nej') DEFAULT 'nej';