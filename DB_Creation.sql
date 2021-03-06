USE [master]
GO

CREATE DATABASE [MyForum]
GO

USE [MyForum]
GO

--Create Table 
CREATE TABLE [dbo].[Category](
	[Id] [int] PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Name] [varchar](256) NOT NULL,
	[CreatedOn] [datetime] NULL
)
GO


CREATE TABLE [dbo].[Post](
	[Id] [int] PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Title] [varchar](256) NOT NULL,
	[CategoryId] [int] NOT NULL,
	[PostBody] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL
)
 
GO
ALTER TABLE [dbo].[Post]  WITH CHECK ADD  CONSTRAINT [FK_Post_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
GO
ALTER TABLE [dbo].[Post] CHECK CONSTRAINT [FK_Post_Category]
GO
