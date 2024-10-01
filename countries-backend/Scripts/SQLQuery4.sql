USE [Countries_Database]
GO

/****** Object:  Table [dbo].[Countries]    Script Date: 9/22/2024 11:31:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE [dbo].[Countries]

CREATE TABLE [dbo].[Countries](
	[Country_id] [int] IDENTITY(1,1) NOT NULL,
	[countryName] [varchar](100) NULL,
	[topLevelDomain] [varchar](50) NULL,
	[alpha2Code] [varchar](50) NULL,
	[alpha3Code] [varchar](50) NULL,
	[callingCode] [varchar](50) NULL,
	[capital] [varchar](100) NULL,
	[altSpellings] [varchar](200) NULL,
	[subRegion] [varchar](50) NULL,
	[region] [varchar](50) NULL,
	[population] [int] NULL,
	[latlng] [varchar](50) NULL,
	[demonym] [varbinary](50) NULL,
	[area] [int] NULL,
	[gini] [int] NULL,
	[timezones] [varchar](50) NULL,
	[borders] [varchar](200) NULL,
	[nativeName] [varchar](50) NULL,
	[numericCode] [int] NULL,
	[flag] [varchar](200) NULL,
	[cioc] [varchar](50) NULL,
	[independent] [bit] NULL,
)

