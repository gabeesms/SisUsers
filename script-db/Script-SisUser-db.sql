USE [SISUSER]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 01/04/2021 20:17:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AuditLog]    Script Date: 01/04/2021 20:17:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuditLog](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[TableName] [nvarchar](max) NOT NULL,
	[DateTime] [datetime2](7) NOT NULL,
	[KeyValues] [nvarchar](max) NOT NULL,
	[OldValues] [nvarchar](max) NULL,
	[NewValues] [nvarchar](max) NOT NULL,
	[UsuarioId] [bigint] NOT NULL,
 CONSTRAINT [PK_AuditLog] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 01/04/2021 20:17:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[nome] [nvarchar](100) NOT NULL,
	[email] [nvarchar](50) NULL,
	[telefone] [nvarchar](14) NULL,
	[cep] [nvarchar](9) NULL,
	[logradouro] [nvarchar](100) NULL,
	[numero] [nvarchar](5) NULL,
	[complemento] [nvarchar](50) NULL,
	[bairro] [nvarchar](20) NULL,
	[localidade] [nvarchar](50) NULL,
	[uf] [nvarchar](2) NULL,
	[registroDate] [datetime2](7) NOT NULL,
	[cpf] [nvarchar](13) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Usuario] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [registroDate]
GO
