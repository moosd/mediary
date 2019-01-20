-- Create Login table
CREATE TABLE EnterLogin
(
	nhs_number INT,
	UserName NVARCHAR(128) NOT NULL,
	Password NVARCHAR(128) NOT NULL,

)


CREATE TABLE Conditions
(
	--nhs_number INT REFERENCES EnterLogin (nhs_number),
	nhs_number INT,
	condition NVARCHAR(128) NOT NULL,
	img1 NVARCHAR(128) NOT NULL,
	img2 NVARCHAR(128) NOT NULL,
)

CREATE TABLE GPAppointments
(
	nhs_number INT,
	patient_notes NVARCHAR(128) NOT NULL,
)	